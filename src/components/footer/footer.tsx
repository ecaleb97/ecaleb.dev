export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer 
      className="text-center text-sm mb-4 mt-20
      px-4 text-black dark:text-gray-200"
    >
      <p className="mb-2 tracking-wider">
        {currentYear}. Caleb Villanueva Zamalloa.
      </p>
      <p className="tracking-wider">
        Made with ❤️ with {' '}
        <a 
          href="https://nextjs.org"
          className="underline"
          target="_blank"
        >
          Next.js
        </a>
        {', '}
        <a 
          href="https://ui.shadcn.com/"
          className="underline"
          target="_blank"
        >
          shadcn/ui
        </a>
        {' '}  and {' '}
        <a 
          href="https://tailwindcss.com/"
          className="underline"
          target="_blank"
        >
          Tailwind CSS
        </a>
      </p>
    </footer>
  );
}