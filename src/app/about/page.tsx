import { About } from "@/components/about/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
	description: "Learn more about me and my journey as a developer.",
};

export default function AboutPage() {
	return (
		<main className="flex justify-center items-center px-5">
			<About />
		</main>
	);
}
