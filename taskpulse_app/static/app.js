// TaskPulse Frontend Logic - REST API Connector
document.addEventListener("DOMContentLoaded", () => {
    const API_URL = "/api/tasks";

    // DOM Elements
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("task-list");
    const tabBtns = document.querySelectorAll(".tab-btn");
    const priorityFilter = document.getElementById("priority-filter");
    const searchInput = document.getElementById("search-input");

    // Stat Counters
    const statTotal = document.getElementById("stat-total");
    const statPending = document.getElementById("stat-pending");
    const statCompleted = document.getElementById("stat-completed");
    const statRate = document.getElementById("stat-rate");

    // State Variables
    let allTasks = [];
    let currentFilter = "all"; // all, pending, completed
    let currentPriority = "All";
    let searchQuery = "";

    // Fetch All Tasks from FastAPI Database
    async function fetchTasks() {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error("Failed to fetch tasks");
            allTasks = await response.json();
            updateStats();
            renderTasks();
        } catch (error) {
            console.error("Error loading tasks:", error);
            taskList.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-triangle-exclamation" style="color: var(--accent-rose);"></i>
                    <p>Failed to connect to backend database.</p>
                </div>
            `;
        }
    }

    // Calculate & Render Dashboard Stats
    function updateStats() {
        const total = allTasks.length;
        const completed = allTasks.filter(t => t.completed).length;
        const pending = total - completed;
        const rate = total > 0 ? Math.round((completed / total) * 100) : 0;

        statTotal.textContent = total;
        statPending.textContent = pending;
        statCompleted.textContent = completed;
        statRate.textContent = `${rate}%`;
    }

    // Render Filtered Tasks
    function renderTasks() {
        let filtered = [...allTasks];

        // Status Filter
        if (currentFilter === "pending") {
            filtered = filtered.filter(t => !t.completed);
        } else if (currentFilter === "completed") {
            filtered = filtered.filter(t => t.completed);
        }

        // Priority Filter
        if (currentPriority !== "All") {
            filtered = filtered.filter(t => t.priority === currentPriority);
        }

        // Search Filter
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            filtered = filtered.filter(t => 
                t.title.toLowerCase().includes(q) || 
                (t.description && t.description.toLowerCase().includes(q))
            );
        }

        if (filtered.length === 0) {
            taskList.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-inbox"></i>
                    <p>No tasks found for the selected criteria.</p>
                </div>
            `;
            return;
        }

        taskList.innerHTML = filtered.map(task => `
            <div class="task-item ${task.completed ? 'completed' : ''}" data-id="${task.id}">
                <div class="task-left">
                    <div class="checkbox-custom" onclick="toggleTaskCompletion(${task.id}, ${!task.completed})">
                        ${task.completed ? '<i class="fa-solid fa-check"></i>' : ''}
                    </div>
                    <div class="task-content">
                        <div class="task-title-text">${escapeHtml(task.title)}</div>
                        ${task.description ? `<div class="task-desc-text">${escapeHtml(task.description)}</div>` : ''}
                        <div class="task-meta">
                            <span class="badge badge-${task.priority.toLowerCase()}">${task.priority}</span>
                            <span class="badge badge-category">${escapeHtml(task.category)}</span>
                        </div>
                    </div>
                </div>
                <div class="task-actions">
                    <button class="btn-icon" onclick="deleteTask(${task.id})" title="Delete Task">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Add Task to Database (POST Endpoint)
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const title = document.getElementById("task-title").value.trim();
        const description = document.getElementById("task-description").value.trim();
        const priority = document.getElementById("task-priority").value;
        const category = document.getElementById("task-category").value;

        if (!title) return;

        const btnSubmit = document.getElementById("btn-submit");
        btnSubmit.disabled = true;
        btnSubmit.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Saving...`;

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, description, priority, category })
            });

            if (response.ok) {
                form.reset();
                await fetchTasks();
            } else {
                alert("Failed to save task.");
            }
        } catch (err) {
            console.error("Error creating task:", err);
        } finally {
            btnSubmit.disabled = false;
            btnSubmit.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Add Task to Database`;
        }
    });

    // Toggle Completion (PUT Endpoint)
    window.toggleTaskCompletion = async (id, newCompletedState) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ completed: newCompletedState })
            });
            if (response.ok) {
                await fetchTasks();
            }
        } catch (err) {
            console.error("Error toggling completion:", err);
        }
    };

    // Delete Task (DELETE Endpoint)
    window.deleteTask = async (id) => {
        if (!confirm("Are you sure you want to delete this task?")) return;

        try {
            const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
            if (response.ok) {
                await fetchTasks();
            }
        } catch (err) {
            console.error("Error deleting task:", err);
        }
    };

    // Filter Listeners
    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilter = btn.dataset.filter;
            renderTasks();
        });
    });

    priorityFilter.addEventListener("change", (e) => {
        currentPriority = e.target.value;
        renderTasks();
    });

    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        renderTasks();
    });

    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }

    // Initial Load
    fetchTasks();
});
