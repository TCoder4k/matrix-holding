export interface BusinessSector {
  id: string;
  name: string;
  englishName: string;
  tagline: string;
  description: string;
  image: string;
  metrics: {
    label: string;
    value: string;
  }[];
  subsidiaries: {
    name: string;
    role: string;
    highlight: string;
  }[];
  keyProjects: string[];
  esgHighlight: string;
}

export interface FinancialMetric {
  year: string;
  revenue: number; // in Billion VND
  ebitda: number;
  netProfit: number;
  assets: number;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  summary: string;
  content: string;
  image?: string;
}

export interface OfficeLocation {
  city: string;
  country: string;
  type: string;
  address: string;
  phone: string;
  email: string;
}
