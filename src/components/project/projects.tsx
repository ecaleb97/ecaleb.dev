import { SectionHeading } from '@/components/heading/section-heading';
import { ProjectList } from '@/components/project/project-list';
import { SectionWrapper } from '@/components/section/section-wrapper';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function Projects() {
  const t = useTranslations('projects');
  return (
    <SectionWrapper
      id="projects"
      className="mb-20"
    >
      <div className='flex items-center gap-2 justify-between'>
        <SectionHeading>
          {t('title')}
        </SectionHeading>
        <Link 
          href='/projects' 
          className='flex items-center gap-2 hover:scale-105 hover:text-gray-400'
        >
          {t('link')}
          <ArrowRight size={16} />
        </Link>
      </div>
      <ProjectList />
    </SectionWrapper>
  );
} 