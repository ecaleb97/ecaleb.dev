import { About } from "@/components/about/about";
import { BentoGrid } from "@/components/bento/bento-grid";
import { Contact } from "@/components/contact/contact";
import { Experience } from "@/components/experience/experience";
import { Intro } from "@/components/intro/intro";
import { Projects } from "@/components/project/projects";

export default function Home() {
	return (
		<main className="flex flex-col items-center px-5">
			<div className="max-w-[42rem]">
				<Intro />
				{/* <BentoGrid /> */}
				<Experience />
				{/* <About /> */}
				<Contact />
			</div>
		</main>
	);
}
