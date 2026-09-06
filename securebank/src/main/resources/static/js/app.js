// app.js - Common utilities, auth guard, idle timer, API helper

const API_BASE = 'http://localhost:8080/api';
const TOKEN_KEY = 'securebank_token';
const CUSTOMER_ID_KEY = 'securebank_customer_id';
const CUSTOMER_NAME_KEY = 'securebank_customer_name';
const IDLE_TIMEOUT_MS = 3 * 60 * 1000; // 3 minutes

// Auth guard
function requireAuth() {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
        window.location.href = '/login.html';
    }
}

// API helper
async function apiCall(endpoint, method = 'GET', body = null) {
    const token = localStorage.getItem(TOKEN_KEY);
    const headers = {
        'Content-Type': 'application/json'
    };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const options = {
        method,
        headers
    };
    if (body) {
        options.body = JSON.stringify(body);
    }

    showLoader();
    try {
        const response = await fetch(`${API_BASE}${endpoint}`, options);
        if (response.status === 401 || response.status === 403) {
            localStorage.removeItem(TOKEN_KEY);
            window.location.href = '/login.html?reason=unauthorized';
            return;
        }
        
        let data = null;
        try {
            data = await response.json();
        } catch (e) {
            // Empty response
        }

        if (!response.ok) {
            throw new Error(data?.message || 'Something went wrong');
        }
        return data;
    } catch (error) {
        console.error('API Error:', error);
        showToast(error.message, 'error');
        throw error;
    } finally {
        hideLoader();
    }
}

// Idle timer
let idleTimer = null;
function startIdleTimer() {
    const events = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];
    events.forEach(event => document.addEventListener(event, resetIdleTimer));
    resetIdleTimer();
}

function resetIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(handleIdleTimeout, IDLE_TIMEOUT_MS);
}

async function handleIdleTimeout() {
    try {
        await apiCall('/auth/logout', 'POST');
    } catch (e) {
        // Ignore error on logout
    }
    localStorage.clear();
    window.location.href = '/login.html?reason=timeout';
}

// Toast notifications
function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('hiding');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Loading spinner
function showLoader() {
    let overlay = document.querySelector('.spinner-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'spinner-overlay';
        overlay.innerHTML = '<div class="spinner"></div>';
        document.body.appendChild(overlay);
    }
    overlay.style.display = 'flex';
}

function hideLoader() {
    const overlay = document.querySelector('.spinner-overlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
}

// Format currency
function formatCurrency(amount) {
    if (amount === undefined || amount === null) return '₹0.00';
    return '₹' + Number(amount).toLocaleString('en-IN', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Format date
function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
        day: '2-digit', month: 'short', year: 'numeric'
    });
}

// Format datetime
function formatDateTime(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleString('en-GB', {
        day: '2-digit', month: 'short', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
    });
}

// Mask card number
function maskCardNumber(cardNumber) {
    if (!cardNumber) return '';
    const str = String(cardNumber);
    if (str.length < 4) return str;
    const last4 = str.slice(-4);
    return `**** **** **** ${last4}`;
}

// Logout function
async function logout() {
    try {
        await apiCall('/auth/logout', 'POST');
    } catch (e) {
        // Ignore
    }
    localStorage.clear();
    window.location.href = '/login.html';
}

// Setup sidebar active state
function setupSidebar() {
    const path = window.location.pathname;
    const items = document.querySelectorAll('.sidebar-item');
    items.forEach(item => {
        if (item.getAttribute('href') === path) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Render navbar and sidebar
function renderNavbarAndSidebar() {
    // Only render if not on auth pages
    if (window.location.pathname.includes('login') || window.location.pathname === '/' || window.location.pathname.includes('index')) {
        return;
    }

    const name = localStorage.getItem(CUSTOMER_NAME_KEY) || 'Customer';
    
    // Add Navbar
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';
    navbar.innerHTML = `
        <div class="navbar-brand">
            <span style="font-size: 1.5rem;">🏦</span> SecureBank
        </div>
        <div class="navbar-user">
            <span>Welcome, <strong>${name}</strong></span>
            <button class="btn btn-secondary" onclick="logout()" style="padding: 0.5rem 1rem;">Logout</button>
        </div>
    `;
    document.body.prepend(navbar);

    // Add Sidebar
    const sidebar = document.createElement('aside');
    sidebar.className = 'sidebar';
    sidebar.innerHTML = `
        <div class="sidebar-nav">
            <a href="/dashboard.html" class="sidebar-item">📊 Dashboard</a>
            <a href="/trading.html" class="sidebar-item">📈 Trading Desk</a>
            <a href="/agentic-dashboard.html" class="sidebar-item">🤖 AI Agent Hub</a>
            <a href="/transfer.html" class="sidebar-item">💸 Transfer</a>
            <a href="/bills.html" class="sidebar-item">🧾 Bills</a>
            <a href="/fd.html" class="sidebar-item">📈 Fixed Deposits</a>
            <a href="/beneficiaries.html" class="sidebar-item">👥 Beneficiaries</a>
            <a href="/profile.html" class="sidebar-item">👤 Profile</a>
        </div>
    `;
    
    // Wrap main content
    const existingContent = document.body.innerHTML;
    // We need to carefully insert, usually best done if body has a <main class="main-content">
    // Since we are running this on load, let's assume the HTML has the main structure.
    
    // So we just prepend the sidebar
    document.body.insertBefore(sidebar, document.body.firstChild.nextSibling); // after navbar
    
    setupSidebar();
}

// Run on load
document.addEventListener('DOMContentLoaded', () => {
    renderNavbarAndSidebar();
});
