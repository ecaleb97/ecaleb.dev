export function SociasLinks() {
  const socialLinks = [
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
    },
    {
      name: 'shadcn/ui',
      href: 'https://ui.shadcn.com/',
    },
    {
      name: 'Tailwind CSS',
      href: 'https://tailwindcss.com/',
    },
  ];

  return (
    <p>
      Made with ❤️ with {' '}
      {socialLinks.map((link) => (
        <>
          <a 
            key={link.href} 
            href={link.href} 
            className="underline cursor-pointer" 
            target="_blank"
          >
            {link.name}
          </a>
          {', '}
        </>
      ))}
    </p>
  );
}