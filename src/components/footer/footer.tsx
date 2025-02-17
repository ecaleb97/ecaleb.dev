import { SocialLink } from "@/components/footer/social-links";

export function Footer() {
	const currentYear = new Date().getFullYear();
	console.log(currentYear);
	return (
		<footer
			className="text-center text-xs pb-4
      px-4 text-black dark:text-gray-200"
		>
			<p className="mb-2 tracking-wider">
			Caleb Villanueva Zamalloa - {currentYear} 
			</p>
			<p>
				Made with ❤️ with{" "}
				<SocialLink href="https://nextjs.org/?uwu" frameworkName="Next.js" />
				{", "}
				<SocialLink href="https://ui.shadcn.com/" frameworkName="shadcn/ui" />
				{" and "}
				<SocialLink
					href="https://tailwindcss.com/"
					frameworkName="Tailwind CSS"
				/>
				{"."}
			</p>
		</footer>
	);
}
