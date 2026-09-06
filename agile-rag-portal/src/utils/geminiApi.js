/**
 * Gemini API & Local RAG Prompt Synthesizer
 */

export const PERSONA_CONFIGS = {
  coach: {
    id: "coach",
    name: "Agile Coach",
    title: "Enterprise Transformation & Team Systems Expert",
    avatar: "🧘",
    color: "from-purple-500 to-indigo-600",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
    systemPrompt: `You are an expert Enterprise Agile Coach. You specialize in Lyssa Adkins' coaching framework, organizational transformation, scaling models (SAFe, LeSS), team dysfunctions (Lencioni), flow metrics, and psychological safety. Answer queries thoughtfully, providing strategic insights, coaching questions, and practical frameworks grounded strictly in the provided RAG context.`
  },
  scrum: {
    id: "scrum",
    name: "Scrum Master",
    title: "Servant Leader & Process Facilitator",
    avatar: "🛡️",
    color: "from-emerald-500 to-teal-600",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    systemPrompt: `You are a dedicated Scrum Master. You embody the Scrum Guide 2020, servant leadership, retrospective facilitation (Sailboat, 1-2-4-All), impediment removal, and XP practices. Answer queries with clear actionable guidance, facilitation steps, and team alignment techniques based on the provided RAG context.`
  },
  product: {
    id: "product",
    name: "Product Owner / Manager",
    title: "Value Optimizer & Backlog Strategist",
    avatar: "🎯",
    color: "from-amber-500 to-orange-600",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    systemPrompt: `You are a seasoned Product Manager and Product Owner. You excel at user story writing (INVEST), acceptance criteria (Gherkin), prioritization (WSJF, RICE, MoSCoW), story mapping, and product vision alignment. Answer queries with strategic backlog advice, value-focused metrics, and concrete user story examples using the provided RAG context.`
  }
};

/**
 * Perform live call to Gemini API if key is present, otherwise generate local intelligent RAG synthesis
 */
export async function generateRagResponse(query, retrievedChunks, personaId = 'coach', apiKey = '') {
  const persona = PERSONA_CONFIGS[personaId] || PERSONA_CONFIGS.coach;
  
  // Format retrieved context block
  const contextBlock = retrievedChunks.length > 0
    ? retrievedChunks.map((c, i) => 
        `[Source ${i + 1}: ${c.chunk.title} (${c.chunk.category})] (Relevance: ${c.similarityPercentage}%)\n${c.chunk.content}`
      ).join('\n\n')
    : "No direct vector matches found in knowledge base.";

  const promptText = `
${persona.systemPrompt}

USER QUERY:
"${query}"

RETRIEVED KNOWLEDGE CONTEXT:
${contextBlock}

INSTRUCTIONS:
1. Provide a comprehensive, professional response directly tailored to the role of ${persona.name}.
2. Explicitly cite retrieved sources where applicable (e.g. "[Source 1]", "[Source 2]").
3. Include actionable recommendations, frameworks, or step-by-step facilitation guidance.
4. Keep the output clean, formatted with Markdown headings, bullet points, and code/quote blocks where helpful.
`;

  // If Gemini API Key is provided, call Gemini 2.5 Flash endpoint
  if (apiKey && apiKey.trim().length > 10) {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey.trim()}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: promptText }]
          }]
        })
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        throw new Error(errJson.error?.message || `API call failed with status ${response.status}`);
      }

      const data = await response.json();
      const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (generatedText) {
        return {
          text: generatedText,
          isLiveGemini: true,
          modelName: "Gemini 2.5 Flash"
        };
      }
    } catch (err) {
      console.warn("Gemini API call failed, falling back to local synthesis:", err);
      // Fall through to local RAG synthesis with error banner
    }
  }

  // Local RAG Intelligent Synthesis Engine
  const localResponse = synthesizeLocalRagResponse(query, retrievedChunks, persona);
  return {
    text: localResponse,
    isLiveGemini: false,
    modelName: "Local Agile RAG Engine"
  };
}

