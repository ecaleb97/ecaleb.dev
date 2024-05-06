export function SectionHeading ({ children }: { children: React.ReactNode }) {
  return (
    <h2 
      className="text-3xl font-medium capitalize
      flex items-center gap-2 tracking-wider"
    >
      {children}
    </h2>
  );
}