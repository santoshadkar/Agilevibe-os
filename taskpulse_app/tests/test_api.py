import sys
import os
import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

# Ensure project root is in Python import path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from app.main import app
from app.database import Base, get_db

# Create isolated in-memory SQLite database for automated testing
SQLALCHEMY_DATABASE_URL = "sqlite:///:memory:"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    connect_args={"check_same_thread": False},
    poolclass=StaticPool,
)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def override_get_db():
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db
client = TestClient(app)

@pytest.fixture(autouse=True)
def setup_database():
    """Re-create database tables before each test run."""
    Base.metadata.create_all(bind=engine)
    yield
    Base.metadata.drop_all(bind=engine)

def test_health_check():
    """Verify that health check endpoint returns 200 OK."""
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json() == {"status": "healthy", "service": "TaskPulse API"}

def test_create_task():
    """Verify task creation endpoint."""
    task_data = {
        "title": "Set up CI/CD pipeline",
        "description": "Configure GitHub Actions workflow for automated testing",
        "priority": "High",
        "category": "DevOps"
    }
    response = client.post("/api/tasks", json=task_data)
    assert response.status_code == 201
    data = response.json()
    assert data["title"] == task_data["title"]
    assert data["completed"] is False
    assert "id" in data

def test_get_tasks():
    """Verify retrieving list of tasks."""
    # Create two test tasks
    client.post("/api/tasks", json={"title": "Task 1", "priority": "High"})
    client.post("/api/tasks", json={"title": "Task 2", "priority": "Low"})

    response = client.get("/api/tasks")
    assert response.status_code == 200
    tasks = response.json()
    assert len(tasks) == 2

def test_update_task_completion():
    """Verify updating task completion status."""
    create_resp = client.post("/api/tasks", json={"title": "Test Update"})
    task_id = create_resp.json()["id"]

    update_resp = client.put(f"/api/tasks/{task_id}", json={"completed": True})
    assert update_resp.status_code == 200
    assert update_resp.json()["completed"] is True

def test_delete_task():
    """Verify task deletion."""
    create_resp = client.post("/api/tasks", json={"title": "Test Delete"})
    task_id = create_resp.json()["id"]

    delete_resp = client.delete(f"/api/tasks/{task_id}")
    assert delete_resp.status_code == 204

    # Verify task is deleted from database
    get_resp = client.get(f"/api/tasks/{task_id}")
    assert get_resp.status_code == 404
