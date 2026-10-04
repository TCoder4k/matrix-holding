export interface JobItem {
  id: string;
  num: string;
  title: string;
  company: string;
  companyKey: string;
  location: string;
  type: string;
  category: string;
  salary: string;
  date: string;
  highlightText?: string;
  logoCode: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export interface CareerFilterState {
  keyword: string;
  category: string;
  company: string;
  location: string;
  workType: string;
  sortBy: 'newest' | 'salary';
}
