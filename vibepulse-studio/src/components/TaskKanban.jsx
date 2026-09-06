import React, { useState, useEffect } from 'react';
import { Plus, Check, Trash2, ArrowRight, ArrowLeft, Tag, Layers, Download, Upload } from 'lucide-react';

const INITIAL_TASKS = [
  { id: '1', title: 'Design core architecture', priority: 'High', status: 'done', pomodoros: 2 },
  { id: '2', title: 'Build Web Audio soundscape engine', priority: 'High', status: 'in_flow', pomodoros: 3 },
  { id: '3', title: 'Refine UI visualizer & glassmorphism', priority: 'Medium', status: 'todo', pomodoros: 1 }
];

export default function TaskKanban() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('vibepulse_kanban_tasks');
    return saved ? JSON.parse(saved) : INITIAL_TASKS;
  });

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('Medium');
  const [newTaskPomos, setNewTaskPomos] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    localStorage.setItem('vibepulse_kanban_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask = {
      id: Date.now().toString(),
      title: newTaskTitle.trim(),
      priority: newTaskPriority,
      status: 'todo',
      pomodoros: newTaskPomos
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
    setIsAdding(false);
  };

  const moveTask = (taskId, newStatus) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, status: newStatus } : t));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  const exportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(tasks, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `vibepulse_tasks_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const getPriorityBadge = (priority) => {
    switch(priority) {
      case 'High':
        return 'bg-rose-500/10 border-rose-500/30 text-rose-400';
      case 'Medium':
        return 'bg-amber-500/10 border-amber-500/30 text-amber-400';
      default:
        return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400';
    }
  };

  const columns = [
    { id: 'todo', title: 'To Do', color: 'text-slate-300' },
    { id: 'in_flow', title: 'In Flow', color: 'text-cyan-400' },
    { id: 'done', title: 'Completed', color: 'text-emerald-400' }
  ];

  return (
    <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white tracking-wide">Focus Task Kanban</h2>
            <p className="text-xs text-slate-400">Organize deep work & sessions</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={exportJSON}
            className="p-2 rounded-xl bg-slate-800/60 border border-slate-700 text-slate-300 hover:text-white transition-all text-xs flex items-center space-x-1.5"
            title="Export tasks JSON"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export</span>
          </button>
          <button
            onClick={() => setIsAdding(!isAdding)}
            className="px-3 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center space-x-1.5 transition-all shadow-lg shadow-purple-500/20"
          >
            <Plus className="w-4 h-4" />
            <span>Add Task</span>
          </button>
        </div>
      </div>

      {/* Add Task Drawer */}
      {isAdding && (
        <form onSubmit={addTask} className="bg-slate-950/80 border border-purple-500/30 rounded-xl p-4 space-y-3">
          <input
            type="text"
            placeholder="Task title..."
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
            autoFocus
          />

          <div className="flex items-center justify-between space-x-3">
            <div className="flex items-center space-x-2">
              <label className="text-xs text-slate-400">Priority:</label>
              {['Low', 'Medium', 'High'].map((p) => (
                <button
                  type="button"
                  key={p}
                  onClick={() => setNewTaskPriority(p)}
                  className={`px-2.5 py-1 text-xs rounded-md border ${
                    newTaskPriority === p
                      ? getPriorityBadge(p) + ' font-bold'
                      : 'border-slate-800 text-slate-400'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="px-3 py-1.5 text-xs text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 bg-purple-600 text-white text-xs font-semibold rounded-lg hover:bg-purple-500"
              >
                Create
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Columns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {columns.map((col) => {
          const colTasks = tasks.filter(t => t.status === col.id);
          return (
            <div key={col.id} className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-4 space-y-3 min-h-[220px]">
              <div className="flex items-center justify-between border-b border-slate-800/60 pb-2">
                <span className={`text-xs font-bold uppercase tracking-wider ${col.color}`}>
                  {col.title}
                </span>
                <span className="text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full font-mono">
                  {colTasks.length}
                </span>
              </div>

              <div className="space-y-2.5">
                {colTasks.map((task) => (
                  <div
                    key={task.id}
                    className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 space-y-2 group hover:border-slate-700 transition-all shadow-md"
                  >
                    <div className="flex items-start justify-between">
                      <p className="text-sm font-medium text-slate-200 leading-snug">{task.title}</p>
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="text-slate-600 hover:text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity p-1"
                        title="Delete Task"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className={`px-2 py-0.5 rounded-md border text-[10px] ${getPriorityBadge(task.priority)}`}>
                        {task.priority}
                      </span>

                      {/* Direction Controls */}
                      <div className="flex items-center space-x-1">
                        {col.id !== 'todo' && (
                          <button
                            onClick={() => moveTask(task.id, col.id === 'done' ? 'in_flow' : 'todo')}
                            className="p-1 text-slate-400 hover:text-white bg-slate-800 rounded"
                            title="Move Back"
                          >
                            <ArrowLeft className="w-3 h-3" />
                          </button>
                        )}
                        {col.id !== 'done' && (
                          <button
                            onClick={() => moveTask(task.id, col.id === 'todo' ? 'in_flow' : 'done')}
                            className="p-1 text-cyan-400 hover:text-cyan-300 bg-cyan-950/50 border border-cyan-800/40 rounded flex items-center space-x-1"
                            title="Move Forward"
                          >
                            <span className="text-[10px]">Next</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {colTasks.length === 0 && (
                  <div className="text-center py-8 text-xs text-slate-600 border border-dashed border-slate-800/60 rounded-xl">
                    No tasks in {col.title}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
