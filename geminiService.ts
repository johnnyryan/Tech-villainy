
import { GoogleGenAI, Type } from "@google/genai";
import { Misdeed, TagType } from "./types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const auditCEO = async (ceoName: string): Promise<Misdeed[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Perform a rigorous regulatory audit of the CEO: ${ceoName}. 
      
      Look for:
      1. Personal unscrupulous behavior (e.g., doomsday bunkers, survivalist prepping, avoiding civic duties).
      2. Corporate malfeasance (GDPR breaches, anti-trust violations, worker exploitation).
      3. Dangerous political activities (funding anti-human rights groups, boosting extremism/far-right, abandoning ethical values for political leverage).
      4. Anti-European lobbying (trying to dismantle EU safety/privacy laws).
      
      CRITICAL: Every entry MUST have a verified 'sourceUrl' pointing to a reputable news organization or official document.
      ASSIGN a 'villainScore' from 0-100 based on the threat to European social cohesion and rule of law.`,
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
              date: { type: Type.STRING },
              villainScore: { type: Type.NUMBER },
              tags: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING } 
              },
              sourceUrl: { type: Type.STRING }
            },
            required: ["title", "description", "date", "villainScore", "tags", "sourceUrl"]
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
