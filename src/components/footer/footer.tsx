import { SociasLinks } from './social-links';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer 
      className="text-center text-sm mb-4 mt-20
      px-4 text-black dark:text-gray-200"
    >
      <p className="mb-2 tracking-wider">
        Caleb Villanueva Zamalloa - {currentYear}
      </p>
      <SociasLinks />
    </footer>
  );
}