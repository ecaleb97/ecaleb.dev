import { About } from "@/components/about/about";
import { BentoGrid } from "@/components/bento/bento-grid";
import { Contact } from "@/components/contact/contact";
import { Experience } from "@/components/experience/experience";
import { SectionHeading } from "@/components/heading/section-heading";
import { Intro } from "@/components/intro/intro";
import { Projects } from "@/components/project/projects";
import { SectionWrapper } from "@/components/section/section-wrapper";
import hack4good from "@/static/images/hack4good.webp";
import { ProjectItem, ProjectItem2 } from "@/components/project/project-item";
import recetasai from "@/static/images/recetasai.webp";
import { project1, project2 } from "@/lib/data";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col items-center px-5">
			<div className="max-w-[42rem]">
				<Intro />
				{/* <BentoGrid /> */}
				<FeaturedProjects />
				<Experience />
				{/* <About /> */}
				<Contact />
			</div>
		</main>
	);
}

function FeaturedProjects() {
	return (
		<SectionWrapper className="my-16">
			<div className="flex items-center justify-between text-sm font-light">
				<SectionHeading>Projects</SectionHeading>
				<Link
					href="/projects"
					className="hover:underline hover:underline-offset-4 hover:decoration-dotted"
				>
					View more
				</Link>
			</div>
			<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
				{data.map((project) => (
					<ProjectItem2
						key={project.title}
						title={project.title}
						description={project.description}
						tags={project.tags}
						imageUrl={project.imageUrl}
						href={project.href}
					/>
				))}
			</div>
		</SectionWrapper>
	);
}

const data = [
	{
		title: "Recetas AI",
		description: "A recipe search engine using AI.",
		tags: project1,
		imageUrl: recetasai,
		href: "https://recetas.ecaleb.dev",
	},
	{
		title: "Hack4Good Telefonica 2024 (Winners). 🚧",
		description: "Promoting tourism in Spain through a web application.",
		tags: project2,
		imageUrl: hack4good,
		href: "https://hack4good-xi.vercel.app/",
	},
];
