import type { ResourceLink } from '../types';

export const KNOWLEDGE_HUB_RESOURCES: ResourceLink[] = [
  // --- SCRUM MASTER (SM) RESOURCES ---
  {
    id: 'res_sm_book_1',
    role: 'scrum-master',
    type: 'book',
    title: 'The Official Scrum Guide (2020 Edition)',
    author: 'Ken Schwaber & Jeff Sutherland',
    url: 'https://scrumguides.org/scrum-guide.html',
    summary: 'The definitive rulebook for Scrum containing accountabilities, events, artifacts, and empiricism principles.',
    readingTime: '20 min read',
    keyTopics: ['Empiricism', 'Scrum Accountabilities', 'Definition of Done', 'Sprint Events']
  },
  {
    id: 'res_sm_book_2',
    role: 'scrum-master',
    type: 'book',
    title: 'Coaching Agile Teams',
    author: 'Lyssa Adkins',
    url: 'https://www.agilecoachinginstitute.com/',
    summary: 'Essential handbook for Scrum Masters evolving from task facilitators into impactful Agile Coaches.',
    readingTime: '6 hr read',
    keyTopics: ['Agile Coaching Stances', 'Conflict Resolution', 'Team Facilitation', 'Servant Leadership']
  },
  {
    id: 'res_sm_paper_1',
    role: 'scrum-master',
    type: 'paper',
    title: 'Actionable Agile Metrics for Predictability',
    author: 'Daniel S. Vacanti',
    url: 'https://actionableagile.com/',
    summary: 'Seminal paper introducing Flow Metrics (Cycle Time, WIP, Lead Time, CFD) for empirical forecasting.',
    readingTime: '45 min read',
    keyTopics: ['Little\'s Law', 'Cumulative Flow Diagram', 'WIP Limits', 'Percentile SLA Forecasting']
  },
  {
    id: 'res_sm_article_1',
    role: 'scrum-master',
    type: 'article',
    title: 'The Spotify Squad Health Model',
    author: 'Henrik Kniberg & Anders Ivarsson',
    url: 'https://blog.spotify.com/2014/09/16/squad-health-check-model/',
    summary: 'How Spotify measures squad health, psychological safety, and continuous improvement across 10 dimensions.',
    readingTime: '15 min read',
    keyTopics: ['Psychological Safety', 'Squad Autonomy', 'Health Check Traffic Lights', 'Continuous Improvement']
  },

  // --- PRODUCT OWNER (PO) RESOURCES ---
  {
    id: 'res_po_book_1',
    role: 'product-owner',
    type: 'book',
    title: 'User Story Mapping: Discover the Whole Story',
    author: 'Jeff Patton',
    url: 'https://jpattonassociates.com/user-story-mapping-book/',
    summary: 'Master guide to building visual user story maps that align teams on user journeys and vertical MVP slices.',
    readingTime: '5 hr read',
    keyTopics: ['Story Mapping', 'MVP Slicing', 'Backlog Refinement', 'User Journey Flow']
  },
  {
    id: 'res_po_book_2',
    role: 'product-owner',
    type: 'book',
    title: 'Specification by Example & BDD',
    author: 'Gojko Adzic',
    url: 'https://specificationbyexample.com/',
    summary: 'How Product Owners use BDD Gherkin syntax (Given/When/Then) to eliminate ambiguous backlog requirements.',
    readingTime: '4 hr read',
    keyTopics: ['BDD Gherkin Syntax', 'Acceptance Criteria', 'Living Documentation', 'INVEST Criteria']
  },
  {
    id: 'res_po_paper_1',
    role: 'product-owner',
    type: 'paper',
    title: 'Weighted Shortest Job First (WSJF) in Scaled Agile',
    author: 'Scaled Agile Framework (SAFe 6.0)',
    url: 'https://scaledagileframework.com/wsjf/',
    summary: 'Mathematical framework for calculating Cost of Delay over Job Size to prioritize backlog features objectively.',
    readingTime: '25 min read',
    keyTopics: ['Cost of Delay', 'Business Value', 'Time Criticality', 'Risk Reduction', 'WSJF Scoring']
  },
  {
    id: 'res_po_article_1',
    role: 'product-owner',
    type: 'article',
    title: 'The 20 Product Owner Anti-Patterns',
    author: 'Stefan Wolpers',
    url: 'https://age-of-product.com/product-owner-anti-patterns/',
    summary: 'Deep breakdown of common PO pitfalls including Scribe PO, Micro-manager PO, and Feature Factory syndrome.',
    readingTime: '18 min read',
    keyTopics: ['PO Anti-Patterns', 'Scribe PO', 'Feature Factory', 'Stakeholder Management']
  },

  // --- PRODUCT MANAGER (PM) RESOURCES ---
  {
    id: 'res_pm_book_1',
    role: 'product-manager',
    type: 'book',
    title: 'INSPIRED: How to Create Tech Products Customers Love',
    author: 'Marty Cagan (Silicon Valley Product Group)',
    url: 'https://svpg.com/books/inspired-how-to-create-tech-products-customers-love-2nd-edition/',
    summary: 'The bible of Product Management covering product discovery, product strategy, and empowered product teams.',
    readingTime: '7 hr read',
    keyTopics: ['Product Discovery', 'Empowered Product Teams', 'Product Vision', 'Risk Assessment']
  },
  {
    id: 'res_pm_book_2',
    role: 'product-manager',
    type: 'book',
    title: 'Measure What Matters: OKRs',
    author: 'John Doerr',
    url: 'https://www.whatmatters.com/',
    summary: 'How Google, Intel, and Gates Foundation use Objectives & Key Results (OKRs) to align strategy with outcomes.',
    readingTime: '5 hr read',
    keyTopics: ['OKRs', 'Outcome Roadmaps', 'Measurable Key Results', 'Strategic Alignment']
  },
  {
    id: 'res_pm_paper_1',
    role: 'product-manager',
    type: 'paper',
    title: 'The New New Product Development Game (HBR Classic)',
    author: 'Hirotaka Takeuchi & Ikujiro Nonaka',
    url: 'https://hbr.org/1986/01/the-new-new-product-development-game',
    summary: 'The foundational 1986 Harvard Business Review paper that inspired the creation of the Scrum framework.',
    readingTime: '30 min read',
    keyTopics: ['HBR Classic', 'Cross-functional Teams', 'Built-in Instability', 'Organizational Learning']
  },
  {
    id: 'res_pm_article_1',
    role: 'product-manager',
    type: 'article',
    title: 'Product-Led Growth (PLG) & SaaS Unit Economics',
    author: 'OpenView Venture Partners',
    url: 'https://openviewpartners.com/product-led-growth/',
    summary: 'Strategic guide on building product-driven acquisition, activation, CAC:LTV unit economics, and MRR growth.',
    readingTime: '20 min read',
    keyTopics: ['PLG Strategy', 'AARRR Pirate Metrics', 'CAC/LTV Ratio', 'Net Retention Rate']
  }
];
