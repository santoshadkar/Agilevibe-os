/* ==========================================================================
   AI-Native Developer Hub & Vibe Coding Portal - JavaScript Logic (Expanded)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    generatePrompt();
    generatePRDSpec();
    loadRuleTemplate('nextjs');
    calculateROI();
});

/* --------------------------------------------------------------------------
   1. Interactive PRD & Tech Spec Builder
   -------------------------------------------------------------------------- */

function generatePRDSpec() {
    const appName = document.getElementById('spec-app-name')?.value.trim() || 'Acme SaaS Billing Portal';
    const stack = document.getElementById('spec-stack')?.value || 'Next.js / TypeScript / Supabase / Tailwind';
    const vision = document.getElementById('spec-vision')?.value.trim() || 'A multi-tenant SaaS application allowing users to manage subscription billing, download PDF invoices, and process credit card payments via Stripe.';
    const featuresInput = document.getElementById('spec-features')?.value.trim() || 'User Auth, Stripe Subscription Billing, Invoice PDF Export, Dark Mode UI, Email Alerts';
    const outputBox = document.getElementById('spec-output');

    if (!outputBox) return;

    const featureList = featuresInput.split(',').map(f => `- ${f.trim()}`).join('\n');

    const prdMarkdown = `# Product Requirement Document (PRD): ${appName}

## 1. Executive Summary & Vision
${vision}

## 2. Target Tech Stack
- Framework & Language: ${stack}
- Architecture: Modular API & Component Separation
- Security Standards: OWASP Top 10 Sanitization & JWT Cookie Auth

## 3. Core Functional Requirements
${featureList}

## 4. Architectural Data Models & Contracts
### Primary Entities:
- User (id, email, password_hash, created_at)
- Subscription (id, user_id, stripe_customer_id, plan_tier, status)
- Invoice (id, subscription_id, amount_cents, pdf_url, paid_at)

## 5. Non-Functional Requirements & Guardrails
- Mobile Responsiveness: 100% responsive down to 320px screen width.
- Performance: Page load under 1.5 seconds.
- Out of Scope for V1: Multi-currency conversion, custom enterprise SSO.

---
*Created with Spec-Driven Development (SDD) Workflow.*`;

    outputBox.textContent = prdMarkdown;
}

function copyPRDSpec() {
    const outputBox = document.getElementById('spec-output');
    if (!outputBox) return;
    navigator.clipboard.writeText(outputBox.textContent).then(() => {
        showToast('PRD Spec copied to clipboard! 📄');
    });
}

/* --------------------------------------------------------------------------
   2. Exhaustive 6-Stack Repository Rules Library (.cursorrules & AGENTS.md)
   -------------------------------------------------------------------------- */

const ruleTemplates = {
    nextjs: {
        title: '📄 .cursorrules / AGENTS.md for Next.js 15 & TypeScript',
        content: `# Next.js 15 & TypeScript Repository Rules

## Tech Stack & Architecture
- Framework: Next.js App Router (React Server Components + Client Components)
- Styling: TailwindCSS with CSS custom properties design tokens
- Language: Strict TypeScript (no implicit 'any' types allowed)

## Coding Standards
- ALWAYS export TypeScript interfaces for component props.
- Keep component files under 100 lines; extract sub-components to /components.
- Use Server Actions for data mutations and route revalidations.
- Handle null/undefined guards explicitly before accessing properties.

## AI Execution Constraints
- Do not introduce inline styles; use predefined Tailwind utility classes.
- Preserve existing working API routes and type definitions.
- Write Jest & React Testing Library tests for complex state handlers.`
    },
    vanilla: {
        title: '📄 .cursorrules / AGENTS.md for HTML & Vanilla CSS/JS',
        content: `# Vanilla Web Repository Rules

## Tech Stack & Styling
- Core: HTML5, Vanilla CSS3 (Custom Variables), ES6+ JavaScript
- Fonts: Google Fonts (Outfit & Inter)
- Theme: Dark Mode with CSS variables in styles.css

## Coding Standards
- No external heavy frameworks (No React, Vue, or Tailwind) unless requested.
- Place design tokens in :root inside styles.css.
- Use event delegation for dynamic DOM elements.
- Ensure all interactive elements have hover animations and cursor: pointer.`
    },
    python: {
        title: '📄 .cursorrules / AGENTS.md for Python & FastAPI',
        content: `# Python & FastAPI Repository Rules

## Tech Stack & Architecture
- Framework: FastAPI with Pydantic v2 schemas & SQLAlchemy ORM
- Database: SQLite / PostgreSQL with Alembic migrations
- Code Quality: Black formatting, Flake8 linting, Mypy strict typing

## Coding Standards
- ALWAYS define Pydantic request & response schemas for API routes.
- Use async def for I/O bound endpoints.
- Handle HTTP exceptions using FastAPI HTTPException with clean error payloads.
- Write PyTest unit tests for business logic functions.`
    },
    express: {
        title: '📄 .cursorrules / AGENTS.md for Node.js & Express',
        content: `# Node.js & Express Repository Rules

## Tech Stack & Architecture
- Backend: Node.js with Express.js REST API
- Database: PostgreSQL with Prisma ORM / Knex
- Auth: JWT in HTTP-Only SameSite cookies

## Coding Standards
- Separate controller logic into /controllers, router into /routes, and data models into /models.
- ALWAYS use express-validator or Zod to sanitize incoming req.body payload.
- Wrap async route handlers in an async error wrapper to catch unhandled rejections.`
    },
    react: {
        title: '📄 .cursorrules / AGENTS.md for React SPA & TailwindCSS',
        content: `# React SPA & TailwindCSS Repository Rules

## Tech Stack & Architecture
- Build Tool: Vite + React 18 + TypeScript
- State Management: Zustand / React Context
- Styling: TailwindCSS + Lucide Icons

## Coding Standards
- Custom hooks must be placed in /src/hooks and prefixed with 'use'.
- Never mutate state arrays directly; use immutability patterns.
- Ensure all asynchronous API calls handle loading & error UI states cleanly.`
    },
    rust: {
        title: '📄 .cursorrules / AGENTS.md for Rust & Actix-web',
        content: `# Rust & Actix-web Repository Rules

## Tech Stack & Architecture
- Framework: Actix-web with Tokio async runtime
- Database: SQLx with PostgreSQL
- Linting: Cargo Clippy strict warnings

## Coding Standards
- Prefer explicit Result handling with '?' error propagation over unwrap().
- Structs must derive Debug, Clone, Serialize, Deserialize where appropriate.
- Keep handlers thin and move business domain logic into /services.`
    }
};

