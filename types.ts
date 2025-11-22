export interface Experience {
  company: string;
  role: string;
  period: string;
  details: string[];
}

export interface Project {
  title: string;
  description: string;
  tech?: string;
  link?: string;
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
  grade: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
}

export interface Social {
  label: string;
  value: string;
  href?: string;
  icon: string;
}