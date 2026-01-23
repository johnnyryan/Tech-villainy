
export interface Misdeed {
  id: string;
  ceoName: string;
  company: string;
  title: string;
  description: string;
  excerpt?: string; 
  date: string;
  tags: TagType[];
  villainScore: number; 
  sourceUrl?: string;
  mediaCount: number; 
  isEUDecision?: boolean;
}

export interface CEOStats {
  name: string;
  company: string;
  totalVillainy: number;
  averageScore: number;
  incidentCount: number;
  avatar: string;
  summary?: string;
}

export enum TagType {
  ChildSafety = "endangering children",
  IPTheft = "intellectual property theft",
  Labor = "harming workers",
  Spying = "spying",
  Hubris = "unchecked hubris",
  Predictions = "daft predictions",
  Cheating = "cheating",
  Democracy = "killing democracy",
  Chicanery = "general chicanery",
  LyingInvestors = "lying to investors",
  LyingGov = "lying to government",
  Journalism = "killing journalism",
  Carbon = "carbon hubris",
  Personal = "personal luxury & bunkers"
}
