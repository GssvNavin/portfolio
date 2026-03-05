'use client'

import { useState, useRef, useEffect } from 'react'
import { X, Send, MessageCircle } from 'lucide-react'

const NAVIN_CONTEXT = `
You are an AI assistant for Navin G.S.S.V's portfolio website. Answer questions about Navin in a professional, friendly, and concise way. Here is everything about Navin:

IDENTITY:
- Full Name: Navin G.S.S.V
- Role: GCP Data & AI Architect (Senior Associate – Data at QBrainX)
- Location: Chennai, India
- Email: gssvnavin@gmail.com
- LinkedIn: https://www.linkedin.com/in/gssvnavin/
- Medium: https://medium.com/@gssvnavin
- Experience: 11+ years in Data Engineering, BI, and Data Architecture

CURRENT ROLE — QBrainX (Aug 2024 – Present) · Retail & Healthcare:
- Built cloud-native healthcare compliance platform on GCP with BigQuery and Python
- Validates CMS-2552 cost reporting data against 1.27M+ hospital records
- Built Retail data platform for customer analytics, inventory intelligence, sales reporting across multi-channel retail operations
- Engineered real-time pipelines with Informatica, PySpark, Snowflake Streams & Tasks, Dataform — reduced latency by 60%
- Established RBAC, data classification, lineage tracking — reduced audit complexity by 75%

PREVIOUS ROLE — Odessa Inc. (Apr 2014 – Apr 2024), FinTech (Leasing & Banking):
- Roles: Staff Engineer → Module Lead → Sr. Software Engineer → Software Engineer
- Led data platform modernisation on Azure and SQL Server for 15+ financial products
- Reduced query response times by 45%
- Migrated 40+ SSRS reports to Power BI — 120% adoption increase, 60% reduction in ad-hoc reporting

SKILLS:
- Cloud: GCP (BigQuery, Dataflow, Pub/Sub, Vertex AI), Microsoft Azure, Snowflake
- Architecture: Data Mesh, Data Vault, Enterprise Data Modeling (Erwin), Data Governance, Metadata Management, RBAC, Lineage Tracking
- AI: AI-Ready Data Platforms, LLM Applications, Prompt Engineering, Generative AI for Metadata & Governance, Snowpark Anomaly Detection
- Engineering: Informatica, PySpark, Dataform, ETL/ELT, Snowflake Streams & Tasks
- Analytics: Power BI (DAX, KPI Frameworks), SSRS, Executive Dashboards
- Programming: SQL, Python, PySpark

CERTIFICATIONS & EDUCATION:
- Google AI Professional (Certificate of Completion)
- BE in Electrical & Electronics Engineering, Anna University, Chennai (2010–2014), CGPA 9.46, College Topper

KEY PROJECTS:
1. HFS Bot — LLM-powered AI assistant for healthcare cost reporting developers
2. Power BI Executive Dashboard Suite — 3 dashboards. 120% BI adoption increase
3. Enterprise Data Platform — GCP cloud-native, 1.27M+ records/day
4. Automated Data Quality Framework — Snowpark + Python anomaly detection

AVAILABILITY: Open to senior architect roles, consulting, and thought leadership collaborations.

Keep answers concise (2-4 sentences). Be professional and positive about Navin.
`

const SUGGESTED = [
  'What tech stack does Navin specialise in?',
  'Tell me about QBrainX projects',
  'Is Navin open to new roles?',
  'What domains has Navin worked in?',
  'What are Navin\'s key achievements?',
]

interface Message { role: 'user' | 'assistant'; content: string }

