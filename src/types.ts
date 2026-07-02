export interface SyllabusModule {
  id: string;
  number: string;
  title: string;
  description: string;
  articles?: string;
  topics: string[];
  features: {
    videoaulas: boolean;
    pdfs: boolean;
    resumos: boolean;
    bizus: boolean;
    questoes: boolean;
  };
}

export interface QuizQuestion {
  id: number;
  module: string;
  statement: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Testimony {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface BonusItem {
  id: number;
  title: string;
  value: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
