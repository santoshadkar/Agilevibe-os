import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, Bell, BellOff, CheckCircle2, AlertTriangle, Play, Sparkles, Plus, Trash2, Sun, Sunset } from 'lucide-react';
import { soundscape } from '../audio/soundscapeEngine';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Helper to generate 25-min time slots from startHour to endHour
const generateDefaultSlots = (isWeekend = false) => {
  if (isWeekend) {
    return [
      { id: 'w1', time: '10:00 - 10:25', task: 'Morning Coffee & Free Reading', category: 'Weekend', completed: false },
      { id: 'w2', time: '11:00 - 11:25', task: 'Hobby & Personal Project', category: 'Weekend', completed: false },
      { id: 'w3', time: '15:00 - 15:25', task: 'Outdoor Walk or Exercise', category: 'Weekend', completed: false }
    ];
  }

  const slots = [];
  let currentMin = 9 * 60; // 9:00 AM
  const endMin = 18 * 60; // 6:00 PM

  let count = 1;
  while (currentMin + 25 <= endMin) {
    const startH = Math.floor(currentMin / 60).toString().padStart(2, '0');
    const startM = (currentMin % 60).toString().padStart(2, '0');
    const slotEnd = currentMin + 25;
    const endH = Math.floor(slotEnd / 60).toString().padStart(2, '0');
    const endM = (slotEnd % 60).toString().padStart(2, '0');

    slots.push({
      id: `slot_${count}`,
      time: `${startH}:${startM} - ${endH}:${endM}`,
      startMinutes: currentMin,
      endMinutes: slotEnd,
      task: count === 1 ? 'Daily Goal & Standup Sync' : count === 3 ? 'Deep Focus Session 1' : '',
      category: count % 2 === 0 ? 'Focus' : 'Planning',
      completed: false
    });

    currentMin += 30; // 25 mins work + 5 mins break gap
    count++;
  }

  return slots;
};

