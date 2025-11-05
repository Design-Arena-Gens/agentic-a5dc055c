import BengaliQuiz from "./components/BengaliQuiz";

const corePhrases = [
  { bengali: "হ্যালো", transliteration: "Hyalo", english: "Hello" },
  { bengali: "আপনি কেমন আছেন?", transliteration: "Apni kemon achhen?", english: "How are you?" },
  { bengali: "আমি ভাল আছি", transliteration: "Ami bhalo achhi", english: "I am fine" },
  { bengali: "ধন্যবাদ", transliteration: "Dhonnobad", english: "Thank you" },
  { bengali: "বিদায়", transliteration: "Biday", english: "Goodbye" },
];

const pronunciationTips = [
  {
    label: "অ (aw)",
    description: "Short open 'aw' sound, as in 'not' but softer.",
  },
  {
    label: "ঐ (oi)",
    description: "Pronounced like 'oy' in 'boy'.",
  },
  {
    label: "ঙ (ng)",
    description: "Nasal 'ng' sound; often pairs with other letters.",
  },
  {
    label: "ড় (ṛ)",
    description: "Tap the tongue quickly on the roof of the mouth, similar to a rolled 'r'.",
  },
];

const culturalInsights = [
  {
    title: "Respectful Forms",
    content:
      "Use 'আপনি' (apni) when speaking to elders or strangers. Switch to 'তুমি' (tumi) for friends and peers.",
  },
  {
    title: "Add Warmth",
    content:
      "Adding 'জি' (ji) after names or responses shows extra warmth and respect, especially in Kolkata and Dhaka.",
  },
  {
    title: "Festive Greetings",
    content:
      "During Durga Puja, greet people with 'শুভ দুর্গোৎসব' (Shubho Durgotsob) to share celebration vibes.",
  },
];

export default function Page() {
  return (
    <main>
      <section>
        <div className="badge">Bengali Language</div>
        <h1>Learn to Communicate in Bangla</h1>
        <p style={{ fontSize: "1.1rem", maxWidth: "60ch", color: "#334155" }}>
          Bengali (Bangla) is spoken by over 250 million people around the world. This
          mini toolkit gives you essential phrases, pronunciation guidance, and
          cultural context so you can start conversing with confidence.
        </p>
      </section>

      <section>
        <div className="badge">Starter Phrases</div>
        <h2>Everyday Expressions</h2>
        <div className="card">
          <table className="table">
            <thead>
              <tr>
                <th>Bengali</th>
                <th>Transliteration</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              {corePhrases.map((phrase) => (
                <tr key={phrase.bengali}>
                  <td>{phrase.bengali}</td>
                  <td>{phrase.transliteration}</td>
                  <td>{phrase.english}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className="badge">Pronunciation</div>
        <h2>Sound Map</h2>
        <div className="grid two">
          {pronunciationTips.map((tip) => (
            <div key={tip.label} className="card" style={{ display: "grid", gap: "0.75rem" }}>
              <div className="pronunciation">
                <span>{tip.label}</span>
                <span style={{ color: "#0ea5e9" }}>phonetic key</span>
              </div>
              <p style={{ margin: 0, color: "#475569" }}>{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="badge">Culture</div>
        <h2>Context for Connection</h2>
        <div className="grid three">
          {culturalInsights.map((item) => (
            <div key={item.title} className="card" style={{ display: "grid", gap: "0.75rem" }}>
              <h3>{item.title}</h3>
              <p style={{ margin: 0, color: "#475569" }}>{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      <BengaliQuiz />

      <section>
        <div className="badge">Practice Tip</div>
        <blockquote>
          Listen actively to Bengali media and repeat phrases aloud. Focus on rhythm
          and intonation—the musical quality of Bangla is as important as the words.
        </blockquote>
      </section>
    </main>
  );
}
