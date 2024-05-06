import { StaticImageData } from 'next/image';

export interface PillProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export interface ProjectProps {
  title: string;
  description: string;
  imageUrl: StaticImageData;
  imageUrlDark: StaticImageData;
  tags: string[];
}