export default function DayPlanner() {
  const [selectedDay, setSelectedDay] = useState(() => {
    const todayIndex = new Date().getDay(); // 0 is Sun, 1 is Mon...
    const map = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return map[todayIndex];
  });

  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [plannerData, setPlannerData] = useState(() => {
    const saved = localStorage.getItem('vibepulse_day_planner');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    // Default initial data structure for all days
    const initial = {};
    DAYS.forEach(day => {
      const isWknd = day === 'Saturday' || day === 'Sunday';
      initial[day] = generateDefaultSlots(isWknd);
    });
    return initial;
  });

  const [nowMinutes, setNowMinutes] = useState(() => {
    const d = new Date();
    return d.getHours() * 60 + d.getMinutes();
  });

  const notifiedSlotsRef = useRef(new Set());

  // Update current time & check deadline alarms
  useEffect(() => {
    const timer = setInterval(() => {
      const d = new Date();
      const currentMin = d.getHours() * 60 + d.getMinutes();
      setNowMinutes(currentMin);

      // Check current day slots for deadline notifications
      const todayIndex = d.getDay();
      const map = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const todayName = map[todayIndex];

      if (selectedDay === todayName && plannerData[todayName]) {
        plannerData[todayName].forEach((slot) => {
          if (!slot.completed && slot.endMinutes && currentMin >= slot.endMinutes && !notifiedSlotsRef.current.has(slot.id)) {
            triggerDeadlineAlarm(slot);
            notifiedSlotsRef.current.add(slot.id);
          }
        });
      }
    }, 10000); // Check every 10 sec

    return () => clearInterval(timer);
  }, [selectedDay, plannerData]);

  // Persist to local storage
  useEffect(() => {
    localStorage.setItem('vibepulse_day_planner', JSON.stringify(plannerData));
  }, [plannerData]);

  const requestNotificationPermission = () => {
    if ('Notification' in window) {
      Notification.requestPermission().then((perm) => {
        if (perm === 'granted') {
          setNotificationsEnabled(true);
          new Notification('VibePulse Alarms Active', {
            body: 'You will receive 25-minute slot deadline alerts.'
          });
        }
      });
    }
  };

  const triggerDeadlineAlarm = (slot) => {
    soundscape.playCompletionChime();

    if (notificationsEnabled && 'Notification' in window && Notification.permission === 'granted') {
      new Notification(`⏰ 25-Min Deadline Reached!`, {
        body: `Slot "${slot.time}" finished: ${slot.task || '25-minute block complete.'}`
      });
    }
  };

  const toggleComplete = (slotId) => {
    const updated = (plannerData[selectedDay] || []).map(s => s.id === slotId ? { ...s, completed: !s.completed } : s);
    setPlannerData({ ...plannerData, [selectedDay]: updated });
  };

  const updateTaskText = (slotId, text) => {
    const updated = (plannerData[selectedDay] || []).map(s => s.id === slotId ? { ...s, task: text } : s);
    setPlannerData({ ...plannerData, [selectedDay]: updated });
  };

  const addWeekendSlot = () => {
    const current = plannerData[selectedDay] || [];
    const newSlot = {
      id: `custom_${Date.now()}`,
      time: '14:00 - 14:25',
      task: 'Custom Weekend Activity',
      category: 'Weekend',
      completed: false
    };
    setPlannerData({ ...plannerData, [selectedDay]: [...current, newSlot] });
  };

  const deleteSlot = (slotId) => {
    const updated = (plannerData[selectedDay] || []).filter(s => s.id !== slotId);
    setPlannerData({ ...plannerData, [selectedDay]: updated });
  };

  const isWeekend = selectedDay === 'Saturday' || selectedDay === 'Sunday';
  const slotsForDay = plannerData[selectedDay] || [];

  return (
    <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white tracking-wide">25-Min Slot Day Planner</h2>
            <p className="text-xs text-slate-400">Time-blocked schedule with deadline alarms</p>
          </div>
        </div>

        {/* Notifications & Alarm Toggle */}
        <button
          onClick={requestNotificationPermission}
          className={`px-3 py-2 rounded-xl border text-xs font-semibold flex items-center space-x-2 transition-all ${
            notificationsEnabled
              ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
              : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:text-white'
          }`}
        >
          {notificationsEnabled ? <Bell className="w-4 h-4 text-emerald-400" /> : <BellOff className="w-4 h-4 text-slate-400" />}
          <span>{notificationsEnabled ? 'Alarms Enabled' : 'Enable Alarms'}</span>
        </button>
      </div>

      {/* Day Selector Navigation */}
      <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 scrollbar-none">
        {DAYS.map((day) => {
          const isSelected = selectedDay === day;
          const isWknd = day === 'Saturday' || day === 'Sunday';
          return (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap flex items-center space-x-1.5 ${
                isSelected
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/20'
                  : isWknd
                  ? 'bg-amber-500/10 border border-amber-500/20 text-amber-300 hover:bg-amber-500/20'
                  : 'bg-slate-800/40 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {isWknd && <Sun className="w-3.5 h-3.5" />}
              <span>{day}</span>
            </button>
          );
        })}
      </div>

      {/* Weekend Notice Banner */}
      {isWeekend && (
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex items-center justify-between text-xs text-amber-300">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span><strong>Weekend Free Flow:</strong> Workday constraints are off! Add custom relaxation or project slots as you wish.</span>
          </div>
          <button
            onClick={addWeekendSlot}
            className="ml-3 px-3 py-1.5 bg-amber-500/20 border border-amber-500/40 text-amber-200 rounded-lg font-semibold hover:bg-amber-500/30 flex items-center space-x-1 shrink-0"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Slot</span>
          </button>
        </div>
      )}

      {/* Time Slots List */}
      <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
        {slotsForDay.map((slot) => {
          let statusBadge = null;

          if (slot.startMinutes && slot.endMinutes) {
            if (slot.completed) {
              statusBadge = <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">DONE</span>;
            } else if (nowMinutes >= slot.startMinutes && nowMinutes < slot.endMinutes) {
              statusBadge = <span className="px-2 py-0.5 rounded text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 animate-pulse font-bold">ACTIVE NOW</span>;
            } else if (nowMinutes >= slot.endMinutes) {
              statusBadge = <span className="px-2 py-0.5 rounded text-[10px] bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center space-x-1"><AlertTriangle className="w-3 h-3 inline" /><span>PASSED</span></span>;
            } else {
              statusBadge = <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400">UPCOMING</span>;
            }
          }

          return (
            <div
              key={slot.id}
              className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl border transition-all space-y-2 sm:space-y-0 ${
                slot.completed
                  ? 'bg-slate-950/30 border-slate-900 opacity-60'
                  : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Time & Checkbox */}
              <div className="flex items-center space-x-3 sm:w-1/3">
                <button
                  onClick={() => toggleComplete(slot.id)}
                  className={`p-1 rounded-lg border transition-all ${
                    slot.completed
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                      : 'border-slate-700 text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                </button>
                <div className="flex items-center space-x-2 font-mono text-xs font-bold text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-purple-400" />
                  <span>{slot.time}</span>
                </div>
              </div>

              {/* Task Title Input */}
              <div className="flex-1 px-2">
                <input
                  type="text"
                  value={slot.task}
                  onChange={(e) => updateTaskText(slot.id, e.target.value)}
                  placeholder="25-min focus goal..."
                  className={`w-full bg-transparent text-sm focus:outline-none focus:border-b focus:border-purple-500 ${
                    slot.completed ? 'line-through text-slate-500' : 'text-slate-200'
                  }`}
                />
              </div>

              {/* Status Badge & Delete */}
              <div className="flex items-center space-x-3 justify-end sm:w-1/4">
                {statusBadge}
                {isWeekend && (
                  <button
                    onClick={() => deleteSlot(slot.id)}
                    className="text-slate-600 hover:text-rose-400 p-1"
                    title="Delete Slot"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
