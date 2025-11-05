"use client";

import { useMemo, useState } from "react";

type QuizItem = {
  prompt: string;
  answer: string;
  transliteration: string;
  hint: string;
};

const QUIZ_BANK: QuizItem[] = [
  {
    prompt: "Translate to English: \u09ae\u09cb\u09a8\u09c7\u09b0 \u09a8\u09be\u09ae \u0995\u09bf?",
    answer: "What is your name?",
    transliteration: "Moner naam ki?",
    hint: "Common conversational opener",
  },
  {
    prompt: "Translate to Bengali: Thank you",
    answer: "ধন্যবাদ",
    transliteration: "Dhôṇṇobad",
    hint: "Expressing gratitude",
  },
  {
    prompt: "Translate to English: \u0986\u09aa\u09a8\u09be\u09b0 \u0995\u09c7\u09ae\u09a8 \u0995\u09c7\u09ae\u09a8?",
    answer: "How are you?",
    transliteration: "Aponar kemon kemon?",
    hint: "Standard greeting",
  },
  {
    prompt: "Translate to Bengali: Good morning",
    answer: "শুভ সকাল",
    transliteration: "Shubho shokal",
    hint: "Morning greeting",
  },
  {
    prompt: "Translate to English: \u0986\u09ae\u09bf \u09ac\u09be\u0982\u09b2\u09be \u09ac\u09b2\u09c7\u09a4\u09c7 \u09aa\u09be\u09b0\u09bf",
    answer: "I can speak Bengali",
    transliteration: "Ami Bangla bolte pari",
    hint: "Self-introduction phrase",
  },
];

function selectRandom(items: QuizItem[]) {
  return items[Math.floor(Math.random() * items.length)];
}

export default function BengaliQuiz() {
  const [current, setCurrent] = useState<QuizItem>(() => selectRandom(QUIZ_BANK));
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const normalizedAnswer = useMemo(() => current.answer.trim().toLowerCase(), [current.answer]);

  const checkAnswer = () => {
    const normalizedInput = input.trim().toLowerCase();

    if (!normalizedInput) {
      setFeedback("Write your answer before checking.");
      return;
    }

    if (normalizedInput === normalizedAnswer) {
      setFeedback("✅ Correct! Great job.");
    } else {
      setFeedback(
        `❌ Not quite. Answer: ${current.answer} (${current.transliteration})`
      );
    }
  };

  const nextQuestion = () => {
    setCurrent((prev) => {
      let candidate = selectRandom(QUIZ_BANK);
      if (candidate.prompt === prev.prompt && QUIZ_BANK.length > 1) {
        candidate = selectRandom(QUIZ_BANK.filter((item) => item.prompt !== prev.prompt));
      }
      return candidate;
    });
    setInput("");
    setFeedback(null);
  };

  return (
    <section>
      <div className="badge">Practice</div>
      <h2>Bengali Quick Quiz</h2>
      <div className="card" style={{ display: "grid", gap: "1rem" }}>
        <p style={{ fontSize: "1.1rem", margin: 0 }}>{current.prompt}</p>
        <p style={{ color: "#475569", margin: 0 }}>Hint: {current.hint}</p>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Type your answer here"
          style={{
            padding: "0.75rem 1rem",
            borderRadius: "0.75rem",
            border: "1px solid rgba(15, 23, 42, 0.2)",
            fontSize: "1rem",
          }}
        />
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <button onClick={checkAnswer} className="button-primary">
            Check answer
          </button>
          <button
            onClick={nextQuestion}
            className="button-primary"
            style={{ background: "linear-gradient(135deg, #10b981, #0ea5e9)" }}
          >
            Next question
          </button>
        </div>
        {feedback && (
          <div
            className="card"
            style={{
              background: "rgba(14, 165, 233, 0.08)",
              border: "1px solid rgba(14, 165, 233, 0.35)",
              color: "#0f172a",
              fontWeight: 600,
            }}
          >
            {feedback}
          </div>
        )}
      </div>
    </section>
  );
}
