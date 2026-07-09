import Groq from "groq-sdk";
import { SYSTEM_PROMPT } from "./resumeAnalyserPrompt";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const resumeAnalyser = async (text) => {
  try {
    const messages = [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
      {
        role: "user",
        content: text,
      },
    ];

    const callAi = async (model) => {
      return await Promise.race([
        groq.chat.completions.create({
          messages,
          model,
        }),
        new Promise((_, reject) => {
          setTimeout(() => reject(new Error("Timeout")), 20000);
        }),
      ]);
    };

    try {
      const res = await callAi("llama-3.3-70b-versatile");
      return res?.choices[0]?.message?.content || "";
    } catch (err) {
      console.log("Primary Model failed, switching...");

      try {
        const res = await callAi("llama-3.1-8b-instant");
        return res?.choices[0]?.message?.content || "";
      } catch (err) {
        console.log("Fallback also failed", err.message);
        return "Server is busy, please try again later";
      }
    }
  } catch (err) {
    console.error(err.message);
    return "Server is busy";
  }
};
