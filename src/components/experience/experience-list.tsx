import { ExperienceItem } from '@/components/experience/experience-item';

export function ExperienceList() {
  const data = [
    {
      title: 'Fullstack Developer',
      company: 'Freelance',
      date: '2023 - Present',
      description: 'I work as a fullstack developer on various projects. I\'m responsible for developing and maintaining web applications, creating APIs, and implementing new features.',
      companyUrl: '/'
    },
    {
      title: 'Mobile Device Managament',
      company: 'Indra Sistemas',
      date: '2022 - 2023',
      description: 'I worked as a Mobile Device Management Specialist at Indra Sistemas. I was responsible for managing mobile devices, creating and deploying applications, and providing technical support to end users.',
      companyUrl: 'https://www.indracompany.com/'
    },
    {
      title: 'Apple Technician',
      company: 'K-tuin Sistemas Informáticos',
      date: '2020 - 2022',
      description: 'I worked as an Apple Certified iOS and macOS Technician. I was responsible for providing technical support to end users, troubleshooting hardware and software issues, and repairing Apple devices.',
      companyUrl: 'https://www.k-tuin.com/'
    },
    {
      title: 'Private Math Tutor',
      company: 'Freelance',
      date: '2017 - Present',
      description: 'I work as a private math tutor, helping students improve their math skills and prepare for exams. I create personalized lesson plans based on each student\'s needs and provide ongoing support and feedback.',
      companyUrl: '/'
    }
  ];

  return (
    <ol
      className='relative space-y-6 border-s-2 border-neutral-400 
      dark:border-neutral-600'
    >
      {data.map((item) => (
        <ExperienceItem
          key={item.title}
          jobTitle={item.title}
          company={item.company}
          date={item.date}
          description={item.description}
          companyUrl={item.companyUrl}
        />
      ))}
    </ol>
  );
}