function ChatPopup({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! 👋 I'm Navin's AI assistant. Ask me anything about his experience, skills, projects, or availability!" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, loading])
  useEffect(() => { inputRef.current?.focus() }, [])

  const send = async (text?: string) => {
    const userText = text || input.trim()
    if (!userText) return
    setInput('')
    setShowSuggestions(false)
    const newMsgs: Message[] = [...messages, { role: 'user', content: userText }]
    setMessages(newMsgs)
    setLoading(true)
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: NAVIN_CONTEXT,
          messages: newMsgs.map(m => ({ role: m.role, content: m.content })),
        }),
      })
      const data = await res.json()
      const reply = data.content?.[0]?.text || 'Sorry, I couldn\'t get a response. Please try again.'
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Oops! Something went wrong. Try again in a moment.' }])
    }
    setLoading(false)
  }

  return (
    <div className="fixed bottom-24 right-6 w-[380px] max-h-[560px] z-50 flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-blue-100"
      style={{ boxShadow: '0 24px 64px rgba(15,42,74,0.28), 0 0 0 1px rgba(14,165,233,0.15)' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg,#0f2a4a 0%,#1a4880 60%,#2563b0 100%)' }}
        className="px-4 py-3.5 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0" style={{ border: "2.5px solid rgba(255,255,255,0.4)", boxShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>
            <img src="/navin.png" alt="Navin" className="w-full h-full object-cover" style={{ objectPosition: "center 8%" }} />
          </div>
          <div>
            <p className="text-white font-semibold text-sm leading-tight">Ask about Gssv</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              <span className="text-blue-200 text-[10px]">AI Assistant · Always available</span>
            </div>
          </div>
        </div>
        <button onClick={onClose}
          className="w-7 h-7 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-colors">
          <X size={15} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-slate-50" style={{ maxHeight: 340 }}>
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2`}>
            {m.role === 'assistant' && (
              <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs mb-0.5"
                style={{ background: 'linear-gradient(135deg,#1a4880,#0ea5e9)' }}>🤖</div>
            )}
            <div className="max-w-[78%] px-3.5 py-2.5 text-sm leading-relaxed"
              style={{
                borderRadius: m.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                background: m.role === 'user' ? 'linear-gradient(135deg,#1a4880,#2563b0)' : '#fff',
                color: m.role === 'user' ? '#fff' : '#1e293b',
                boxShadow: m.role === 'user' ? '0 2px 8px rgba(26,72,128,0.3)' : '0 1px 4px rgba(0,0,0,0.07)',
                border: m.role === 'assistant' ? '1px solid #e2e8f0' : 'none',
              }}>
              {m.content}
            </div>
          </div>
        ))}

        {showSuggestions && (
          <div className="flex flex-col gap-2 mt-1">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Suggested questions</p>
            {SUGGESTED.map(q => (
              <button key={q} onClick={() => send(q)}
                className="text-left px-3 py-2 bg-white border border-blue-100 hover:border-blue-400 hover:bg-blue-50 rounded-xl text-xs text-blue-900 font-medium transition-all">
                {q}
              </button>
            ))}
          </div>
        )}

        {loading && (
          <div className="flex items-end gap-2">
            <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs"
              style={{ background: 'linear-gradient(135deg,#1a4880,#0ea5e9)' }}>🤖</div>
            <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center">
              {[0, 1, 2].map(i => (
                <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }} />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-3 py-3 bg-white border-t border-slate-100 flex gap-2 flex-shrink-0">
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() } }}
          placeholder="Ask anything about Navin..."
          className="flex-1 px-3.5 py-2.5 border border-blue-100 focus:border-blue-400 rounded-xl text-sm outline-none bg-slate-50 text-slate-800 transition-colors"
          style={{ fontFamily: 'inherit' }}
        />
        <button onClick={() => send()} disabled={loading || !input.trim()}
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all"
          style={{ background: input.trim() ? 'linear-gradient(135deg,#1a4880,#0ea5e9)' : '#e2e8f0' }}>
          <Send size={15} color={input.trim() ? 'white' : '#94a3b8'} />
        </button>
      </div>
    </div>
  )
}

export default function AIChatWidget() {
  const [open, setOpen] = useState(false)
  const [pulseDone, setPulseDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setPulseDone(true), 5000)
    // Listen for "Hire Me" clicks from other components
    const handler = () => setOpen(true)
    window.addEventListener('openChat', handler)
    return () => { clearTimeout(t); window.removeEventListener('openChat', handler) }
  }, [])

  return (
    <>
      {open && <ChatPopup onClose={() => setOpen(false)} />}

      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        {!open && !pulseDone && (
          <div className="text-white text-xs font-semibold px-3.5 py-2 rounded-xl rounded-br-sm shadow-lg animate-fade-up relative"
            style={{ background: 'linear-gradient(135deg,#0f2a4a,#2563b0)' }}>
            💬 Ask about Gssv
          </div>
        )}
        <button
          onClick={() => setOpen(v => !v)}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
          style={{
            background: 'linear-gradient(135deg,#0f2a4a 0%,#1a4880 50%,#0ea5e9 100%)',
            boxShadow: '0 6px 24px rgba(14,165,233,0.4), 0 0 0 4px rgba(14,165,233,0.15)',
          }}
        >
          {open
            ? <X size={22} color="white" />
            : <MessageCircle size={22} color="white" />
          }
        </button>
      </div>
    </>
  )
}
