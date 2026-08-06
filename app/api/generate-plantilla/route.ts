import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { SYSTEM_PROMPT, buildUserPrompt, DiagnosticoAnswers } from "../../lib/promptMaestro";

const REQUIRED_FIELDS: (keyof DiagnosticoAnswers)[] = [
  "q1",
  "q2",
  "q3",
  "q4",
  "q6",
  "q7",
  "q8",
  "q9",
  "q10",
  "q11",
  "q12",
  "q13",
  "q14",
  "q15",
];

export async function POST(req: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error("OPENAI_API_KEY is not set");
    return NextResponse.json({ error: "Generador no configurado" }, { status: 500 });
  }

  let body: { lead?: { name?: string; contact?: string }; answers?: Partial<DiagnosticoAnswers> };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Body inválido" }, { status: 400 });
  }

  const lead = body.lead;
  if (!lead?.name?.trim() || !lead?.contact?.trim()) {
    return NextResponse.json({ error: "Falta nombre o contacto" }, { status: 400 });
  }

  const answers = body.answers;
  if (!answers || !Array.isArray(answers.q5) || answers.q5.filter((v) => v?.trim()).length < 1) {
    return NextResponse.json({ error: "Falta completar las conversaciones frecuentes (Q5)" }, { status: 400 });
  }
  for (const field of REQUIRED_FIELDS) {
    if (!answers[field] || !String(answers[field]).trim()) {
      return NextResponse.json({ error: `Falta completar el campo ${field}` }, { status: 400 });
    }
  }

  const client = new OpenAI({ apiKey });

  try {
    const completion = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o",
      temperature: 0.4,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: buildUserPrompt(answers as DiagnosticoAnswers) },
      ],
    });

    const template = completion.choices[0]?.message?.content;
    if (!template) {
      return NextResponse.json({ error: "No se pudo generar la plantilla" }, { status: 500 });
    }

    return NextResponse.json({ template });
  } catch (err) {
    console.error("generate-plantilla error:", err);
    return NextResponse.json({ error: "No se pudo generar la plantilla" }, { status: 500 });
  }
}
