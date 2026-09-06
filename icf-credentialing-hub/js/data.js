/**
 * ICF Credentials Hub Data Directory
 * Covers ACC, PCC, MCC Credentials, ICF 8 Core Competencies Vault,
 * 30-Item Mock Examination Bank, Study Resources with Official ICF Links & Detailed Assessor Rubrics.
 */

const ICF_DATA = {
  credentials: [
    {
      id: 'acc',
      title: 'Associate Certified Coach (ACC)',
      badge: 'Level 1 / Foundation',
      color: '#3B82F6',
      heroDesc: 'Designed for practitioner coaches who have completed formal coach training and are establishing their professional coaching practice.',
      prerequisites: 'Completion of foundational coach education. No prior credential required.',
      education: '60+ Hours of ICF-approved coach training (Level 1 or ACSTH/Portfolio).',
      coachingHours: '100+ Total Hours (At least 75 paid hours) with a minimum of 8 clients.',
      mentorHours: '10 Hours of Mentor Coaching over a minimum of 3 months (with an ACC who has renewed once, PCC, or MCC).',
      performanceEval: '1 Audio Recording & Transcript demonstrating ACC-level competency (Waived for Level 1 graduates).',
      exam: 'ICF Credentialing Exam (81 Situational Judgment Items).',
      renewal: 'Every 3 years (40 CCE units total, including 3 hours in Ethics and 10 mentor coaching hours).',
      targetAudience: 'Early-career coaches, corporate managers transitioning to coaching, HR professionals, and new independent practices.',
      keyDifference: 'Focuses on establishing foundational coaching skills, basic agreement setting, and active listening.',
      fees: '$175 - $475 USD (depending on ICF membership and training pathway)'
    },
    {
      id: 'pcc',
      title: 'Professional Certified Coach (PCC)',
      badge: 'Level 2 / Mastery',
      color: '#8B5CF6',
      heroDesc: 'The global benchmark for experienced professional coaches demonstrating deep coaching presence, partnership, and transformational practice.',
      prerequisites: 'Can apply directly or upgrade from ACC upon meeting PCC requirements.',
      education: '125+ Hours of ICF-approved coach training (Level 2 or ACTP/Portfolio).',
      coachingHours: '500+ Total Hours (At least 450 paid hours) with a minimum of 25 clients after starting coach training.',
      mentorHours: '10 Hours of Mentor Coaching over a minimum of 3 months (with a qualified PCC or MCC).',
      performanceEval: '2 Audio Recordings & Transcripts demonstrating PCC-level competency (Waived for Level 2/ACTP graduates).',
      exam: 'ICF Credentialing Exam (81 Situational Judgment Items).',
      renewal: 'Every 3 years (40 CCE units total, including 3 hours in Ethics).',
      targetAudience: 'Full-time professional coaches, executive coaches, senior corporate internal coaches, leadership consultants.',
      keyDifference: 'Requires shifting from "coaching the problem" to deep "coaching the person", co-creating shifts in awareness, and evoking client insight.',
      fees: '$375 - $675 USD (depending on ICF membership and training pathway)'
    },
    {
      id: 'mcc',
      title: 'Master Certified Coach (MCC)',
      badge: 'Level 3 / Pinnacle',
      color: '#EC4899',
      heroDesc: 'The highest level of credentialing in professional coaching, representing extraordinary mastery, effortless presence, and profound transformation.',
      prerequisites: 'MUST currently hold or have previously held an active PCC credential.',
      education: '200+ Hours of coach training (with dedicated master-level coaching education).',
      coachingHours: '2,500+ Total Hours (At least 2,250 paid hours) with a minimum of 35 clients after starting coach education.',
      mentorHours: '10 Hours of Mentor Coaching over a minimum of 3 months exclusively with an active MCC mentor coach.',
      performanceEval: '2 Audio Recordings & Transcripts rigorously assessed against MCC Performance Markers.',
      exam: 'ICF Credentialing Exam (Required if not taken under the updated 2022+ exam standard).',
      renewal: 'Every 3 years (40 CCE units total, including 3 hours in Ethics).',
      targetAudience: 'Elite master coaches, coaching visionaries, mentor coaches, coaching school founders, global C-suite executive coaches.',
      keyDifference: 'Effortless partnership, complete surrender of agenda, deep trust in client wisdom, embodiment of coaching mindset without any controlling framework.',
      fees: '$575 - $975 USD (depending on ICF membership status)'
    }
  ],

  // ENHANCED ICF 8 CORE COMPETENCIES VAULT
  competencies: [
    {
      id: 1,
      name: 'Demonstrates Ethical Practice',
      domain: 'Foundation',
      summary: 'Understands and consistently applies coaching ethics and standards (ICF Code of Ethics).',
      details: 'Demonstrates personal integrity and honesty in interactions with clients, sponsors, and stakeholders. Maintains confidentiality, respects privacy, and clearly distinguishes coaching from therapy, consulting, or other professions.',
      accMarkers: 'Demonstrates understanding of ICF Ethics definitions; maintains basic confidentiality with client.',
      pccMarkers: 'Navigates complex multi-party corporate sponsor ethics transparently; clearly manages boundaries between coaching and psychotherapy.',
      mccMarkers: 'Embodiment of absolute ethical alignment, complete clarity on client autonomy, and seamless management of high-stakes organizational conflicts.',
      examTraps: 'TRAP OPTION: Sharing client secrets with HR sponsors because "HR paid for the coaching". Confidentiality belongs to the client relationship regardless of funding.',
      keyQuestions: '"What boundaries do we need to establish with your organization\'s stakeholders to protect this coaching space?"'
    },
    {
      id: 2,
      name: 'Embodies a Coaching Mindset',
      domain: 'Foundation',
      summary: 'Develops and maintains a mindset that is open, curious, flexible, and client-centered.',
      details: 'Acknowledges that clients are responsible for their own choices. Engages in ongoing learning and self-reflection. Uses intuition and stays grounded, present, and emotionally regulated.',
      accMarkers: 'Recognizes client as creative, resourceful, and whole; avoids giving immediate answers when client asks.',
      pccMarkers: 'Consistently regulates coach\'s own internal biases, maintains self-awareness, and uses intuition with detachment.',
      mccMarkers: 'Complete absence of coach ego; rests entirely in curiosity and trust, holding space without any need to demonstrate knowledge or control.',
      examTraps: 'TRAP OPTION: Preparing detailed expert advice checklists for clients. Coaches do not provide expert solutions; coaches evoke discovery.',
      keyQuestions: '"What assumption might you be holding right now that is limiting your options?"'
    },
    {
      id: 3,
      name: 'Establishes and Maintains Agreements',
      domain: 'Co-Creating the Relationship',
      summary: 'Partners with the client and relevant stakeholders to create clear agreements about the coaching relationship, process, plans, and goals.',
      details: 'Establishes agreements for the overall coaching engagement as well as for each individual session. Clarifies goals, measures of success, boundaries, pricing, and what is/is not appropriate in coaching.',
      accMarkers: 'Asks client what they want to work on today and sets a basic session goal.',
      pccMarkers: 'Explores session goal at depth: measures of success, underlying importance, and what needs to be addressed to reach the outcome.',
      mccMarkers: 'Effortless re-contracting mid-session if client priorities shift; deep exploration of WHO the client wants to BE during the session.',
      examTraps: 'TRAP OPTION: Forcing a client to stay on a pre-planned topic when the client arrives in acute distress about an urgent issue.',
      keyQuestions: '"What would make this session most meaningful for you today, and how will you know we have achieved it?"'
    },
    {
      id: 4,
      name: 'Cultivates Trust and Safety',
      domain: 'Co-Creating the Relationship',
      summary: 'Partners with the client to create a safe, supportive environment that allows the client to share freely.',
      details: 'Maintains an environment of mutual respect and trust. Shows genuine support, empathy, and care for the client. Demonstrates respect for client identity, environment, experiences, values, and beliefs.',
      accMarkers: 'Shows empathy, warmth, and non-judgmental acceptance of client expressions.',
      pccMarkers: 'Validates client emotions, acknowledges vulnerability, and respects client cultural background, identity, and personal values.',
      mccMarkers: 'Holds unconditional positive regard; creates psychological safety so profound that clients feel safe sharing deep fears and unformed insights without shame.',
      examTraps: 'TRAP OPTION: Telling a crying or emotional client to "calm down" or "look tough".',
      keyQuestions: '"What support do you need right now to feel completely safe exploring this challenge?"'
    },
    {
      id: 5,
      name: 'Maintains Presence',
      domain: 'Communicating Effectively',
      summary: 'Is fully conscious and present with the client, employing a style that is open, flexible, grounded, and confident.',
      details: 'Demonstrates curiosity and vulnerability. Manages emotions and stays comfortable with silence, ambiguity, and not knowing.',
      accMarkers: 'Stays focused on client during session without noticeable coach distraction.',
      pccMarkers: 'Comfortable with client emotional intensity, silence, and not knowing where the session is going; uses client language and metaphors.',
      mccMarkers: 'Complete mastery of silence (holding 30-40 seconds of calm space); completely unscripted, dancing in the present moment.',
      examTraps: 'TRAP OPTION: Rushing to fill 10 seconds of client silence with a rapid multi-part question because the coach feels awkward.',
      keyQuestions: '"If we pause right here in silence, what is emerging for you?"'
    },
    {
      id: 6,
      name: 'Listens Actively',
      domain: 'Communicating Effectively',
      summary: 'Focuses on what the client is and is not saying to fully understand what is being communicated in the context of the client systems.',
      details: 'Listens to client tone, body language, emotions, and underlying values. Reflects back or summarizes client words to ensure clarity and deeper exploration.',
      accMarkers: 'Summarizes client statements accurately and reflects back key client phrases.',
      pccMarkers: 'Listens to emotional tone, energy shifts, non-verbal cues, and underlying belief structures ("coaching the person").',
      mccMarkers: 'Listens to what is NOT being said; tunes into systemic energy, client core values, and unspoken identity narratives.',
      examTraps: 'TRAP OPTION: Interrupting client story to correct their grammar or offer time management tips.',
      keyQuestions: '"I noticed your energy shifted when you mentioned your team. What did you feel in that moment?"'
    },
    {
      id: 7,
      name: 'Evokes Awareness',
      domain: 'Cultivating Learning and Growth',
      summary: 'Facilitates client insight and learning by using tools and techniques such as powerful questioning, silence, metaphor, or reframing.',
      details: 'Asks open-ended questions that challenge client assumptions, explore new perspectives, and evoke discovery about who the client is (being) rather than just what they do (doing).',
      accMarkers: 'Asks succinct open-ended questions rather than leading or closed questions.',
      pccMarkers: 'Asks questions that challenge limiting beliefs, explore alternative perspectives, and invite client to explore identity and values.',
      mccMarkers: 'Asks short 4-6 word evocative questions that dissolve long-standing client blind spots and trigger transformational reframes.',
      examTraps: 'TRAP OPTION: Asking compound questions ("What do you think about X, or should you try Y, or maybe Z?") which confuse the client.',
      keyQuestions: '"Who do you choose to be in the face of this challenge?"'
    },
    {
      id: 8,
      name: 'Facilitates Client Growth',
      domain: 'Cultivating Learning and Growth',
      summary: 'Partners with the client to transform learning and insight into action. Promotes client autonomy in the coaching process.',
      details: 'Helps client integrate new insights into their life/work. Partners to design goals, action steps, accountability, and celebrate progress while honoring client ownership.',
      accMarkers: 'Partners with client to define basic next steps and homework before session ends.',
      pccMarkers: 'Encourages client autonomy in designing action steps, establishing personal accountability, and celebrating learning milestones.',
      mccMarkers: 'Completely honors client ownership of integration; trusts client to translate awareness into life transformation without coach policing.',
      examTraps: 'TRAP OPTION: Assigning mandatory homework designed by the coach without client input or consent.',
      keyQuestions: '"Based on your discovery today, what action feels most meaningful for you to take next?"'
    }
  ],

  examInfo: {
    title: 'Official ICF Credentialing Exam Pattern & Structure',
    totalQuestions: 81,
    format: 'Situational Judgment Test (SJT)',
    durationMinutes: 180,
    sections: [
      { name: 'Section 1', questions: 41, time: '90 Minutes' },
      { name: 'Scheduled Break', questions: 0, time: '5 Minutes (Optional)' },
      { name: 'Section 2', questions: 40, time: '90 Minutes' }
    ],
    scoringModel: 'Dual Selection (BEST & WORST). For each realistic client scenario, candidates must select 1 BEST response and 1 WORST response out of 4 options.',
    passingScore: 'Scaled Score of 460 out of 500 (approx 70-75% accuracy required across all 8 competency domains).',
    delivery: 'Pearson VUE Testing Centers or Online Proctored Exam via OnVUE.',
    keyRules: [
      'You cannot navigate back to Section 1 after entering the scheduled break.',
      'Scoring is based on ICF Code of Ethics and 8 Core Competencies.',
      'Partial credit is awarded if you select either the correct BEST or WORST response correctly.',
      'Scenarios test practical application, not rote memorization of definitions.'
    ]
  },

  // MOCK EXAMINATION BANK (30 Items)
  mockQuestions: [
    // --- ACC LEVEL EXAM QUESTIONS (1 - 10) ---
    {
      id: 1,
      level: 'acc',
      levelBadge: 'ACC Item #1',
      competencyId: 1,
      competencyName: 'Demonstrates Ethical Practice',
      scenario: 'A corporate sponsor (HR Director) paying for an executive client\'s coaching sessions contacts you directly. The HR Director asks for a written summary of the personal issues the executive discussed in their last session, stating they need it to evaluate program ROI.',
      options: [
        { key: 'A', text: 'Provide a summary of the personal issues since HR is the paying sponsor.' },
        { key: 'B', text: 'Politely inform the HR Director that all session content is confidential under the ICF Code of Ethics, and suggest the HR Director ask the client directly what they feel comfortable sharing.' },
        { key: 'C', text: 'Immediately terminate the coaching relationship with the executive to avoid conflict of interest.' },
        { key: 'D', text: 'Share a general overview of the discussion with HR without asking the client, ensuring names are omitted.' }
      ],
      bestKey: 'B',
      worstKey: 'A',
      rationale: 'BEST (B): Grounded in Core Competency 1 (Ethical Practice). Confidentiality applies to the client relationship regardless of who pays.\n\nWORST (A): Directly violates ICF Ethics regarding sponsor vs client confidentiality.'
    },
    {
      id: 2,
      level: 'acc',
      levelBadge: 'ACC Item #2',
      competencyId: 3,
      competencyName: 'Establishes and Maintains Agreements',
      scenario: 'During session 2, the client says, "I know we agreed to work on my time management today, but I just had an urgent argument with my direct report 10 minutes ago and I cannot focus on anything else."',
      options: [
        { key: 'A', text: 'Insist on sticking strictly to the time management agenda established in session 1.' },
        { key: 'B', text: 'Acknowledge the stress and partner with the client to re-contract today\'s session focus based on what is most relevant right now.' },
        { key: 'C', text: 'Give the client step-by-step conflict resolution advice on how to discipline their direct report.' },
        { key: 'D', text: 'Cancel the session immediately and tell the client to return when they are calm.' }
      ],
      bestKey: 'B',
      worstKey: 'D',
      rationale: 'BEST (B): Aligns with Core Competency 3 (Agreements). The coach flexes the session agenda in partnership with the client.\n\nWORST (D): Disregards client support and abdicates coaching partnership.'
    },
    {
      id: 3,
      level: 'acc',
      levelBadge: 'ACC Item #3',
      competencyId: 4,
      competencyName: 'Cultivates Trust and Safety & Referrals',
      scenario: 'A coaching client expresses severe clinical depression, insomnia, and feelings of hopelessness, stating they have been struggling to get out of bed for weeks.',
      options: [
        { key: 'A', text: 'Attempt to perform cognitive behavioral therapy to treat the client\'s depression during coaching sessions.' },
        { key: 'B', text: 'Express compassionate care, share concerns about their well-being, recommend consulting a licensed mental health professional, and discuss if coaching should be paused.' },
        { key: 'C', text: 'Ignore the emotional distress and push the client to complete their weekly performance targets.' },
        { key: 'D', text: 'Tell the client that their emotional state is ruining the coaching momentum.' }
      ],
      bestKey: 'B',
      worstKey: 'D',
      rationale: 'BEST (B): Adheres to Core Competency 1 & 4. Coaches recognize boundary limits and facilitate appropriate mental health professional referrals.\n\nWORST (D): Cold, unethical, damaging to safety, and breaches human empathy.'
    },
    {
      id: 4,
      level: 'acc',
      levelBadge: 'ACC Item #4',
      competencyId: 2,
      competencyName: 'Embodies a Coaching Mindset',
      scenario: 'A new coach feels anxious before sessions, worrying that they will not have the answers if the client brings a complex organizational problem.',
      options: [
        { key: 'A', text: 'Spend hours preparing detailed advice manuals for every potential business problem the client might mention.' },
        { key: 'B', text: 'Remind oneself that the client is creative, resourceful, and whole, and that the coach\'s role is to facilitate discovery rather than provide expert solutions.' },
        { key: 'C', text: 'Tell the client at the start of the session that the coach is not qualified to discuss business strategy.' },
        { key: 'D', text: 'Transfer the client to a management consulting firm.' }
      ],
      bestKey: 'B',
      worstKey: 'A',
      rationale: 'BEST (B): Core Competency 2 (Coaching Mindset). Trusting client resourcefulness frees the coach from needing to be an expert solver.\n\nWORST (A): Misunderstands coaching as expert consulting.'
    },
    {
      id: 5,
      level: 'acc',
      levelBadge: 'ACC Item #5',
      competencyId: 6,
      competencyName: 'Listens Actively',
      scenario: 'A client speaks passionately about a new project, but their voice cracks and their eye contact drops when mentioning their team leader.',
      options: [
        { key: 'A', text: 'Ignore the vocal change and focus only on the project timeline details.' },
        { key: 'B', text: 'Reflect back the observation gently: "I noticed your voice softened and eye contact shifted when you mentioned your team leader. What was happening for you there?"' },
        { key: 'C', text: 'Tell the client that their team leader sounds toxic and should be reported to HR.' },
        { key: 'D', text: 'Immediately change the topic to avoid uncomfortable emotions.' }
      ],
      bestKey: 'B',
      worstKey: 'C',
      rationale: 'BEST (B): Core Competency 6 (Listens Actively). Listening beyond words to non-verbal cues and tone.\n\nWORST (C): Imposes coach bias and unsolicited judgment.'
    },
    {
      id: 6,
      level: 'acc',
      levelBadge: 'ACC Item #6',
      competencyId: 8,
      competencyName: 'Facilitates Client Growth',
      scenario: 'At the end of a session, a client identifies three potential strategies to improve their public speaking skills.',
      options: [
        { key: 'A', text: 'Select strategy #1 for the client and command them to execute it by Friday.' },
        { key: 'B', text: 'Ask: "Which of these options feels most aligned for you to try first, and how would you like to track your progress?"' },
        { key: 'C', text: 'Tell the client that none of the strategies will work without a professional public speaking trainer.' },
        { key: 'D', text: 'Skip action planning completely and close the session.' }
      ],
      bestKey: 'B',
      worstKey: 'A',
      rationale: 'BEST (B): Core Competency 8. Honors client choice and accountability.\n\nWORST (A): Overrules client autonomy.'
    },
    {
      id: 7,
      level: 'acc',
      levelBadge: 'ACC Item #7',
      competencyId: 3,
      competencyName: 'Establishes Agreements - Pricing & Scope',
      scenario: 'A potential client asks to start coaching sessions immediately without signing a coaching agreement or discussing session fees.',
      options: [
        { key: 'A', text: 'Begin coaching immediately and figure out fees and terms later after 3 sessions.' },
        { key: 'B', text: 'Establish a clear coaching agreement first, covering scope, fees, confidentiality, and cancellation policies before conducting coaching.' },
        { key: 'C', text: 'Offer free coaching indefinitely to build experience hours.' },
        { key: 'D', text: 'Refuse to coach them ever because they asked.' }
      ],
      bestKey: 'B',
      worstKey: 'A',
      rationale: 'BEST (B): Core Competency 3 (Establishing Agreements). Clear boundaries protect both client and coach.\n\nWORST (A): Creates ethical ambiguity and contract risk.'
    },
    {
      id: 8,
      level: 'acc',
      levelBadge: 'ACC Item #8',
      competencyId: 1,
      competencyName: 'Ethical Conflict of Interest',
      scenario: 'A coach is invited to coach a close personal family member who is going through a difficult career transition.',
      options: [
        { key: 'A', text: 'Accept the family member as a paid client without setting any boundaries.' },
        { key: 'B', text: 'Evaluate potential conflicts of interest, maintain strict professional boundaries, or refer the family member to another qualified coach.' },
        { key: 'C', text: 'Charge double the normal rate because they are family.' },
        { key: 'D', text: 'Use personal family gossip to confront them during sessions.' }
      ],
      bestKey: 'B',
      worstKey: 'D',
      rationale: 'BEST (B): Core Competency 1 (Ethical Practice). Managing dual relationships and conflict of interest.\n\nWORST (D): Unethical weaponization of personal information.'
    },
    {
      id: 9,
      level: 'acc',
      levelBadge: 'ACC Item #9',
      competencyId: 5,
      competencyName: 'Maintains Presence - Managing Distractions',
      scenario: 'During a virtual coaching session, the coach receives urgent text notifications on their computer screen while the client is speaking about an important career choice.',
      options: [
        { key: 'A', text: 'Quickly glance at texts and send brief replies while nodding at the camera.' },
        { key: 'B', text: 'Mute and close all computer notifications immediately to give complete undivided attention and presence to the client.' },
        { key: 'C', text: 'Ask the client to pause for 5 minutes so the coach can resolve the text messages.' },
        { key: 'D', text: 'Tell the client their topic is boring compared to the text messages.' }
      ],
      bestKey: 'B',
      worstKey: 'D',
      rationale: 'BEST (B): Core Competency 5 (Maintains Presence). Complete attentiveness to the client.\n\nWORST (D): Highly unprofessional and damaging.'
    },
    {
      id: 10,
      level: 'acc',
      levelBadge: 'ACC Item #10',
      competencyId: 7,
      competencyName: 'Evokes Awareness - Open vs Closed Questions',
      scenario: 'A client expresses frustration about being passed over for a project lead position.',
      options: [
        { key: 'A', text: 'Ask closed questions like: "Did you talk to your boss?" and "Are you angry?"' },
        { key: 'B', text: 'Ask open-ended evocative questions like: "What does this situation reveal to you about your career priorities right now?"' },
        { key: 'C', text: 'Tell the client to file an employment lawsuit immediately.' },
        { key: 'D', text: 'Explain why the boss was right to pass them over.' }
      ],
      bestKey: 'B',
      worstKey: 'C',
      rationale: 'BEST (B): Core Competency 7. Open-ended questions evoke deeper reflection.\n\nWORST (C): Unsolicited legal advice.'
    },

    // --- PCC LEVEL EXAM QUESTIONS (11 - 20) ---
    {
      id: 11,
      level: 'pcc',
      levelBadge: 'PCC Item #1',
      competencyId: 7,
      competencyName: 'Evokes Awareness & Person vs Problem',
      scenario: 'A senior manager client is struggling to delegate tasks to their team and asks you directly: "You\'ve coached dozens of executives—just tell me the top 3 delegation frameworks I should use right now!"',
      options: [
        { key: 'A', text: 'Provide a detailed 10-minute lecture explaining popular delegation frameworks like RACI and Eisenhower Matrix.' },
        { key: 'B', text: 'Refuse to answer and remain silent for the rest of the session.' },
        { key: 'C', text: 'Acknowledge the request, then ask an open-ended question: "What has prevented you from delegating so far, and what would ideal delegation look like for your specific team?"' },
        { key: 'D', text: 'Tell the client that asking for advice means they are not ready for executive coaching.' }
      ],
      bestKey: 'C',
      worstKey: 'A',
      rationale: 'BEST (C): PCC level coaching shifts from consulting to evoking client self-awareness (Competency 7). The coach honors client resourcefulness.\n\nWORST (A): Drops into management consulting, taking away the client\'s learning discovery.'
    },
    {
      id: 12,
      level: 'pcc',
      levelBadge: 'PCC Item #2',
      competencyId: 6,
      competencyName: 'Listens Actively & Shifts Focus to Identity',
      scenario: 'A client spends 15 minutes listing 10 different tasks they failed to accomplish this week, speaking in a rapid, self-critical, and defeated tone.',
      options: [
        { key: 'A', text: 'Interrupt the client immediately and create a strict time management schedule for them.' },
        { key: 'B', text: 'Listen to the full list and ask the client to explain each failure in detail.' },
        { key: 'C', text: 'Reflect back the tone and pattern observed: "I hear how heavy this list feels, but I also notice a very strong voice of self-criticism. Who is the person underneath this heavy expectation?"' },
        { key: 'D', text: 'Tell the client they need to work harder if they want to succeed in their career.' }
      ],
      bestKey: 'C',
      worstKey: 'D',
      rationale: 'BEST (C): Aligns with PCC Performance Markers for Core Competency 6 & 7. Shifting focus from tactical problem solving to internal identity and belief systems.\n\nWORST (D): Harsh, judgmental, and breaches trust and safety.'
    },
    {
      id: 13,
      level: 'pcc',
      levelBadge: 'PCC Item #3',
      competencyId: 8,
      competencyName: 'Facilitates Client Growth & Accountability',
      scenario: 'Near the end of a session, a client arrives at a breakthrough regarding their communication style. To conclude the session, the coach wants to partner on accountability and next steps.',
      options: [
        { key: 'A', text: 'Assign the client 3 mandatory homework assignments that the coach designed without asking for client input.' },
        { key: 'B', text: 'Ask the client: "Based on your insights today, what actions feel most meaningful for you to take, and how would you like to keep yourself accountable?"' },
        { key: 'C', text: 'End the session without discussing any action steps, trusting that insights automatically produce results.' },
        { key: 'D', text: 'Demand that the client send daily text updates to the coach every morning at 7:00 AM.' }
      ],
      bestKey: 'B',
      worstKey: 'A',
      rationale: 'BEST (B): Core Competency 8 (Facilitates Growth). Client autonomy is paramount; the client designs their own action steps and accountability.\n\nWORST (A): Directive advice imposing coach authority over client ownership.'
    },
    {
      id: 14,
      level: 'pcc',
      levelBadge: 'PCC Item #4',
      competencyId: 3,
      competencyName: 'Multi-Party Corporate Contracting',
      scenario: 'In a 3-way meeting between the coach, executive client, and HR sponsor, the HR sponsor wants to establish session goals that the executive client clearly opposes.',
      options: [
        { key: 'A', text: 'Side with the HR sponsor since they pay the invoice.' },
        { key: 'B', text: 'Facilitate a transparent dialogue between the sponsor and client to co-create aligned goals that serve both organizational objectives and client growth.' },
        { key: 'C', text: 'Tell the HR sponsor in front of the client that HR goals are foolish.' },
        { key: 'D', text: 'Secretly agree with the client to ignore the HR sponsor\'s goals after the meeting.' }
      ],
      bestKey: 'B',
      worstKey: 'D',
      rationale: 'BEST (B): Core Competency 3 (Agreements). Facilitates multi-party alignment with transparency.\n\nWORST (D): Dishonest re-contracting breaching sponsor trust.'
    },
    {
      id: 15,
      level: 'pcc',
      levelBadge: 'PCC Item #5',
      competencyId: 5,
      competencyName: 'Maintains Presence & Metaphor',
      scenario: 'A client describes feeling "like I am swimming against a powerful ocean tide with heavy weights tied to my ankles."',
      options: [
        { key: 'A', text: 'Tell the client to buy swimming gear.' },
        { key: 'B', text: 'Invite the client to explore the metaphor: "What are those heavy weights made of, and what happens if you unbuckle them?"' },
        { key: 'C', text: 'Ignore the metaphor and ask for their weekly sales metrics.' },
        { key: 'D', text: 'Tell the client that dramatic metaphors are silly.' }
      ],
      bestKey: 'B',
      worstKey: 'D',
      rationale: 'BEST (B): Core Competency 5 & 7. Using client\'s language and metaphors to evoke deeper insight.\n\nWORST (D): Dismissive and breaks trust.'
    },
    {
      id: 16,
      level: 'pcc',
      levelBadge: 'PCC Item #6',
      competencyId: 7,
      competencyName: 'Challenging Client Assumptions',
      scenario: 'A mid-level manager client says repeatedly, "If I don\'t work 70 hours a week, my leadership team will think I am lazy and fire me."',
      options: [
        { key: 'A', text: 'Agree with the client that 70 hours is necessary in corporate culture.' },
        { key: 'B', text: 'Ask an evocative question: "What evidence supports that belief, and what alternative definition of high performance might your team value?"' },
        { key: 'C', text: 'Tell the client to quit their job immediately.' },
        { key: 'D', text: 'Report the company to labor authorities.' }
      ],
      bestKey: 'B',
      worstKey: 'C',
      rationale: 'BEST (B): Core Competency 7 (Evokes Awareness). Challenges limiting assumptions constructively.\n\nWORST (C): Extreme unsolicited life advice.'
    },
    {
      id: 17,
      level: 'pcc',
      levelBadge: 'PCC Item #7',
      competencyId: 2,
      competencyName: 'Managing Coach Biases',
      scenario: 'During a coaching session on career development, the client shares an opinion on work-life balance that contradicts the coach\'s personal core values.',
      options: [
        { key: 'A', text: 'Lecture the client on why their values are wrong.' },
        { key: 'B', text: 'Acknowledge internal bias silently, remain client-centered, and support the client in exploring what works best for their own life.' },
        { key: 'C', text: 'End the coaching engagement mid-session without explanation.' },
        { key: 'D', text: 'Argue with the client until they agree with the coach.' }
      ],
      bestKey: 'B',
      worstKey: 'A',
      rationale: 'BEST (B): Core Competency 2 (Coaching Mindset). Maintains self-regulation and objectivity.\n\nWORST (A): Imposes coach values onto the client.'
    },
    {
      id: 18,
      level: 'pcc',
      levelBadge: 'PCC Item #8',
      competencyId: 4,
      competencyName: 'Psychological Safety & Vulnerability',
      scenario: 'A high-performing executive breaks down crying for the first time in their career after feeling overwhelmed by reorganization.',
      options: [
        { key: 'A', text: 'Tell the executive to stop crying because executives must look tough.' },
        { key: 'B', text: 'Create a quiet, compassionate space, validate their experience, and invite them to share what this emotion is revealing.' },
        { key: 'C', text: 'Leave the room and come back in 20 minutes.' },
        { key: 'D', text: 'Tell HR immediately that the executive had a mental breakdown.' }
      ],
      bestKey: 'B',
      worstKey: 'A',
      rationale: 'BEST (B): Core Competency 4 (Cultivates Trust & Safety). Holds emotional safety.\n\nWORST (A): Invalidates emotion and damages safety.'
    },
    {
      id: 19,
      level: 'pcc',
      levelBadge: 'PCC Item #9',
      competencyId: 6,
      competencyName: 'Listens Actively - Systemic Context',
      scenario: 'A client struggles with interdepartmental conflict and blames the sales team entirely for project delays.',
      options: [
        { key: 'A', text: 'Agree that the sales team is incompetent.' },
        { key: 'B', text: 'Ask systemic questions: "How might the wider organizational incentives be influencing the relationship between your team and sales?"' },
        { key: 'C', text: 'Offer to mediate a heated argument between the teams.' },
        { key: 'D', text: 'Tell the client to stop working with the sales department.' }
      ],
      bestKey: 'B',
      worstKey: 'A',
      rationale: 'BEST (B): Core Competency 6 (Listens Actively in systemic context).\n\nWORST (A): Validates blaming without inquiry.'
    },
    {
      id: 20,
      level: 'pcc',
      levelBadge: 'PCC Item #10',
      competencyId: 8,
      competencyName: 'Facilitates Client Growth - Celebrating Progress',
      scenario: 'A client accomplishes a major milestone they have worked toward for 6 months, but immediately glosses over it to discuss their next stressor.',
      options: [
        { key: 'A', text: 'Let them ignore it and rush into the next problem.' },
        { key: 'B', text: 'Pause and invite the client to acknowledge and celebrate their achievement: "Before we move forward, what does this milestone mean for you as a leader?"' },
        { key: 'C', text: 'Reprimand them for being ungrateful.' },
        { key: 'D', text: 'Send them a mandatory gift basket.' }
      ],
      bestKey: 'B',
      worstKey: 'C',
      rationale: 'BEST (B): Core Competency 8. Partners to acknowledge learning and celebrate growth.\n\nWORST (C): Critical and harsh.'
    },

    // --- MCC LEVEL EXAM QUESTIONS (21 - 30) ---
    {
      id: 21,
      level: 'mcc',
      levelBadge: 'MCC Item #1',
      competencyId: 5,
      competencyName: 'Maintains Presence & Effortless Partnership',
      scenario: 'During a quiet moment in a session, an executive client becomes silent for 40 seconds after realizing they have been leading their organization out of fear rather than vision. The client looks downward, visibly moved.',
      options: [
        { key: 'A', text: 'Break the silence immediately by asking a quick 3-part question to keep the momentum going.' },
        { key: 'B', text: 'Offer a reassuring comment like "Don\'t feel bad, everyone makes leadership mistakes."' },
        { key: 'C', text: 'Hold the space in calm, grounded silence, allowing the client to process fully until the client speaks first.' },
        { key: 'D', text: 'Suggest taking a 10-minute break to let the client regain composure.' }
      ],
      bestKey: 'C',
      worstKey: 'A',
      rationale: 'BEST (C): MCC Mastery is characterized by complete presence and comfort with silence (Competency 5). The coach does not rescue or disrupt the client\'s profound internal shift.\n\nWORST (A): Rescues the coach\'s own discomfort with silence, interrupting the client\'s internal transformation.'
    },
    {
      id: 22,
      level: 'mcc',
      levelBadge: 'MCC Item #2',
      competencyId: 8,
      competencyName: 'Facilitates Client Growth & Complete Autonomy',
      scenario: 'At the conclusion of a transformative session where the client discovered a new life purpose, the coach wants to close the session while honoring complete client autonomy.',
      options: [
        { key: 'A', text: 'Prescribe a 5-step action plan for the client to complete before next week.' },
        { key: 'B', text: 'Ask: "As you step out into your life with this new clarity, how do you want to honor this insight today?"' },
        { key: 'C', text: 'Tell the client to report back to you daily via email.' },
        { key: 'D', text: 'End the session abruptly without giving the client time to reflect on their learning.' }
      ],
      bestKey: 'B',
      worstKey: 'A',
      rationale: 'BEST (B): MCC Facilitates Client Growth (Competency 8) by trusting the client entirely to design their own integration without coach imposition.\n\nWORST (A): Imposes coach agenda over client self-direction.'
    },
    {
      id: 23,
      level: 'mcc',
      levelBadge: 'MCC Item #3',
      competencyId: 2,
      competencyName: 'Embodies a Coaching Mindset & Vulnerability',
      scenario: 'A master coach senses a deep pattern of self-sabotage in the client\'s words, but realizes any observation might feel challenging.',
      options: [
        { key: 'A', text: 'Keep the observation to oneself to avoid making the client uncomfortable.' },
        { key: 'B', text: 'Share the intuitive observation with complete detachment and curiosity: "I have an intuition I\'d like to share, and you can tell me if it fits or not..."' },
        { key: 'C', text: 'Tell the client authoritatively that they are self-sabotaging and need to stop.' },
        { key: 'D', text: 'Diagnose the client with a psychological complex.' }
      ],
      bestKey: 'B',
      worstKey: 'C',
      rationale: 'BEST (B): MCC Embodies a Coaching Mindset (Competency 2 & 5). The coach shares intuition vulnerably without attachment to being right.\n\nWORST (C): Imposes authoritative judgment on the client.'
    },
    {
      id: 24,
      level: 'mcc',
      levelBadge: 'MCC Item #4',
      competencyId: 5,
      competencyName: 'Unscripted Partnership & Surrender of Agenda',
      scenario: 'An MCC coach enters a session with zero notes or prepared frameworks, relying entirely on real-time presence with the client.',
      options: [
        { key: 'A', text: 'Force the client to use a pre-made 10-step worksheet.' },
        { key: 'B', text: 'Dance in the moment with the client, listening deeply to who the client is being and partnering to co-create whatever emerges.' },
        { key: 'C', text: 'Apologize to the client for not bringing a structured lesson plan.' },
        { key: 'D', text: 'Spend the session reading a textbook aloud.' }
      ],
      bestKey: 'B',
      worstKey: 'A',
      rationale: 'BEST (B): MCC Level Presence (Competency 5). Total surrender of rigid agenda to dance in the present moment with the client.\n\nWORST (A): Rigid agenda imposition.'
    },
    {
      id: 25,
      level: 'mcc',
      levelBadge: 'MCC Item #5',
      competencyId: 7,
      competencyName: 'Evoking Existential Shifts',
      scenario: 'A CEO client who achieved all financial goals asks: "Now that I\'ve built a billion-dollar company, why do I feel completely empty inside?"',
      options: [
        { key: 'A', text: 'Tell them to buy another company.' },
        { key: 'B', text: 'Hold a quiet, profound space and ask: "Who are you when you drop the identity of the billion-dollar CEO?"' },
        { key: 'C', text: 'Give them financial investment advice.' },
        { key: 'D', text: 'Tell them they are being ungrateful for their wealth.' }
      ],
      bestKey: 'B',
      worstKey: 'D',
      rationale: 'BEST (B): MCC Evokes Awareness (Competency 7). Touches core identity, values, and existence.\n\nWORST (D): Judgmental invalidation.'
    },
    {
      id: 26,
      level: 'mcc',
      levelBadge: 'MCC Item #6',
      competencyId: 4,
      competencyName: 'Trusting Client Wholeness Without Rescuing',
      scenario: 'A veteran client expresses frustration that they cannot figure out their life calling despite working on it for a year.',
      options: [
        { key: 'A', text: 'Tell the client their life calling for them.' },
        { key: 'B', text: 'Rest completely in trust of the client\'s wholeness, asking: "What if not knowing right now is exactly what your wisdom requires?"' },
        { key: 'C', text: 'Tell the client they have wasted a year of coaching.' },
        { key: 'D', text: 'Give them personality quizzes to fill out.' }
      ],
      bestKey: 'B',
      worstKey: 'C',
      rationale: 'BEST (B): MCC Trust & Safety (Competency 4). Complete trust in client wholeness.\n\nWORST (C): Critical and shaming.'
    },
    {
      id: 27,
      level: 'mcc',
      levelBadge: 'MCC Item #7',
      competencyId: 6,
      competencyName: 'Listening to Silence & Energy Shifts',
      scenario: 'A client shifts from energetic talking to a sudden quiet whisper when mentioning their legacy.',
      options: [
        { key: 'A', text: 'Ask them to speak louder because you cannot hear them.' },
        { key: 'B', text: 'Match the stillness and quietly reflect: "I felt a profound shift in the room just now when you said legacy. What did you feel?"' },
        { key: 'C', text: 'Interrupt them to share your own legacy story.' },
        { key: 'D', text: 'Change the topic to business metrics.' }
      ],
      bestKey: 'B',
      worstKey: 'C',
      rationale: 'BEST (B): MCC Active Listening & Presence (Competency 5 & 6).\n\nWORST (C): Narcissistic interruption.'
    },
    {
      id: 28,
      level: 'mcc',
      levelBadge: 'MCC Item #8',
      competencyId: 3,
      competencyName: 'Effortless Agreement Re-Contracting',
      scenario: 'Halfway through a session, the client realizes their initial goal was driven by ego and wants to discard it completely.',
      options: [
        { key: 'A', text: 'Force the client to finish the initial goal because it was contracted.' },
        { key: 'B', text: 'Celebrate the breakthrough and fluidly re-contract: "What is calling for your focus now?"' },
        { key: 'C', text: 'Charge a penalty fee for changing goals.' },
        { key: 'D', text: 'Lecture the client about ego.' }
      ],
      bestKey: 'B',
      worstKey: 'A',
      rationale: 'BEST (B): MCC Agreements (Competency 3). Fluid partnership.\n\nWORST (A): Rigid compliance enforcement.'
    },
    {
      id: 29,
      level: 'mcc',
      levelBadge: 'MCC Item #9',
      competencyId: 7,
      competencyName: 'Reframing Core Belief Systems',
      scenario: 'A client realizes they have spent 30 years seeking approval from their deceased parent through career obsession.',
      options: [
        { key: 'A', text: 'Perform psychoanalysis on their childhood memories.' },
        { key: 'B', text: 'Hold sacred silence and invite: "Now that you see this, who do you choose to be for yourself going forward?"' },
        { key: 'C', text: 'Tell them to stop thinking about the past.' },
        { key: 'D', text: 'Give them a self-help book recommendation.' }
      ],
      bestKey: 'B',
      worstKey: 'A',
      rationale: 'BEST (B): MCC Evokes Awareness (Competency 7). Facilitates transformational reframe.\n\nWORST (A): Crosses boundary into psychotherapy.'
    },
    {
      id: 30,
      level: 'mcc',
      levelBadge: 'MCC Item #10',
      competencyId: 8,
      competencyName: 'Mastery Integration & Transformation',
      scenario: 'At the end of an intensive 1-year master coaching arc, the client reflects on who they have become.',
      options: [
        { key: 'A', text: 'Tell the client they cannot survive without ongoing weekly coaching.' },
        { key: 'B', text: 'Partner with the client to honor their profound transformation, celebrate their autonomy, and design a self-coaching integration pathway.' },
        { key: 'C', text: 'Demand a 5-star review online before letting them leave.' },
        { key: 'D', text: 'End the relationship with cold indifference.' }
      ],
      bestKey: 'B',
      worstKey: 'A',
      rationale: 'BEST (B): MCC Facilitates Growth (Competency 8). Complete client autonomy and mastery integration.\n\nWORST (A): Creates client dependency.'
    }
  ],

  // STUDY RESOURCES WITH DIRECT LINKS & INTERACTIVE MODAL DATA
  studyResources: {
    books: [
      {
        title: 'The HeART of Laser-Focused Coaching',
        author: 'Marion Franklin, MCC',
        target: 'ACC, PCC & MCC (#1 Core Prep)',
        desc: 'Explains how to stop coaching the story/problem and laser-in on the person. Masterclass on uncovering root beliefs.',
        competenciesCovered: 'Competency 6 (Active Listening) & Competency 7 (Evokes Awareness)',
        takeaway: 'Stop problem solving! Listen for the client\'s internal paradigm, not their external schedule.',
        linkText: 'Core Textbook'
      },
      {
        title: 'Co-Active Coaching: Changing Business, Transforming Lives',
        author: 'Henry Kimsey-House, Karen Kimsey-House, et al.',
        target: 'Foundational / PCC Benchmark',
        desc: 'The definitive handbook for co-creating the coaching relationship, active listening, and evocative questioning.',
        competenciesCovered: 'Competency 3 (Agreements), Competency 4 (Trust & Safety), Competency 5 (Presence)',
        takeaway: 'Hold the client as naturally creative, resourceful, and whole. Never rescue or advice-give.',
        linkText: 'Foundational Guide'
      },
      {
        title: 'The Discomfort Zone: How Leaders Turn Difficult Conversations into Breakthroughs',
        author: 'Dr. Marcia Reynolds, MCC',
        target: 'PCC & MCC Mastery',
        desc: 'Guides coaches on how to bravely disrupt client thinking patterns, hold silence, and facilitate transformational reframes.',
        competenciesCovered: 'Competency 5 (Presence) & Competency 7 (Evokes Awareness)',
        takeaway: 'Breakthroughs occur when coaches comfortably sit in discomfort with the client.',
        linkText: 'Mastery Transformation'
      },
      {
        title: 'The Coaching Habit: Say Less, Ask More & Change the Way You Lead Forever',
        author: 'Michael Bungay Stanier',
        target: 'ACC & PCC Practitioner',
        desc: 'Pragmatic guide containing the 7 essential coaching questions to unlearn advice-giving habits.',
        competenciesCovered: 'Competency 2 (Coaching Mindset) & Competency 7 (Evokes Awareness)',
        takeaway: 'Master the 7 questions: Kickoff, AWE ("And What Else?"), Focus, Foundation, Lazy, Strategic, and Learning.',
        linkText: 'Pragmatic Habit'
      },
      {
        title: 'Coaching Plain & Simple: Solution-Focused Practice',
        author: 'Peter Szabó & Daniel Meier',
        target: 'ACC & PCC',
        desc: 'Pragmatic, brief solution-focused coaching methods perfectly aligned with ICF Core Competencies 3, 7, and 8.',
        competenciesCovered: 'Competency 3 (Agreements) & Competency 8 (Facilitates Growth)',
        takeaway: 'Focus on future possibilities and client resources rather than analyzing past failures.',
        linkText: 'Solution-Focused'
      },
      {
        title: 'Executive Coaching with Backbone and Heart',
        author: 'Mary Beth O\'Neill',
        target: 'PCC & MCC Executive Focus',
        desc: 'How to maintain executive presence, manage corporate sponsor dynamics, and navigate leadership politics.',
        competenciesCovered: 'Competency 1 (Ethical Practice) & Competency 3 (Corporate Agreements)',
        takeaway: 'Balance compassionate care (Heart) with firm boundary enforcement (Backbone).',
        linkText: 'Executive Mastery'
      }
    ],

    // OFFICIAL ICF GUIDELINES & ASSESSOR RUBRICS WITH DIRECT LINKS & MODAL DETAILS
    articles: [
      {
        id: 'ethic-guide',
        title: 'Official ICF Code of Ethics & Interpretive Guide (2025/2026)',
        source: 'International Coaching Federation Ethics Board',
        desc: 'Must-read official PDF breakdown detailing confidentiality, conflict of interest, fee arrangements, and sponsor boundaries.',
        type: 'Official Standard',
        officialUrl: 'https://coachingfederation.org/ethics/code-of-ethics',
        modalContent: {
          subtitle: 'The 4 Pillars & 28 Ethical Standards of Professional Coaching',
          sections: [
            {
              heading: 'Pillar I: Responsibility to Clients',
              items: [
                'Standard 1: Explain and ensure that, prior to or at the initial meeting, the client understands the nature and potential value of coaching, confidentiality, and financial agreements.',
                'Standard 2: Create clear agreements regarding roles, responsibilities, and rights of all parties involved in multi-party sponsor contracts.',
                'Standard 4: Maintain strict confidentiality with all client information unless disclosure is required by law.',
                'Standard 6: Respect the client\'s right to terminate the coaching relationship at any point.'
              ]
            },
            {
              heading: 'Pillar II: Responsibility to Practice & Performance',
              items: [
                'Standard 11: Accurately identify coaching qualifications, level of competence, expertise, and ICF Credentials.',
                'Standard 14: Avoid conflicts of interest or dual relationships that impair professional judgment.',
                'Standard 17: Recognize personal issues that may impair or conflict with coaching performance and seek professional support.'
              ]
            },
            {
              heading: 'Pillar III: Responsibility to Professionalism',
              items: [
                'Standard 20: Maintain, store, and dispose of client records in accordance with privacy laws and confidentiality agreements.',
                'Standard 24: Recognize when to refer clients to licensed mental health professionals, therapists, or consultants.'
              ]
            }
          ]
        }
      },
      {
        id: 'pcc-rubric',
        title: 'ICF PCC Performance Evaluation Markers Rubric (11 Markers)',
        source: 'ICF Credentialing Body Assessor Team',
        desc: 'Detailed marker-by-marker checklist used by official ICF assessors to grade audio recording submissions for PCC certification.',
        type: 'Evaluation Rubric',
        officialUrl: 'https://coachingfederation.org/credentials-and-standards/performance-evaluations/pcc-markers',
        modalContent: {
          subtitle: 'The 11 Official Performance Markers Assessed in PCC Audio Recordings',
          sections: [
            {
              heading: 'Competency 3: Establishes & Maintains Agreements',
              items: [
                'Marker 3.1: Coach partners with client to identify or reconfirm what client wants to accomplish in the session.',
                'Marker 3.2: Coach partners with client to define what the client believes needs to be addressed or resolved to achieve the session goal.',
                'Marker 3.3: Coach partners with client to define measures of success for the session goal.',
                'Marker 3.4: Coach partners with client to explore the importance or underlying value of the session goal to the client.'
              ]
            },
            {
              heading: 'Competency 4 & 5: Trust, Safety & Presence',
              items: [
                'Marker 4.1: Coach acknowledges and respects the client\'s work, perspective, identity, or learning.',
                'Marker 5.1: Coach acts in response to what the client reveals, allowing the client to steer the conversation.'
              ]
            },
            {
              heading: 'Competency 6 & 7: Active Listening & Evoking Awareness',
              items: [
                'Marker 6.1: Coach uses client\'s language, metaphors, and vocal tone to reflect back discoveries.',
                'Marker 7.1: Coach asks open questions about the client (WHO the client is being) rather than just the situation (WHAT is happening).',
                'Marker 7.2: Coach asks questions that invite the client to explore non-verbal expressions, emotions, and shifts in energy.'
              ]
            },
            {
              heading: 'Competency 8: Facilitates Client Growth',
              items: [
                'Marker 8.1: Coach invites client to summarize or synthesize their key learning from the session.',
                'Marker 8.2: Coach partners with client to design how they will apply their learning into real-life actions and accountability.'
              ]
            }
          ]
        }
      },
      {
        id: 'mcc-rubric',
        title: 'ICF MCC Performance Evaluation Rubric & Mastery Indicators',
        source: 'ICF Global Assessor Committee',
        desc: 'Definitive rubric specifying MCC level performance: complete absence of agenda, unscripted presence, and effortless trust in client wisdom.',
        type: 'Mastery Rubric',
        officialUrl: 'https://coachingfederation.org/credentials-and-standards/mcc-markers',
        modalContent: {
          subtitle: 'MCC Master Assessor Indicators & Pinnacle Benchmarks',
          sections: [
            {
              heading: 'Pinnacle Presence & Effortless Partnership',
              items: [
                'Indicator 1: The coach exhibits complete surrender of agenda. There is zero evidence of coach-driven worksheets, rigid diagnostic frameworks, or advice-giving.',
                'Indicator 2: The coach fully trusts the client\'s wholeness, wisdom, and direction, allowing the conversation to unfold naturally without forcing direction.',
                'Indicator 3: The coach uses silence profoundly (holding 20-40 seconds of calm, grounded space) to allow client breakthroughs to mature.'
              ]
            },
            {
              heading: 'Existential Exploration & Identity Shift',
              items: [
                'Indicator 4: The coach\'s questions touch existential core identity, worldviews, values, and purpose rather than tactical task lists.',
                'Indicator 5: The coach asks short, potent 4-6 word questions that dissolve decades of client blind spots instantly.'
              ]
            }
          ]
        }
      },
      {
        id: 'boundary-guide',
        title: 'Boundary Decision Tree: Coaching vs Psychotherapy & Consulting',
        source: 'ICF Ethics & Professional Practice Committee',
        desc: 'Key decision trees for recognizing clinical depression, trauma, anxiety, and making ethical medical referrals.',
        type: 'Ethics Whitepaper',
        officialUrl: 'https://coachingfederation.org/ethics/ethics-resources',
        modalContent: {
          subtitle: 'Boundary Matrix: Distinguishing Coaching from Therapy, Consulting & Mentoring',
          sections: [
            {
              heading: '1. Coaching vs Psychotherapy',
              items: [
                'Focus: Therapy focuses on healing past psychological wounds, clinical pathology, and emotional dysfunction. Coaching focuses on future goals, self-awareness, and personal growth.',
                'Red Flags for Mandatory Referral: Suicidal ideation, clinical depression, severe insomnia, panic attacks, trauma triggers, or substance addiction.'
              ]
            },
            {
              heading: '2. Coaching vs Management Consulting',
              items: [
                'Focus: Consultants are subject-matter experts paid to deliver diagnostic reports and recommendations. Coaches facilitate discovery so the client generates their own solutions.'
              ]
            },
            {
              heading: '3. Coaching vs Mentoring',
              items: [
                'Focus: Mentors share personal career advice ("Here is how I did it"). Coaches do not impose their career path onto the client.'
              ]
            }
          ]
        }
      }
    ],

    videos: [
      {
        title: 'Mastering the ICF Credentialing Exam: SJT BEST/WORST Strategies',
        duration: '45 Mins',
        desc: 'Walkthrough of how to evaluate BEST vs WORST situational judgment items without falling into subtle trap options.',
        type: 'Exam Strategy Video'
      },
      {
        title: 'Real Unedited PCC Session Demonstration & Assessor Commentary',
        duration: '60 Mins',
        desc: 'Watch an unedited 30-minute PCC session followed by an ICF Assessor breaking down every passing competency marker.',
        type: 'Live Session Demo'
      },
      {
        title: 'MCC Masterclass: The Art of Holding 40 Seconds of Silence',
        duration: '50 Mins',
        desc: 'Demonstration of master-level presence, surrendering coach control, and allowing client breakthroughs to emerge naturally.',
        type: 'MCC Masterclass'
      }
    ]
  },

  // MENTOR COACHING OVERVIEW
  mentorCoachingOverview: {
    totalHoursRequired: 10,
    minTimeframe: 'Minimum of 3 Months (Cannot be completed in under 90 days)',
    groupVsIndividual: 'Maximum of 7 Hours in Group Mentor Coaching + Minimum of 3 Hours in 1-on-1 Individual Mentor Coaching',
    eligibleMentors: 'ACC applicants can use an ACC (renewed once), PCC, or MCC. PCC applicants can use a PCC or MCC. MCC applicants MUST use an active MCC Mentor Coach.',
    whatHappensInSessions: [
      'Submission & Review of 30-Minute Audio Recording Transcripts',
      'Assessor Marker-by-Marker Feedback on your exact dialogue',
      'Unlearning advice-giving, consulting defaults, and leading questions',
      'Practicing deep session agreement contracting in the first 10 minutes',
      'Refining 4-6 word short evocative questions'
    ]
  },

  // 7-SKILL MASTERY CURRICULUM
  coachingFocusAreas: [
    {
      id: 'skill-1',
      title: '1. Breaking the "Expert / Advice-Giving" Habit',
      subtitle: 'Unlearning consulting defaults to adopt a non-directive coaching stance',
      whyStruggle: 'Most candidates come from management, HR, or consulting backgrounds. When clients ask "What should I do?", candidates reflexively lecture or give advice. In ICF performance evals and exam SJT items, offering advice leads to immediate failure.',
      demonstrationStandards: {
        acc: 'Coach resists giving direct advice and asks basic open questions to invite client thinking.',
        pcc: 'Coach completely refrains from advising, holding client as resourceful; explores client internal wisdom.',
        mcc: 'Effortless non-directive presence; coach holds zero need to demonstrate knowledge or control.'
      },
      mentorExercise: 'The "Zero-Advice Roleplay": The mentor coach acts as a demanding CEO asking "Tell me the 3 steps to fix my team!" The candidate practices acknowledging the request while returning ownership with evocative questions.',
      dialogueComparison: {
        failing: 'Coach: "You should use the RACI matrix and host a daily standup meeting to fix your team\'s alignment."',
        passing: 'Coach: "I hear how urgent team alignment is for you. What has prevented alignment so far, and what would ideal team performance look like from your perspective?"'
      },
      markerRef: 'Core Competency 2 (Coaching Mindset) & Competency 7 (Evokes Awareness)'
    },
    {
      id: 'skill-2',
      title: '2. Deep Session Contracting & Re-Contracting at Depth',
      subtitle: 'Establishing WHO the client wants to BE during the session, not just a task checklist',
      whyStruggle: 'Candidates often settle for superficial 30-second agreements like "I want to organize my schedule today". Superficial contracting produces superficial sessions. Assessor markers require exploring measures of success and underlying importance.',
      demonstrationStandards: {
        acc: 'Establishes a basic session topic and clear session goal before proceeding.',
        pcc: 'Explores session goal, measures of success, underlying importance, and what needs to be addressed during the session.',
        mcc: 'Partners with client to define who the client needs to BE to achieve the goal; fluidly re-contracts if client focus shifts mid-session.'
      },
      mentorExercise: 'The 10-Minute Contracting Drill: Mentor coach listens to the first 10 minutes of candidate audio recordings, grading whether the candidate explored measures of success and personal importance before diving into problem-solving.',
      dialogueComparison: {
        failing: 'Coach: "Okay, you want to fix your schedule. Let\'s start looking at your calendar for Monday."',
        passing: 'Coach: "You mentioned wanting to redesign your schedule. What would achieving that make possible for you personally, and how will you know by the end of our session that we\'ve accomplished what you need?"'
      },
      markerRef: 'Core Competency 3 (Establishes and Maintains Agreements)'
    },
    {
      id: 'skill-3',
      title: '3. Coaching the "Person", Not the "Problem"',
      subtitle: 'Shifting focus from external circumstances to internal belief systems & identity',
      whyStruggle: 'ACC candidates get trapped in tactical problem-solving (fixing schedules, analyzing bosses). PCC & MCC assessors evaluate whether the coach explores the client\'s beliefs, values, emotions, and identity.',
      demonstrationStandards: {
        acc: 'Focuses primarily on the client\'s session goal and action steps.',
        pcc: 'Consistently shifts focus from external circumstances ("the story") to internal beliefs, identity, and emotions ("the person").',
        mcc: 'Masterful exploration of client core identity, values, and worldviews; total detachment from external drama.'
      },
      mentorExercise: 'The "Story vs. Person" Audit: The mentor coach pauses audio playback every time the candidate asks about external logistics, asking: "How could you ask about the client\'s internal experience instead?"',
      dialogueComparison: {
        failing: 'Coach: "What did your direct report say when you told them about the new deadline?"',
        passing: 'Coach: "I hear how chaotic the team deadline feels, but I also notice a strong pattern of self-criticism in your voice. Who are you being when you carry this heavy expectation?"'
      },
      markerRef: 'Core Competency 6 (Listens Actively) & Competency 7 (Evokes Awareness)'
    },
    {
      id: 'skill-4',
      title: '4. Masterful Boundary & Corporate Sponsor Ethics',
      subtitle: 'Navigating multi-party corporate contracts & psychotherapy referral triggers',
      whyStruggle: 'Corporate sponsors paying for executive coaching often ask for private session updates. Candidates struggle with holding firm confidentiality or recognizing when client distress exceeds coaching scope into therapy.',
      demonstrationStandards: {
        acc: 'Maintains basic client confidentiality; recognizes obvious scope limits.',
        pcc: 'Transparently facilitates 3-way sponsor agreements; clearly manages boundaries between coaching and mental health therapy.',
        mcc: 'Impeccable ethical alignment; effortlessly manages high-stakes organizational politics while upholding absolute client trust.'
      },
      mentorExercise: 'The HR Director Roleplay: Mentor coach acts as an aggressive HR VP demanding confidential feedback on an executive client. Candidate practices holding firm ethical confidentiality with diplomacy and professionalism.',
      dialogueComparison: {
        failing: 'Coach: "Since your company pays for the coaching, I can send HR a brief email summarizing your stress levels."',
        passing: 'Coach: "Under the ICF Code of Ethics, everything we discuss remains completely confidential between us. What progress do you feel comfortable sharing directly with HR yourself during our 3-way alignment meeting?"'
      },
      markerRef: 'Core Competency 1 (Ethical Practice) & Competency 4 (Cultivates Trust & Safety)'
    },
    {
      id: 'skill-5',
      title: '5. Comfort with Silence & Grounded Emotional Presence',
      subtitle: 'Holding 30-40 seconds of calm processing silence without rescuing the client',
      whyStruggle: 'Inexperienced coaches feel anxious during client silence, assuming silence means failure. Coaches rush to fill silence with long compound questions, interrupting client breakthroughs.',
      demonstrationStandards: {
        acc: 'Maintains presence without obvious distraction during coaching conversations.',
        pcc: 'Comfortable with client emotional intensity, silence, and not knowing where the session is heading.',
        mcc: 'Mastery of grounded silence (holding 30-40 seconds of quiet space); completely unscripted and present.'
      },
      mentorExercise: 'The 20-Second Silence Challenge: In mentor sessions, after asking a powerful question, candidate practices sitting silently for at least 15-20 seconds until the client speaks first.',
      dialogueComparison: {
        failing: 'Coach: "(After 3 seconds of silence) Or maybe you should consider talking to HR? Or do you think it\'s a time management issue? What do you think?"',
        passing: 'Coach: "(Asks question: \'What is this silence revealing to you?\') ... [Holds calm, grounded silence for 25 seconds until client experiences a breakthrough] ..."'
      },
      markerRef: 'Core Competency 5 (Maintains Presence)'
    },
    {
      id: 'skill-6',
      title: '6. Evoking Awareness with Short 4-6 Word Questions',
      subtitle: 'Eliminating compound, leading, or advice-masked questions',
      whyStruggle: 'Candidates often ask long, convoluted compound questions that contain embedded advice (e.g. "Have you thought about talking to your manager about X or Y?"). ICF markers require clean, open, evocative questions.',
      demonstrationStandards: {
        acc: 'Asks open-ended questions that start with What or How rather than closed questions.',
        pcc: 'Asks clean, open-ended questions that challenge assumptions and invite client to explore identity and values.',
        mcc: 'Asks succinct 4-6 word evocative questions that instantly dissolve client blind spots.'
      },
      mentorExercise: 'The "6-Word Constraint" Game: Candidate practices conducting 15 minutes of coaching where EVERY question asked must be 6 words or fewer.',
      dialogueComparison: {
        failing: 'Coach: "Don\'t you think that if you spoke to your boss about your workload, it would help reduce your stress levels?"',
        passing: 'Coach: "What is holding you back?" or "Who do you choose to be?"'
      },
      markerRef: 'Core Competency 7 (Evokes Awareness)'
    },
    {
      id: 'skill-7',
      title: '7. Complete Client Autonomy in Integration & Growth',
      subtitle: 'Partnering on client-designed action steps without coach prescription',
      whyStruggle: 'Coaches tend to assign homework or command action steps. ICF markers mandate that action planning and accountability MUST be client-designed and client-owned.',
      demonstrationStandards: {
        acc: 'Partners with client to define basic next steps before session ends.',
        pcc: 'Facilitates client autonomy in designing action steps, establishing accountability, and celebrating progress.',
        mcc: 'Completely honors client ownership of transformation; trusts client to translate awareness into life.'
      },
      mentorExercise: 'Action Planning Audit: Mentor coach evaluates candidate transcript endings, ensuring the candidate asks "What action do YOU want to take?" rather than suggesting tasks.',
      dialogueComparison: {
        failing: 'Coach: "I want you to write in a journal every morning for 15 minutes and send me a photo by Friday."',
        passing: 'Coach: "Based on what you discovered today, what action feels most meaningful for you to take next, and how would you like to keep yourself accountable?"'
      },
      markerRef: 'Core Competency 8 (Facilitates Client Growth)'
    }
  ],

  caseStudies: [
    {
      id: 'cs1',
      title: 'The Executive vs. Corporate Sponsor Dilemma',
      credentialLevel: 'PCC / ACC',
      competencies: [1, 3, 4],
      summary: 'Managing multi-party contracting between an executive client, HR sponsor, and direct manager without violating confidentiality.',
      background: 'Marcus, a VP of Operations, is assigned a 6-month executive coach funded by his company. During session 2, Marcus reveals he is secretly planning to resign in 60 days to launch a competing startup.',
      dilemma: 'The HR Director emails the coach asking: "Is Marcus fully committed to staying with the firm long-term? We are considering him for a promotion next month."',
      analysis: 'Under ICF Ethics (Competency 1), session content is strictly confidential. The coach cannot inform HR about Marcus\'s resignation plans without explicit client consent.',
      recommendedAction: 'The coach meets with Marcus to explore the alignment between his personal career goals, his ethical obligations to the firm, and the coaching contract. The coach helps Marcus evaluate how and when he will communicate with HR directly.',
      takeaways: [
        'Always establish a clear 3-way or 4-way contract at the start defining what is shared with sponsors.',
        'Never disclose client secrets to sponsors, even if the sponsor pays the bill.',
        'Coach the client to take ownership of their professional communications.'
      ]
    },
    {
      id: 'cs2',
      title: 'Shifting from "Coaching the Problem" to "Coaching the Person"',
      credentialLevel: 'PCC / MCC Focus',
      competencies: [5, 6, 7],
      summary: 'Moving away from tactical problem solving into transformational self-awareness.',
      background: 'Elena, a tech director, spends every session presenting tactical project deadlines and complaining about disorganized engineers.',
      dilemma: 'In early sessions, the coach kept helping Elena build task checklists (ACC level). By session 5, Elena is still experiencing high stress and zero personal growth.',
      analysis: 'At PCC and MCC levels, the coach must refrain from fixing the external circumstances and instead invite the client to explore their own identity, beliefs, control tendencies, and mindset.',
      recommendedAction: 'The coach uses presence and open reflection: "Elena, for 5 sessions we have organized your team\'s schedules, yet your internal feeling of anxiety remains unchanged. What is your relationship with needing to control every detail?"',
      takeaways: [
        'Tactical problem solving yields temporary fixes; evoking self-awareness yields transformation.',
        'Listen for underlying themes, emotional tones, and identity patterns.',
        'Be comfortable raising uncomfortable, brave observations.'
      ]
    }
  ],

  pathways: [
    {
      name: 'Level 1 Pathway (For ACC)',
      target: 'ACC',
      steps: [
        'Complete 60+ hours of ICF Level 1 accredited education.',
        'Log 100+ coaching hours (at least 75 paid) with 8+ clients.',
        'Complete 10 hours of Mentor Coaching over at least 3 months.',
        'Submit ACC application via Level 1 Path (Performance Eval waived).',
        'Pass the ICF Credentialing Exam (81 SJT items).'
      ]
    },
    {
      name: 'Level 2 Pathway (For PCC)',
      target: 'PCC',
      steps: [
        'Complete 125+ hours of ICF Level 2 accredited education.',
        'Log 500+ coaching hours (at least 450 paid) with 25+ clients.',
        'Complete 10 hours of Mentor Coaching over at least 3 months.',
        'Submit PCC application via Level 2 Path (Performance Eval waived).',
        'Pass the ICF Credentialing Exam (81 SJT items).'
      ]
    },
    {
      name: 'Portfolio Pathway (Non-Accredited / Mixed Education)',
      target: 'ACC / PCC',
      steps: [
        'Gather documentation for non-approved coach training hours.',
        'Log required coaching experience hours (100 for ACC / 500 for PCC).',
        'Complete 10 hours of Mentor Coaching with an eligible mentor.',
        'Submit 1 audio recording (ACC) or 2 audio recordings (PCC) with transcripts for ICF evaluation.',
        'Pass the ICF Credentialing Exam upon application approval.'
      ]
    },
    {
      name: 'Level 3 Pathway (For MCC)',
      target: 'MCC',
      steps: [
        'Hold or have held an active PCC Credential.',
        'Complete 200+ hours of coach training (with master-level focus).',
        'Log 2,500+ coaching hours (at least 2,250 paid) with 35+ clients.',
        'Complete 10 hours of Mentor Coaching with an active MCC Mentor Coach.',
        'Submit 2 MCC-level performance recordings & transcripts.',
        'Pass ICF Credentialing Exam (if not previously taken under new standard).'
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ICF_DATA;
}
