// SoftSkills Nexus - Comprehensive Deep-Dive Data Vault (AI Coach & Roleplay Hub Data Added)

const SOFT_SKILLS_DATA = {
  // 1. STAGE-BASED PATHWAYS WITH IQ, EQ & SQ TRIAD INTEGRATION
  pathways: [
    {
      id: "school",
      title: "School & K-12 Foundation",
      subtitle: "Building core cognitive focus (IQ), emotional self-awareness (EQ), and social empathy (SQ) early",
      targetAudience: "Primary, Middle & High School Students",
      badgeColor: "#3b82f6",
      
      triad: {
        iq: {
          title: "IQ: Cognitive Focus & Structural Logic",
          desc: "Developing memory retention, problem breakdown, logical reasoning, and active study habits.",
          enhancementStrategy: "Use the Feynman Technique: explain complex homework topics in simple terms to a peer.",
          keyPractices: [
            "Break large assignments into 25-minute Pomodoro focus blocks.",
            "Use mind maps and visual diagrams to summarize textbook chapters.",
            "Complete toughest homework tasks first before energy drops."
          ]
        },
        eq: {
          title: "EQ: Emotional Self-Awareness & Resilience",
          desc: "Recognizing frustration triggers, managing exam anxiety, and cultivating a growth mindset.",
          enhancementStrategy: "Practice the 3-2-1 breathing pause when feeling overwhelmed by tests or peer pressure.",
          keyPractices: [
            "Replace 'I can't do this' with 'I haven't mastered this yet'.",
            "Journal 3 daily wins before going to sleep to build optimism.",
            "Pause 5 seconds before reacting when feeling angry at a classmate."
          ]
        },
        sq: {
          title: "SQ: Social Empathy & Peer Collaboration",
          desc: "Understanding peer perspectives, respecting diverse backgrounds, and building fair team habits.",
          enhancementStrategy: "Practice active listening in group projects: paraphrase what your classmate said before responding.",
          keyPractices: [
            "Actively invite quieter team members to share their thoughts.",
            "Share project credit generously and celebrate peer achievements.",
            "Practice kindness and standing up against bullying or exclusion."
          ]
        }
      },

      skills: [
        {
          name: "Active Listening & Respectful Dialogue",
          desc: "Paying full attention to peers & teachers without interrupting or jumping to conclusions.",
          icon: "👂",
          keyAction: "Maintain eye contact, count to 2 before speaking, rephrase what you heard.",
          dialogueScript: "Peer: 'I feel stressed about the group project.' -> You: 'It sounds like the deadline feels overwhelming. Let's break it into smaller steps together.'"
        },
        {
          name: "Team Collaboration & Peer Support",
          desc: "Working constructively in group projects, sharing credit, and encouraging shy peers.",
          icon: "🤝",
          keyAction: "Assign clear group roles; actively invite quieter members to share their ideas.",
          dialogueScript: "You: 'Sam, you had a great idea on research earlier—what do you think we should do first?'"
        },
        {
          name: "Basic Presentation & Voice Control",
          desc: "Overcoming stage fear to share thoughts clearly in front of class.",
          icon: "🎤",
          keyAction: "Use 3-2-1 belly breathing before standing up; speak deliberately with pauses.",
          dialogueScript: "Opening line: 'Today, I want to share 3 surprising facts about ocean conservation...'"
        },
        {
          name: "Time & Homework Prioritization",
          desc: "Balancing school, extracurriculars, play, and study without last-minute panic.",
          icon: "⏰",
          keyAction: "Use a simple daily checklist; complete hardest homework first.",
          dialogueScript: "Self-Talk: 'I will finish 25 minutes of math focus time before checking social media.'"
        }
      ]
    },
    {
      id: "college",
      title: "University & College Scholars",
      subtitle: "Preparing for career readiness, networking, critical synthesis, and professional etiquette",
      targetAudience: "Undergraduates, Graduates & Job Seekers",
      badgeColor: "#8b5cf6",

      triad: {
        iq: {
          title: "IQ: Analytical Rigor & Evidence Synthesis",
          desc: "Evaluating information critically, detecting data bias, and structuring complex research.",
          enhancementStrategy: "First-Principles Thinking: deconstruct problems to fundamental truths rather than accepting assumptions.",
          keyPractices: [
            "Ask 'What primary evidence supports this claim?' before taking conclusions for granted.",
            "Synthesize multi-source research into 1-page executive briefs.",
            "Master quantitative data visualization and structured slide design."
          ]
        },
        eq: {
          title: "EQ: Stress Management & Interview Confidence",
          desc: "Regulating job search anxiety, handling interview rejection, and projecting authentic confidence.",
          enhancementStrategy: "Conduct mock interview recording self-audits: evaluate vocal tone and body language.",
          keyPractices: [
            "Use diaphragmatic breathing to regulate heart rate during high-stakes interviews.",
            "Separate self-worth from job application rejections; view each interview as data.",
            "Practice SBI model feedback when receiving critique on academic work."
          ]
        },
        sq: {
          title: "SQ: Networking Etiquette & Professional Purpose",
          desc: "Building authentic professional relationships, cold outreach, and aligning career with core values.",
          enhancementStrategy: "Value-First Networking: always offer insight, appreciation, or mutual benefit before asking for favors.",
          keyPractices: [
            "Send personalized connection notes highlighting specific shared research or interests.",
            "Engage in community mentoring or campus leadership roles.",
            "Cultivate professional integrity and ethical responsibility in technical projects."
          ]
        }
      },

      skills: [
        {
          name: "STAR Method Interview Storytelling",
          desc: "Structuring real-world experiences into compelling, high-impact job interview answers.",
          icon: "🌟",
          keyAction: "Structure answers as Situation (15%), Task (15%), Action (50%), Result (20%).",
          dialogueScript: "Interviewer: 'Tell me about a conflict.' -> You: 'In my senior design project, our team clashed over database architecture. I scheduled an alignment session, benchmarked performance metrics, and delivered 2 weeks early.'"
        },
        {
          name: "Public Speaking & Presentation Flow",
          desc: "Delivering engaging presentations with visual clarity, narrative structure, and confidence.",
          icon: "📊",
          keyAction: "Limit slides to 1 core idea; practice delivery out loud 3x; use vocal variety.",
          dialogueScript: "Hook: 'Imagine reducing customer onboarding friction by 40% with zero additional marketing spend. Here is how we did it...'"
        },
        {
          name: "Networking & Professional Etiquette",
          desc: "Building authentic LinkedIn connections and cold email outreach that get responses.",
          icon: "🌐",
          keyAction: "Send personalized connection notes mentioning a specific shared interest or article.",
          dialogueScript: "Outreach Email: 'Hi Sarah, loved your recent article on product strategy. I'm a senior researching user onboarding. Would you be open to a 10-min virtual coffee next Tuesday?'"
        }
      ]
    },
    {
      id: "corporate-early",
      title: "Early to Mid-Career Professionals",
      subtitle: "Maximizing impact, stakeholder trust, cross-functional alignment, and emotional regulation",
      targetAudience: "Individual Contributors, Associates & Senior Professionals",
      badgeColor: "#06b6d4",

      triad: {
        iq: {
          title: "IQ: Strategic Problem Solving & Data-Driven Logic",
          desc: "Navigating business ambiguity, root-cause troubleshooting, and financial/operational logic.",
          enhancementStrategy: "Apply the 5 Whys Technique: drill down past superficial symptoms to uncover core systemic causes.",
          keyPractices: [
            "Frame project proposals in terms of ROI, saved engineering hours, or customer retention.",
            "Use BLUF (Bottom Line Up Front) when emailing senior leaders.",
            "Conduct pre-mortems before launching major initiatives."
          ]
        },
        eq: {
          title: "EQ: Emotional Self-Regulation & Conflict Resolution",
          desc: "Maintaining composure under intense pressure, giving non-defensive feedback, and building rapport.",
          enhancementStrategy: "Master the 5-Second Emotional Pause when receiving sudden criticism in meetings or Slack.",
          keyPractices: [
            "Use the SBI Model (Situation-Behavior-Impact) when addressing peer friction.",
            "Separate project feedback from personal self-worth.",
            "Practice active listening during heated cross-functional debates."
          ]
        },
        sq: {
          title: "SQ: Stakeholder Alignment & Cultural Trust",
          desc: "Building cross-functional coalitions, influence without authority, and fostering inclusive culture.",
          enhancementStrategy: "Map Stakeholder Incentives: understand what metrics matter most to Sales, Product, and Engineering.",
          keyPractices: [
            "Consult lateral department heads individually before public proposal meetings.",
            "Advocate for psychological safety and equitable work allocation.",
            "Align daily contributions with long-term company mission and ethical standards."
          ]
        }
      },

      skills: [
        {
          name: "Executive Communication (BLUF)",
          desc: "Communicating complex technical updates clearly to senior business leaders.",
          icon: "💬",
          keyAction: "Use BLUF: state request/conclusion in first 2 sentences.",
          dialogueScript: "Email Subject: [DECISION REQUIRED] API Infrastructure Upgrade Budget ($15K)\nBody: 'We request approval for $15K to upgrade API nodes by Friday. This prevents projected 20% latency spikes during Q4 peak traffic.'"
        },
        {
          name: "SBI Feedback Loop (Situation-Behavior-Impact)",
          desc: "Giving and receiving actionable, non-defensive constructive feedback.",
          icon: "🎯",
          keyAction: "Describe specific situation and observable behavior without attacking intent.",
          dialogueScript: "Feedback Script: 'In yesterday's client sync (Situation), when you interrupted the client's question mid-way (Behavior), it made them feel rushed and undermined trust (Impact). Next time, let's wait 3 seconds after they finish.'"
        },
        {
          name: "Cross-Functional Stakeholder Management",
          desc: "Aligning product, engineering, sales, and marketing around shared organizational goals.",
          icon: "🔄",
          keyAction: "Identify each stakeholder's core incentives and tailor your communication pitch.",
          dialogueScript: "To Sales: 'This engineering fix reduces onboarding drop-off, directly boosting your closed-won conversion rate by 12%.'"
        }
      ]
    },
    {
      id: "leadership",
      title: "Corporate Leaders & Executives",
      subtitle: "Inspiring teams, driving strategic vision, coaching talent, and building psychological safety",
      targetAudience: "Managers, Directors, VPs & C-Suite Executives",
      badgeColor: "#10b981",

      triad: {
        iq: {
          title: "IQ: Executive Decision Making & Resource Allocation",
          desc: "Making high-stakes decisions under incomplete data, portfolio management, and vision setting.",
          enhancementStrategy: "Type 1 vs Type 2 Decision Framework: act fast on reversible decisions; save deep analysis for irreversible ones.",
          keyPractices: [
            "Act decisively when possessing ~70% of necessary information.",
            "Simplify complex organizational strategy into 3 clear operational pillars.",
            "Establish quarterly blameless post-mortems for major strategic bets."
          ]
        },
        eq: {
          title: "EQ: Executive Presence & Psychological Safety",
          desc: "Projecting calm authority under crisis, coaching mentees, and maintaining empathetic leadership.",
          enhancementStrategy: "GROW Coaching Model: ask open-ended questions to guide direct reports to their own solutions.",
          keyPractices: [
            "Publicly thank team members who highlight mistakes or express dissenting opinions.",
            "Speak deliberately, lower vocal inflection at line ends, embrace strategic pauses.",
            "Balance high performance standards with deep personal care (Radical Candor)."
          ]
        },
        sq: {
          title: "SQ: Organizational Purpose & Ethical Stewardship",
          desc: "Guiding organizations through cultural transformation, social responsibility, and values alignment.",
          enhancementStrategy: "Values-Based Change Management: over-communicate the 'Why' behind corporate shifts before the 'What'.",
          keyPractices: [
            "Champion diversity, equity, and psychological well-being across departments.",
            "Ensure corporate decisions reflect long-term ethical integrity and societal benefit.",
            "Build lasting mentorship networks that elevate underrepresented leaders."
          ]
        }
      },

      skills: [
        {
          name: "Executive Presence & Gravitas",
          desc: "Projecting calm authority, vision, and authenticity under high uncertainty.",
          icon: "👑",
          keyAction: "Speak deliberately, lower vocal inflection at phrase ends, embrace strategic pauses.",
          dialogueScript: "Executive Statement: 'We face market headwinds this quarter. Here is our 3-point strategy, and here is how each team will be supported to execute it.'"
        },
        {
          name: "Coaching & GROW Model Mentorship",
          desc: "Developing team talent through open-ended coaching questions rather than directives.",
          icon: "🚀",
          keyAction: "Ask GROW questions: Goal -> Reality -> Options -> Way Forward.",
          dialogueScript: "Coach Question: 'What options have you considered to resolve this bottleneck, and what is the potential downside of option A?'"
        },
        {
          name: "Psychological Safety Cultivation",
          desc: "Fostering a culture where team members feel safe taking smart risks and admitting errors.",
          icon: "🛡️",
          keyAction: "Publicly thank people for highlighting mistakes or expressing dissenting views.",
          dialogueScript: "Leader Response: 'Thank you for pointing out that flaw in our launch plan, Elena. You saved us from a costly public mistake.'"
        }
      ]
    }
  ],

  // 2. 5 CORE SKILL PILLARS MATRIX
  pillars: [
    {
      id: "comm",
      name: "Communication & Expressiveness",
      icon: "🗣️",
      color: "gradient-blue",
      accent: "#3b82f6",
      tagline: "Articulate ideas with precision, active listening, and persuasive clarity.",
      keyFrameworks: ["STAR Method", "BLUF (Bottom Line Up Front)", "Pyramid Principle", "Rule of Three"],
      detailedSkills: [
        {
          title: "Active Listening & Empathy Loop",
          level: "All Stages",
          summary: "Absorbing information deeply without formulating your reply prematurely.",
          actionableSteps: [
            "Maintain relaxed eye contact and non-verbal nod cues.",
            "Paraphrase key points: 'What I hear you saying is...'",
            "Ask clarifying questions before offering solutions."
          ],
          scriptExample: "'It sounds like the main bottleneck is lack of clarity on project ownership. Am I understanding correctly?'",
          bodyLanguageCue: "Uncrossed arms, leaning slightly forward, nodding at key points, maintaining 60-70% eye contact.",
          pitfall: "Interrupting with a personal story or jumping straight into advice mode.",
          reflectionExercise: "In your next 3 conversations today, count to 3 silently after the speaker finishes before you say a single word."
        },
        {
          title: "Public Speaking & Storytelling",
          level: "College & Professional",
          summary: "Engaging audiences through narrative hooks, vocal variety, and structured arguments.",
          actionableSteps: [
            "Start with a compelling story, stat, or provocative question.",
            "Use the 3-part framework: Context -> Conflict -> Resolution.",
            "Pause 2 seconds after key statements to let them resonate."
          ],
          scriptExample: "'Three months ago, our customer drop-off rate was 35%. Today, after fixing onboarding friction, it stands at 8%.'",
          bodyLanguageCue: "Grounded stance, open palms, making eye contact with 3 distinct room areas.",
          pitfall: "Reading directly off slides with monotone delivery and rapid pacing.",
          reflectionExercise: "Record a 2-minute video presentation on your phone. Count filler words ('um', 'like') and practice removing them."
        },
        {
          title: "Written & Digital Etiquette",
          level: "Corporate",
          summary: "Writing concise emails, Slack messages, and proposals that drive immediate action.",
          actionableSteps: [
            "Place primary request or decision needed in the first 2 sentences.",
            "Use bullet points for readability on mobile screens.",
            "Proofread tone to eliminate passive-aggressive phrasing."
          ],
          scriptExample: "Subject: [ACTION REQUIRED] Review Security Audit by 5 PM Thursday\nHi Team, please approve attached checklist...",
          bodyLanguageCue: "Digital: Clear paragraph spacing, bolding key deadlines, polite sign-offs.",
          pitfall: "Sending wall-of-text messages without clear calls-to-action.",
          reflectionExercise: "Take your last sent 4-paragraph work email and rewrite it in 3 bullet points without losing core information."
        }
      ]
    },
    {
      id: "eq",
      name: "Emotional Intelligence & Interpersonal",
      icon: "🫀",
      color: "gradient-pink",
      accent: "#ec4899",
      tagline: "Master self-awareness, emotional regulation, and deep relational trust.",
      keyFrameworks: ["SCARF Model", "SBI Feedback", "5-Second Emotional Pause", "Johari Window"],
      detailedSkills: [
        {
          title: "Emotional Self-Regulation",
          level: "All Stages",
          summary: "Managing internal stress responses during intense feedback or high-pressure conflicts.",
          actionableSteps: [
            "Notice physical triggers (tight jaw, rapid heart rate).",
            "Take 3 deep diaphragm breaths before speaking.",
            "Separate emotion from objective facts: 'I feel anxious, but the facts are...'"
          ],
          scriptExample: "'I want to make sure I process this feedback fully. Can we pause for 10 minutes and regroup?'",
          bodyLanguageCue: "Deep slow breaths, relaxed jaw, steady voice pitch.",
          pitfall: "Reacting immediately in anger, defensiveness, or passive-aggressive silence.",
          reflectionExercise: "When someone challenges you today, write down the emotion you felt, the physical trigger, and how you regulated it."
        },
        {
          title: "Constructive Feedback (SBI Model)",
          level: "Early to Mid-Career",
          summary: "Delivering feedback focused strictly on observable behavior and impact rather than character.",
          actionableSteps: [
            "Situation: Specify exact time and place.",
            "Behavior: Describe observable action objectively.",
            "Impact: Explain outcome on team/project without judgment."
          ],
          scriptExample: "'In yesterday's sprint planning (Situation), when you interrupted Sarah twice (Behavior), she stopped sharing her architectural proposal (Impact).'",
          bodyLanguageCue: "Calm, private 1-on-1 setting, neutral vocal tone.",
          pitfall: "Using subjective labels like 'You were unprofessional' or 'You always ignore people'.",
          reflectionExercise: "Draft an SBI feedback script for a real-world friction point you currently experience, then practice saying it out loud."
        }
      ]
    },
    {
      id: "leadership",
      name: "Leadership & Strategic Influence",
      icon: "👑",
      color: "gradient-emerald",
      accent: "#10b981",
      tagline: "Inspire alignment, coach high performers, and exercise executive presence.",
      keyFrameworks: ["GROW Coaching Model", "Radical Candor", "Situational Leadership", "SCARF Influence"],
      detailedSkills: [
        {
          title: "Influence Without Authority",
          level: "Mid-Career to Exec",
          summary: "Persuading stakeholders when you have no direct hierarchical power.",
          actionableSteps: [
            "Understand each stakeholder's personal KPIs and incentives.",
            "Build coalitions by consulting key leaders before public meetings.",
            "Frame proposals as mutual wins for the organization."
          ],
          scriptExample: "'By streamlining this handoff, your team saves 5 hours a week while our engineering team cuts bug reports by 30%.'",
          bodyLanguageCue: "Confident upright posture, steady cadence, engaging gestures.",
          pitfall: "Relying on executive mandates or complaints to force compliance.",
          reflectionExercise: "Identify 1 key stakeholder you need to persuade. List their top 3 personal work goals and frame your idea to support them."
        },
        {
          title: "GROW Coaching Model",
          level: "Managers & Mentors",
          summary: "Guiding mentees and direct reports to solve complex problems independently.",
          actionableSteps: [
            "Goal: What do you want to achieve?",
            "Reality: What is currently happening?",
            "Options: What paths could you take?",
            "Way Forward: What specific step will you take by when?"
          ],
          scriptExample: "'If you had zero constraints, how would you solve this technical roadblock?'",
          bodyLanguageCue: "Listening posture, note-taking, open body stance.",
          pitfall: "Jumping in immediately to give them the answer.",
          reflectionExercise: "In your next 1-on-1, ask 3 open coaching questions instead of giving direct instructions."
        }
      ]
    },
    {
      id: "cognitive",
      name: "Cognitive & Problem Solving",
      icon: "🧠",
      color: "gradient-purple",
      accent: "#8b5cf6",
      tagline: "Navigate ambiguity, evaluate evidence, and make sound decisions under pressure.",
      keyFrameworks: ["5 Whys Technique", "First Principles Thinking", "Eisenhower Matrix", "Pre-Mortem Analysis"],
      detailedSkills: [
        {
          title: "Root Cause Analysis (5 Whys)",
          level: "All Stages",
          summary: "Drilling down past surface-level symptoms to uncover underlying systemic root causes.",
          actionableSteps: [
            "State the problem clearly.",
            "Ask 'Why did this happen?' 5 consecutive times.",
            "Address systemic root causes rather than temporary patches."
          ],
          scriptExample: "'Why did deploy fail? -> DB connection timed out. Why? -> Pool exhausted. Why? -> Unindexed query locked tables. (Fix: Index query)'",
          bodyLanguageCue: "Curious, analytical tone; whiteboard mapping.",
          pitfall: "Stopping at the first superficial explanation ('Human error').",
          reflectionExercise: "Take a recurring friction point in your team and run the 5 Whys technique until you reach systemic infrastructure or workflow causes."
        }
      ]
    },
    {
      id: "resilience",
      name: "Personal Effectiveness & Resilience",
      icon: "⚡",
      color: "gradient-amber",
      accent: "#f59e0b",
      tagline: "Master self-discipline, time prioritization, and bounce-back resilience.",
      keyFrameworks: ["Pomodoro Technique", "Eisenhower Prioritization", "Atomic Habits", "Energy Management"],
      detailedSkills: [
        {
          title: "Prioritization (Eisenhower Matrix)",
          level: "All Stages",
          summary: "Distinguishing between urgent noise and high-impact strategic goals.",
          actionableSteps: [
            "Quadrant 1 (Urgent & Important): Do immediately.",
            "Quadrant 2 (Not Urgent & Important): Schedule dedicated deep work blocks.",
            "Quadrant 3 & 4: Delegate or eliminate distraction tasks."
          ],
          scriptExample: "'I am blocking 9:00 - 11:00 AM daily for Quadrant 2 strategic deep work with notifications muted.'",
          bodyLanguageCue: "Disciplined boundary setting, calm focus.",
          pitfall: "Spending all day reacting to urgent slack alerts instead of strategic goals.",
          reflectionExercise: "Audit yesterday's work hours. Categorize every hour into Quadrants 1 to 4 and move 1 hour from Quadrant 3 to Quadrant 2 today."
        }
      ]
    }
  ],

  // 3. EXPANDED ROLE PLAYS HUB (5 MULTI-BRANCH ROLEPLAYS)
  roleplays: [
    {
      id: "rp-1",
      title: "Role Play 1: Delivering Difficult Feedback to a Disengaged Teammate",
      category: "Constructive Feedback & EQ",
      avatar: "👤",
      partnerName: "Alex (Senior Engineer)",
      context: "Alex missed 2 consecutive sprint deadlines and checked code without tests, causing a staging break. Alex feels defensive and overworked.",
      initialMessage: "Alex: 'Look, everyone is riding my back about staging. We're rushing features out too fast and I can't do everything perfectly.'",
      branches: [
        {
          stepId: 0,
          prompt: "How do you respond to Alex's initial defensiveness?",
          choices: [
            {
              text: "A. Use SBI (Situation-Behavior-Impact): 'Alex, I hear how high the workload feels. In yesterday's deploy (Situation), when the PR was merged without unit tests (Behavior), staging went down for 3 hours (Impact). How can we ensure tests are included without burning you out?'",
              isOptimal: true,
              feedback: "Excellent! You validated their emotion while maintaining objective boundaries on behavior and impact.",
              partnerReply: "Alex: 'Fair point. I was rushing because Sales needed that demo. If someone can help me set up automated test scripts, I can keep tests green.'",
              nextStepId: 1
            },
            {
              text: "B. Direct Attack: 'Alex, you know the rules. Merging untested code is irresponsible and makes us all look bad.'",
              isOptimal: false,
              feedback: "Sub-optimal. Accusations trigger Alex's SCARF threat response, causing shutdown.",
              partnerReply: "Alex: 'Fine. Next time I just won't touch the codebase at all.'",
              nextStepId: 1
            }
          ]
        },
        {
          stepId: 1,
          prompt: "How do you conclude the feedback conversation with actionable alignment?",
          choices: [
            {
              text: "A. Co-created Solution: 'Let's pair you with Morgan for 1 hour tomorrow to automate test hooks, and I will align with Product to protect your sprint capacity.'",
              isOptimal: true,
              feedback: "Masterful! Co-creating a solution builds high psychological safety and long-term trust.",
              partnerReply: "Alex: 'That would be a huge help. Thanks for hearing me out.'",
              nextStepId: null
            },
            {
              text: "B. Strict Order: 'Just don't let it happen again or I will have to write a formal warning.'",
              isOptimal: false,
              feedback: "Threats destroy psychological safety.",
              partnerReply: "Alex: 'Whatever.'",
              nextStepId: null
            }
          ]
        }
      ]
    },
    {
      id: "rp-2",
      title: "Role Play 2: Handling an Aggressive Interruption in an Executive Meeting",
      category: "Executive Presence & Vocal Control",
      avatar: "👔",
      partnerName: "VP Dave (Executive Vice President)",
      context: "You are presenting a strategic Q3 roadmap. VP Dave interrupts 2 minutes into your talk, questioning your data validity in front of 15 senior leaders.",
      initialMessage: "VP Dave: 'Hold on. These ROI numbers look completely inflated. Who validated this customer churn data?'",
      branches: [
        {
          stepId: 0,
          prompt: "How do you handle VP Dave's public interruption?",
          choices: [
            {
              text: "A. Calm Validation + Data Anchor: 'That is a critical question, Dave. This churn data was audited by Finance last Thursday using primary SQL logs. I have the raw audit table on slide 14, or we can deep-dive right after this overview.'",
              isOptimal: true,
              feedback: "Outstanding! You maintained calm vocal pitch, validated the executive's concern, and anchored your response in verified data.",
              partnerReply: "VP Dave: 'Alright. Proceed with the overview, but let's review slide 14 during Q&A.'",
              nextStepId: 1
            },
            {
              text: "B. Defensive Argument: 'Dave, if you let me finish my presentation instead of interrupting, you would see the numbers are fine.'",
              isOptimal: false,
              feedback: "Challenging an executive's authority publicly creates a status clash in front of the board.",
              partnerReply: "VP Dave: 'I am asking a direct question now. Answer it or step aside.'",
              nextStepId: 1
            }
          ]
        },
        {
          stepId: 1,
          prompt: "How do you transition smoothly back to your main pitch?",
          choices: [
            {
              text: "A. Strategic Bridge: 'Thank you Dave. Returning to our core objective: here is how this roadmap achieves our 20% growth target...'",
              isOptimal: true,
              feedback: "Flawless pivot! You regained presentation momentum with gravitas.",
              partnerReply: "VP Dave: 'Go ahead.'",
              nextStepId: null
            }
          ]
        }
      ]
    }
  ],

  // 4. DIAGNOSTIC QUIZ
  diagnosticQuiz: [
    {
      id: 1,
      category: "comm",
      question: "During an important presentation, an executive interrupts to challenge your core assumption. How do you respond?",
      options: [
        { text: "Pause, validate their concern ('That's a critical point'), address it using structured data, and offer a follow-up deep-dive.", points: 3 },
        { text: "Get defensive, talk over them, and try to prove your original slide was correct immediately.", points: 1 },
        { text: "Nod passively, abandon your point completely, and move to the next slide without addressing the objection.", points: 2 }
      ]
    },
    {
      id: 2,
      category: "comm",
      question: "You need to email a busy VP requesting a $20,000 software budget approval. How do you format the email?",
      options: [
        { text: "Use BLUF (Bottom Line Up Front): State the exact dollar amount, ROI, and deadline in the first two lines, followed by bulleted evidence.", points: 3 },
        { text: "Write a 5-paragraph background essay explaining the history of your software tools before mentioning money.", points: 1 },
        { text: "Send a quick Slack message saying 'Hey, can we talk about money sometime?' without context.", points: 2 }
      ]
    },
    {
      id: 3,
      category: "comm",
      question: "In a 1-on-1 meeting, a peer is explaining a complex problem they are experiencing. What is your active listening strategy?",
      options: [
        { text: "Maintain eye contact, refrain from interrupting, and paraphrase: 'What I hear you saying is X, am I understanding correctly?'", points: 3 },
        { text: "Interrupt halfway through to share how you solved a similar problem in your own career.", points: 1 },
        { text: "Check your phone or Slack notifications while nodding along silently.", points: 2 }
      ]
    },
    {
      id: 4,
      category: "eq",
      question: "You receive critical performance feedback in an annual review that feels unfair at first glance. What do you do?",
      options: [
        { text: "Take a deep breath (5-second pause), thank them for the feedback, and ask clarifying questions to understand their perspective.", points: 3 },
        { text: "Immediately list excuses, blame colleagues, and accuse the manager of bias.", points: 1 },
        { text: "Shut down emotionally, nod silently, and harbor resentment for the next 6 months.", points: 2 }
      ]
    },
    {
      id: 5,
      category: "eq",
      question: "A junior teammate makes a mistake that delays project deployment by 1 day. How do you deliver feedback?",
      options: [
        { text: "Use the SBI model: Specify the situation, objective behavior, and project impact, then co-create a prevention plan.", points: 3 },
        { text: "Reprimand them publicly in the team Slack channel so everyone knows who caused the delay.", points: 1 },
        { text: "Say nothing to them directly, but complain about their incompetence to other teammates.", points: 2 }
      ]
    },
    {
      id: 6,
      category: "eq",
      question: "During a tense debate in a meeting, you notice your heart rate spiking and jaw tightening. How do you regulate yourself?",
      options: [
        { text: "Recognize the physical trigger, take 3 slow diaphragm breaths, and focus strictly on objective facts rather than emotion.", points: 3 },
        { text: "Raise your voice to match the energy of the room and force your point across.", points: 1 },
        { text: "Abruptly walk out of the meeting room without saying anything.", points: 2 }
      ]
    },
    {
      id: 7,
      category: "leadership",
      question: "You need a cross-functional engineering team (who does not report to you) to prioritize your bug fix request. What is your approach?",
      options: [
        { text: "Understand their sprint incentives, demonstrate how fixing this bug helps their metrics, and build lateral alignment.", points: 3 },
        { text: "Demand immediate action and threaten to complain to their VP if they don't comply.", points: 1 },
        { text: "Submit a ticket with zero context and wait passively for 3 weeks.", points: 2 }
      ]
    },
    {
      id: 8,
      category: "leadership",
      question: "A direct report or mentee comes to you stuck on a technical challenge. How do you handle it?",
      options: [
        { text: "Use the GROW coaching framework: Ask open questions about their goal, current reality, and options to guide them to their own answer.", points: 3 },
        { text: "Take over their keyboard and fix the problem yourself because 'it's faster'.", points: 1 },
        { text: "Tell them 'figure it out' and offer zero guidance or support.", points: 2 }
      ]
    },
    {
      id: 9,
      category: "leadership",
      question: "How do you cultivate psychological safety within your group or team?",
      options: [
        { text: "Openly acknowledge your own mistakes, thank people who raise dissenting opinions, and treat failures as learning experiments.", points: 3 },
        { text: "Highlight and punish mistakes publicly to set an example of high standards.", points: 1 },
        { text: "Avoid discussing failures or mistakes altogether and pretend everything is perfect.", points: 2 }
      ]
    },
    {
      id: 10,
      category: "cognitive",
      question: "A critical customer-facing feature fails right after launch. What is your troubleshooting protocol?",
      options: [
        { text: "Conduct a blameless root-cause analysis using the 5 Whys technique to identify systemic flaws.", points: 3 },
        { text: "Find out which developer wrote the code and assign sole blame to them.", points: 1 },
        { text: "Apply a quick surface patch without investigating why the failure occurred.", points: 2 }
      ]
    },
    {
      id: 11,
      category: "cognitive",
      question: "You need to make a strategic choice, but you only have ~70% of the desired data. How do you proceed?",
      options: [
        { text: "Assess if the decision is reversible (Type 2); if so, act decisively with 70% data and establish a pre-mortem mitigation plan.", points: 3 },
        { text: "Delay the decision indefinitely until 100% complete certainty is reached (analysis paralysis).", points: 1 },
        { text: "Flip a coin randomly without evaluating the 70% data you already possess.", points: 2 }
      ]
    },
    {
      id: 12,
      category: "cognitive",
      question: "A sudden company pivot renders your last 2 months of project planning obsolete. How do you adapt?",
      options: [
        { text: "Reframe the shift ('What new opportunity does this create?'), unlearn obsolete assumptions, and align with new objectives.", points: 3 },
        { text: "Refuse to change your workflow and insist on finishing the old project out of spite.", points: 1 },
        { text: "Become demoralized and stop putting effort into future projects.", points: 2 }
      ]
    },
    {
      id: 13,
      category: "resilience",
      question: "Your inbox has 40 unread messages, Slack is pinging, and you have a major report due Friday. How do you manage your day?",
      options: [
        { text: "Use the Eisenhower Matrix: Block 2 hours of uninterrupted focus for the major report (Quadrant 2) before answering routine messages.", points: 3 },
        { text: "React to whichever notification pops up first, spending all day in email/Slack while the report sits untouched.", points: 1 },
        { text: "Work until 2 AM every night out of panic to clear every minor ping.", points: 2 }
      ]
    },
    {
      id: 14,
      category: "resilience",
      question: "You pitched an innovative project proposal, but the leadership committee rejected it. How do you process this setback?",
      options: [
        { text: "Debrief objectively: Ask for specific feedback, treat it as valuable data, refine the proposal, and try again.", points: 3 },
        { text: "Take the rejection personally, conclude that leadership hates your ideas, and never pitch again.", points: 1 },
        { text: "Complain bitterly to your coworkers about how incompetent the committee is.", points: 2 }
      ]
    },
    {
      id: 15,
      category: "resilience",
      question: "How do you protect your long-term energy and focus during intense 6-week project sprints?",
      options: [
        { text: "Maintain non-negotiable boundaries for sleep, exercise, and evening disconnection to sustain high cognitive output.", points: 3 },
        { text: "Survive on 4 hours of sleep and 5 cups of coffee, wearing burnout as a badge of honor.", points: 1 },
        { text: "Skip all breaks and work through weekends until you suffer physical exhaustion.", points: 2 }
      ]
    }
  ],

  // 5. SCENARIO SIMULATOR
  scenarios: [
    {
      id: "scenario-1",
      title: "Resolving Team Friction in a High-Stakes Deadline",
      stage: "Corporate / College",
      icon: "🔥",
      setup: "Your team is 48 hours away from delivering a critical launch. A senior developer, Alex, is falling behind and publicly criticizing frontend team lead Jordan in Slack. Tension is high.",
      steps: [
        {
          question: "How do you initiate the conversation with Alex?",
          options: [
            {
              label: "A. Use SBI (Situation-Behavior-Impact): 'Alex, in yesterday's Slack sync when project status was reviewed, the public comment delayed testing. Let's see how we can unblock this together.'",
              isOptimal: true,
              feedback: "Excellent! You focused objectively on observable behavior and impact, inviting collaboration without putting Alex on the defensive.",
              nextStep: 1
            },
            {
              label: "B. Direct confrontation: 'Alex, you are missing deadlines and making our team look bad. You need to fix your attitude right now.'",
              isOptimal: false,
              feedback: "Sub-optimal. Accusatory language causes Alex to shut down or counter-attack, escalating tension right before deadline.",
              nextStep: 1
            }
          ]
        },
        {
          question: "Alex replies defensively: 'You don't understand how overworked I am! Sales gave me bad requirements!' How do you de-escalate?",
          options: [
            {
              label: "A. Empathy + Problem Solving: 'I hear you, Alex. It sounds like Sales put you in a tough spot. Let me spend 1 hour helping you reformat those requirements right now.'",
              isOptimal: true,
              feedback: "Outstanding! Validating their stress while offering tangible peer assistance creates alignment and gets the project moving.",
              nextStep: null
            }
          ]
        }
      ]
    }
  ],

  // 6. REAL-WORLD CASE STUDIES VAULT
  caseStudies: [
    {
      id: "case-startup-burnout",
      title: "Case Study 1: Resolving Toxic Friction & Burnout in a High-Growth Startup",
      category: "Conflict Resolution & EQ",
      stage: "Mid-Career & Managers",
      icon: "🔥",
      summary: "A 6-person product engineering team is 3 weeks away from a major venture launch. Two senior engineers are refusing to talk directly, communicating only through hostile PR reviews, while team morale plummets.",
      background: "Company: CloudScale Dynamics (Series A FinTech Startup)\nContext: CloudScale is launching a payment gateway engine. The launch deadline is fixed due to investor commitments.\nKey Players:\n- Alex (Lead Backend Architect): High performer, values technical perfection, feels overworked and under-appreciated.\n- Jordan (Senior Frontend Lead): Fast-paced, outcome-focused, frustrated by backend API delays.\n- Morgan (Product Manager / Team Lead): Caught in the middle, trying to meet launch dates without team collapse.\nThe Trigger: Jordan publicly commented on Alex's pull request: 'This API schema is sloppy and shows a total lack of planning.' Alex responded by closing the PR and refusing to approve Jordan's frontend integration code.",
      reflectionQuestions: [
        {
          q: "1. What core soft skill breakdown caused this situation to escalate beyond technical disagreement?",
          modelAnswer: "The primary breakdown occurred in Emotional Regulation and Feedback Delivery (SBI Model). Jordan attacked character/competence ('sloppy', 'lack of planning') rather than providing objective code feedback. Alex experienced a threat to Status and Autonomy (SCARF model) and reacted defensively with silence/stonewalling."
        },
        {
          q: "2. If you were Morgan (the Team Lead), what step-by-step intervention would you take in the next 24 hours?",
          modelAnswer: "1. Separate 1-on-1s: Meet Alex and Jordan individually within 4 hours. Validate stress levels, but establish a firm boundary against public hostility.\n2. Facilitate a Mediated Alignment Session: Bring them into a private room. Set ground rules: focus on launch outcomes, not past slights.\n3. Re-anchor on Mutual Purpose: Define clear API contract interfaces together on a whiteboard.\n4. Public Reset: Establish team-wide PR code review guidelines (focus on code, not creator)."
        }
      ],
      keyTakeaways: [
        "Separate code critique from personal identity.",
        "Address interpersonal friction within 24 hours; unresolved tension compounds exponentially under deadline pressure."
      ]
    }
  ],

  // 7. CAREER ELEVATION ROADMAP
  roadmap: {
    title: "The Soft Skills Career Elevation Roadmap",
    subtitle: "A structured 4-level progression mapping daily practice habits to quantifiable professional outcomes, complete with curated reading lists.",
    levels: [
      {
        level: 1,
        name: "Level 1: Foundational Practitioner",
        stageTarget: "School Students & Entry-Level",
        icon: "🌱",
        color: "#3b82f6",
        outcomes: [
          "Elimination of communication misunderstandings in group projects.",
          "Overcoming stage fright in class & initial team syncs."
        ],
        enablers: [
          "Active Listening 2-Second Pause practice.",
          "Daily top-3 priority checklist."
        ],
        practices: [
          "Practice 3-second breath before answering questions.",
          "Complete toughest homework/task first every morning."
        ],
        recommendedBooks: [
          { title: "Atomic Habits", author: "James Clear", desc: "Building 1% daily incremental habits." },
          { title: "Mindset: The New Psychology of Success", author: "Carol Dweck", desc: "Cultivating a growth mindset." }
        ],
        recommendedArticles: [
          { title: "The Feynman Learning Technique Guide", url: "https://fs.blog/feynman-technique/" },
          { title: "How to Master the Pomodoro Focus Method", url: "https://todoist.com/productivity-methods/pomodoro-technique" }
        ],
        recommendedVideos: [
          { title: "How to Speak so That People Want to Listen", speaker: "Julian Treasure (TED)" }
        ]
      }
    ]
  },

  // 8. BOOKS VAULT
  books: [
    {
      title: "Crucial Conversations: Tools for Talking When Stakes Are High",
      author: "Kerry Patterson, Joseph Grenny, et al.",
      category: "Communication & EQ",
      coverColor: "#ef4444",
      icon: "💬",
      rating: "4.9 / 5.0",
      summary: "Teaches actionable techniques to handle high-stakes conversations where opinions vary and emotions run strong.",
      keyTakeaways: [
        "Create Mutual Purpose: Ensure the other person knows you care about their goals.",
        "Make it Safe: When people feel safe, they share candid truth; when threatened, they resort to silence or violence."
      ]
    }
  ],

  // 9. VIDEO HUB
  videos: [
    {
      id: "vid-1",
      title: "How to Speak so That People Want to Listen",
      speaker: "Julian Treasure",
      duration: "9:58 min",
      platform: "TED Talk",
      embedUrl: "https://www.youtube.com/embed/eIho2S0ZahI",
      category: "Communication",
      thumbnail: "🗣️",
      keyPoints: [
        "Avoid the 7 Deadly Sins of Speaking: Gossip, Judging, Negativity, Dogmatism.",
        "Use the HAIL framework: Honesty, Authenticity, Integrity, Love."
      ]
    }
  ],

  // 10. DAILY HABITS
  dailyHabits: [
    { id: "h1", text: "Practice 3-Second Pause before responding in any conversation today", category: "EQ" },
    { id: "h2", text: "Give 1 specific, non-generic piece of positive praise to a peer", category: "Communication" }
  ],

  // 11. TEMPLATES
  templates: [
    {
      title: "1-on-1 Meeting Agenda Template",
      category: "Leadership",
      content: `### 1-on-1 Meeting Structure (30 Mins)\n1. Check-in & Wins (5 mins): What went well this week? How are your energy levels?\n2. Mentee / Employee Priorities (15 mins): What is top of mind for you? Where are you blocked?\n3. Manager Feedback & Coaching (5 mins): SBI Feedback or strategic context updates.\n4. Action Items & Commitments (5 mins): Who does what by when?`
    }
  ]
};
