export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Hiring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Record and Analyze<br />
          <span className="text-[#58a6ff]">Technical Interviews</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Capture every coding interview in your browser, get instant transcripts, and receive bias-free AI assessments — so your team hires on merit, not memory.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Recording — $19/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🎙️", title: "Browser Recording", desc: "No installs. Record audio and screen directly from Chrome or Firefox." },
            { icon: "📝", title: "Auto Transcripts", desc: "Speech-to-text transcription delivered seconds after the session ends." },
            { icon: "⚖️", title: "Bias-Free Reports", desc: "Structured AI assessments focused on skills, not demographics." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <span className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest">Pro Plan</span>
          <div className="mt-4 mb-2">
            <span className="text-5xl font-bold text-white">$19</span>
            <span className="text-[#8b949e] ml-1">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to run fair, documented technical interviews.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited interview recordings",
              "Automatic transcripts",
              "AI candidate assessments",
              "Shareable report links",
              "Secure session storage",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Does the candidate need to install anything?",
              a: "No. Interviews run entirely in the browser using standard Web APIs. Candidates just join a link — no plugins or downloads required."
            },
            {
              q: "How does the bias-free assessment work?",
              a: "Our AI evaluates technical responses against predefined rubrics, omitting names, gender, and demographic signals so hiring decisions are based purely on demonstrated skills."
            },
            {
              q: "Is my interview data secure?",
              a: "All recordings and transcripts are encrypted at rest and in transit. Sessions are access-controlled and automatically purged after your chosen retention period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} InterviewRec. All rights reserved.
      </footer>
    </main>
  );
}
