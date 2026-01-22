
export interface Misdeed {
  id: string;
  ceoName: string;
  company: string;
  title: string;
  description: string;
  excerpt?: string; // Primary source excerpt (court transcript, etc.)
  date: string;
  tags: string[];
  villainScore: number; // 1 to 100
  sourceUrl?: string;
  mediaCount: number; // Used internally for sorting logic
}

export interface CEOStats {
  name: string;
  company: string;
  totalVillainy: number;
  averageScore: number;
  incidentCount: number;
  avatar: string;
}

export enum TagType {
  Privacy = "Privacy Violation",
  Monopoly = "Anti-Trust",
  Tax = "Tax Evasion",
  Ethics = "Ethical Malpractice",
  Labor = "Worker Exploitation",
  Ego = "Unchecked Hubris",
  ChildSafety = "Child Safety / CSAM",
  MinorPsych = "Minor Psychological Harm",
  Extremism = "Boosting Extremism",
  Media = "Harm to Journalism",
  Environment = "Carbon Hubris",
  Surveillance = "Dystopian Surveillance",
  Regulatory = "Regulatory Action",
  Legal = "Legal Case",
  MarketDistortion = "Market Distortion"
}
