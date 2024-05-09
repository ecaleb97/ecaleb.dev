import { StaticImageData } from 'next/image';

export interface HeaderProps {
  home: string;
  projects: string;
  experience: string;
  about: string;
  contact: string;
}
export interface ChildrenProps {
  children: React.ReactNode;
}

export interface PillProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export interface ProjectProps {
  title: string;
  description: string;
  tags: Array<Record<ProjectTag>>;
  imageUrl: StaticImageData | string;
}

export interface ProjectTag {
  icon: React.ReactNode;
  framework: string;
  link?: string;
}

export interface ContactProps {
  title: string;
  description: string;
  labelEmail: string;
  labelMessage: string;
  labelSubmit: string;
}

export interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

interface Variant {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
}