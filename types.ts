
export interface Misdeed {
  id: string;
  ceoName: string;
  company: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  villainScore: number; // 0 to 100
  sourceUrl?: string;
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
  Ego = "Unchecked Hubris"
}
