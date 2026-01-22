
import { GoogleGenAI, Type } from "@google/genai";
import { Misdeed, TagType } from "./types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const auditCEO = async (ceoName: string): Promise<Misdeed[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Perform a rigorous regulatory and historical audit of the CEO: ${ceoName} covering the period 2000-2026. 
      
      Your goal is to find substantiated enforcement decisions, settlements, and investigation updates from reputable bodies (EU Commission, EDPB, FTC, high courts, etc.).
      
      TONE: Humorous but strictly bureaucratic. Use phrases like "non-compliant", "regulatory friction", "administrative oversight".
      TITLES: Plain, descriptive, and accurate descriptions of the harm caused. No humor in the title itself.
      EXCERPT: Include a direct excerpt from a primary source.
      
      SCORING LOGIC:
      - 1-100 scale.
      - Prioritize harm to competition, privacy violations, and ethical failures.
      
      CRITICAL: Every entry MUST have a verified 'sourceUrl' pointing to official regulatory or high-reputation news pages.
      Return the output as a JSON array of objects.`,
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              excerpt: { type: Type.STRING },
              date: { type: Type.STRING },
              villainScore: { type: Type.NUMBER },
              mediaCount: { type: Type.NUMBER },
              tags: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING } 
              },
              sourceUrl: { type: Type.STRING }
            },
            required: ["title", "description", "excerpt", "date", "villainScore", "mediaCount", "tags", "sourceUrl"]
          }
        }
      }
    });

    const results = JSON.parse(response.text || "[]");
    return results.map((r: any, index: number) => ({
      ...r,
      id: `audit-${Date.now()}-${index}`,
      ceoName,
      company: "The Tech Sector"
    }));
  } catch (error) {
    console.error("Audit failed:", error);
    return [];
  }
};