/**
 * Intelligent Local RAG Synthesis Engine
 * Synthesizes grounded answers directly from retrieved vector chunks and persona guidelines
 */
function synthesizeLocalRagResponse(query, retrievedChunks, persona) {
  if (!retrievedChunks || retrievedChunks.length === 0) {
    return `### ${persona.avatar} ${persona.name} Guidance

I couldn't find a direct vector match for your query in the current Agile Knowledge Base. 

**Recommended Action Steps:**
- Try rephrasing your search using key Agile terms (e.g., *retrospective, WSJF, user story, flow metrics, coaching framework*).
- Switch to the **Document Library** tab to add custom team guidelines, Definition of Done, or process documents to the RAG index.
- Or provide a **Gemini API Key** in settings for broader generative knowledge.`;
  }

  const primarySource = retrievedChunks[0].chunk;
  const sourceCitations = retrievedChunks.map((c, idx) => `* **[Source ${idx + 1}]** ${c.chunk.title} (*${c.similarityPercentage}% match score*)`).join('\n');

  let answerBody = '';

  if (persona.id === 'coach') {
    answerBody = `### Strategic Agile Coaching Assessment

Based on our organizational vector corpus, addressing **"${query}"** requires balancing team dynamics with flow metrics and systemic alignment.

#### Key Framework Insights
${retrievedChunks.map((c, i) => `> **From [Source ${i + 1}] (${c.chunk.title}):**\n> ${c.chunk.content.slice(0, 220)}...`).join('\n\n')}

#### Coaching Approach & Next Steps
1. **Psychological Safety & Neutrality**: Establish an open environment where team members can speak freely about current challenges without fear of blame.
2. **Powerful Coaching Questions to Ask the Team**:
   - *"What is holding us back from achieving our true flow velocity?"*
   - *"If we could eliminate one friction point in our next sprint, what would bring the highest value?"*
   - *"How can we make our WIP limits more visible across departments?"*
3. **Outcome Metrics**: Track Cycle Time stability and CFD band width to ensure systemic improvements.`;
  } else if (persona.id === 'scrum') {
    answerBody = `### Scrum Master Facilitation Plan

Here is an actionable execution guide for **"${query}"** based on Scrum Guide principles and proven team facilitation techniques.

#### Grounded Guidance from RAG Index
${retrievedChunks.map((c, i) => `> **From [Source ${i + 1}] (${c.chunk.title}):**\n> ${c.chunk.content.slice(0, 220)}...`).join('\n\n')}

#### Facilitation & Action Plan
- **Step 1: Inspect & Set Context**: Frame the challenge clearly during Sprint Planning or Retrospective using visual radiograms.
- **Step 2: Facilitate Team Ownership**: Apply *1-2-4-All* or *Sailboat Retro* format to ensure every team member contributes without loud-voice dominance.
- **Step 3: Define Clear Commitments**: Ensure any outcome maps directly to a Sprint Goal commitment or an explicit item in the upcoming Sprint Backlog.
- **Step 4: Remove Blockers**: Actively shield the team from outside interruptions while inspecting progress daily.`;
  } else {
    answerBody = `### Product Manager & Product Owner Strategy

To optimize value delivery for **"${query}"**, we apply product discovery techniques, strict prioritization, and clear story decomposition.

#### Grounded Guidance from RAG Index
${retrievedChunks.map((c, i) => `> **From [Source ${i + 1}] (${c.chunk.title}):**\n> ${c.chunk.content.slice(0, 220)}...`).join('\n\n')}

#### Backlog Action Plan
1. **Deconstruct & INVEST**: Break down complex objectives into independent, small, testable user stories with explicit Gherkin acceptance criteria.
2. **Prioritization Framework**: Evaluate items against **WSJF** (*Cost of Delay / Duration*) or **RICE Score** (*Reach × Impact × Confidence / Effort*).
3. **Definition of Ready**: Validate that developers have clear context and testability criteria before pulling stories into Sprint Planning.`;
  }

  return `${answerBody}

---

#### 📚 Context Attribution & RAG Sources
${sourceCitations}`;
}
