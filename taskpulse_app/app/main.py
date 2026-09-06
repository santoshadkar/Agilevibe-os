from typing import List, Optional
from fastapi import FastAPI, Depends, HTTPException, Query, status
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session

from app.database import engine, Base, get_db
from app.schemas import TaskCreate, TaskUpdate, TaskResponse
from app import crud

# Create database tables automatically
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="TaskPulse API",
    description="A modern Task & Productivity Management API with SQLite/PostgreSQL storage",
    version="1.0.0"
)

# Serve static frontend files
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
def read_root():
    """Serves the main single page application UI."""
    return FileResponse("static/index.html")

@app.get("/api/health")
def health_check():
    """Health check endpoint for monitoring & CI/CD deployment verification."""
    return {"status": "healthy", "service": "TaskPulse API"}

@app.get("/api/tasks", response_model=List[TaskResponse])
def read_tasks(
    completed: Optional[bool] = None,
    priority: Optional[str] = Query(None, description="Filter by High, Medium, or Low priority"),
    db: Session = Depends(get_db)
):
    """Retrieve all tasks with optional filtering."""
    return crud.get_tasks(db=db, completed=completed, priority=priority)

@app.post("/api/tasks", response_model=TaskResponse, status_code=status.HTTP_201_CREATED)
def create_new_task(task: TaskCreate, db: Session = Depends(get_db)):
    """Create a new task."""
    if not task.title.strip():
        raise HTTPException(status_code=400, detail="Task title cannot be empty")
    return crud.create_task(db=db, task=task)

@app.get("/api/tasks/{task_id}", response_model=TaskResponse)
def read_task(task_id: int, db: Session = Depends(get_db)):
    """Retrieve a single task by ID."""
    db_task = crud.get_task_by_id(db=db, task_id=task_id)
    if not db_task:
        raise HTTPException(status_code=404, detail="Task not found")
    return db_task

@app.put("/api/tasks/{task_id}", response_model=TaskResponse)
def update_existing_task(task_id: int, task_update: TaskUpdate, db: Session = Depends(get_db)):
    """Update task details or completion status."""
    updated_task = crud.update_task(db=db, task_id=task_id, task_update=task_update)
    if not updated_task:
        raise HTTPException(status_code=404, detail="Task not found")
    return updated_task

@app.delete("/api/tasks/{task_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_existing_task(task_id: int, db: Session = Depends(get_db)):
    """Delete a task."""
    success = crud.delete_task(db=db, task_id=task_id)
    if not success:
        raise HTTPException(status_code=404, detail="Task not found")
    return None
