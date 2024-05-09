export function SocialLink({ 
  frameworkName,
  href
}: {
    frameworkName: string;
    href: string;
  }
) {
  return (
    <a 
      href={href} 
      className="underline cursor-pointer"
      target="_blank"
      rel="noreferrer noopener"
    >
      {frameworkName}
    </a>
  );
}