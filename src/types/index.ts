export interface NavigationItem {
  title: string;
  href: string;
  description?: string;
  subItems?: NavigationItem[];
}

export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  editorialOverview: string;
  detailedDescription: string;
  image: string;
  imageAlt: string;
  scopes: string[];
  industryRelevance: string[];
  keyDeliverables?: string[];
  caseContext?: string;
}

export interface NewsArticle {
  id: string;
  date: string;
  isoDate: string;
  title: string;
  category: string;
  summary: string;
  content: string[];
  highlights?: string[];
  partner?: string;
  slug: string;
}

export interface InstitutionalPillar {
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  serviceInterest?: string;
  message: string;
}