function loadRuleTemplate(key) {
    const template = ruleTemplates[key];
    if (!template) return;

    const titleEl = document.getElementById('rule-title');
    const outputEl = document.getElementById('rule-output');
    const btns = document.querySelectorAll('#rules-lib .filter-btn');

    btns.forEach(b => b.classList.remove('active'));
    event?.target.classList.add('active');

    if (titleEl) titleEl.textContent = template.title;
    if (outputEl) outputEl.textContent = template.content;
}

function copyRuleTemplate() {
    const outputEl = document.getElementById('rule-output');
    if (!outputEl) return;
    navigator.clipboard.writeText(outputEl.textContent).then(() => {
        showToast('Rulefile template copied to clipboard! 📂');
    });
}

/* --------------------------------------------------------------------------
   3. Enhanced Interactive AI ROI & Time-Saved Calculator
   -------------------------------------------------------------------------- */

function calculateROI() {
    const hoursInput = parseFloat(document.getElementById('roi-hours')?.value) || 30;
    const teamInput = parseInt(document.getElementById('roi-team')?.value) || 1;
    const rateInput = parseFloat(document.getElementById('roi-rate')?.value) || 65;
    const boostFactor = parseFloat(document.getElementById('roi-complexity')?.value) || 0.45;

    const hoursSavedPerWeek = hoursInput * boostFactor * teamInput;
    const annualHoursSaved = Math.round(hoursSavedPerWeek * 52);
    const annualValueUnlocked = Math.round(annualHoursSaved * rateInput);
    const velocityMultiplier = (1 / (1 - boostFactor)).toFixed(1);

    const hoursSavedEl = document.getElementById('roi-hours-saved');
    const dollarSavedEl = document.getElementById('roi-dollar-saved');
    const multiplierEl = document.getElementById('roi-multiplier');

    if (hoursSavedEl) hoursSavedEl.textContent = `${annualHoursSaved.toLocaleString()} Hours`;
    if (dollarSavedEl) dollarSavedEl.textContent = `$${annualValueUnlocked.toLocaleString()}`;
    if (multiplierEl) multiplierEl.textContent = `Velocity Boost: ${velocityMultiplier}x Faster`;
}

/* --------------------------------------------------------------------------
   4. Collapsible & Helper Utilities
   -------------------------------------------------------------------------- */

function toggleCollapsible(btnElement) {
    const content = btnElement.nextElementSibling;
    const arrow = btnElement.querySelector('.arrow');
    
    if (content.classList.contains('active')) {
        content.classList.remove('active');
        if (arrow) arrow.textContent = '▼';
    } else {
        content.classList.add('active');
        if (arrow) arrow.textContent = '▲';
    }
}

function generatePrompt() {
    const goalSelect = document.getElementById('prompt-goal');
    const stackSelect = document.getElementById('prompt-stack');
    const descText = document.getElementById('prompt-desc');
    const outputBox = document.getElementById('prompt-output');

    if (!goalSelect || !stackSelect || !descText || !outputBox) return;

    const goal = goalSelect.value;
    const stack = stackSelect.value;
    const userDesc = descText.value.trim() || '[Insert brief description of your feature, bug error, or architecture scope here]';

    const fullPrompt = `ROLE: You are a Senior Full-Stack Engineer & AI Systems Architect.

TASK:
Build a modular, production-ready solution in ${stack} for:
${userDesc}

EXECUTION CONSTRAINTS:
- Enforce strict modular separation of concerns.
- Ensure output is 100% mobile responsive.
- Handle null/undefined checks explicitly before dereferencing properties.

OUTPUT FORMAT:
Provide the complete updated file code followed by a brief summary of key design choices.`;

    outputBox.textContent = fullPrompt;
}

function copyPrompt() {
    const outputBox = document.getElementById('prompt-output');
    if (!outputBox) return;
    navigator.clipboard.writeText(outputBox.textContent).then(() => {
        showToast('Prompt copied to clipboard! 🚀');
    });
}

function filterTools(category) {
    const cards = document.querySelectorAll('.tools-grid .tool-card');
    const btns = document.querySelectorAll('#tools .filter-tabs .filter-btn');

    btns.forEach(btn => btn.classList.remove('active'));
    event?.target.classList.add('active');

    cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
