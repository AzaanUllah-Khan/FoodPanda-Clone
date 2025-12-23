export interface NavItem {
  label: string;
  path: string;
}

export interface NewsItem {
  id: string;
  image: string;
  tag: string;
  title: string;
  date: string;
  country?: string;
}

export interface PartnerStep {
  id: number;
  icon: React.ReactNode;
  title?: string;
  description: string;
}

export interface FaqItem {
  question: string;
  link: string;
}
