export function SectionHeading({ children }: { children: React.ReactNode }) {
	return (
		<h1 className="text-3xl font-medium capitalize tracking-wider">
			{children}
		</h1>
	);
}
