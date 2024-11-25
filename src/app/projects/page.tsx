import { Path } from "@/components/breadcrumb/path";
import { SectionHeading } from "@/components/heading/section-heading";
import { SectionWrapper } from "@/components/section/section-wrapper";
import type { Metadata } from "next";
import { projectsData } from "@/lib/data";
import { GithubResultApi } from "@/types/types";
import { ArrowUpRight, Star as StarIcon } from "lucide-react";
import Github from "@/components/icons/github";

export const metadata: Metadata = {
	title: "Projects",
	description: "View my projects and contributions to open-source.",
};

export default function ProjectsPage() {
	return (
		<main className="flex flex-col items-center px-5">
			<SectionWrapper className="my-28">
				<Path name="Projects" />
				<SectionHeading>Projects</SectionHeading>
				<Projects />
			</SectionWrapper>
		</main>
	);
}

function Projects() {
	return (
		<ul className="flex flex-col space-y-3">
			{projectsData.map((repo: GithubResultApi) => (
				<li
					key={repo.html_url}
					className="flex flex-col space-y-2 rounded-md border 
          border-neutral-300 p-3 dark:border-neutral-800"
				>
					<div className="flex w-full items-center justify-between">
						<a
							href={repo.homepage}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center space-x-2 font-medium duration-100 hover:opacity-80
              hover:underline hover:underline-offset-4 hover:decoration-dotted"
						>
							<span>{repo.name}</span>
							<ArrowUpRight
								size={12}
								strokeWidth={1.5}
								className="opacity-70 duration-200 group-hover:translate-x-[1.3px] group-hover:opacity-100"
							/>
						</a>
						<span className="group flex cursor-default items-center space-x-2 text-neutral-600 dark:text-neutral-400 rounded-md duration-100 hover:opacity-80">
							<a
								href={repo.html_url}
								target="_blank"
								rel="noreferrer noopener"
								className="text-sm flex items-center gap-2"
							>
								Source Code
								<Github className="size-4" />
								<ArrowUpRight
									size={12}
									strokeWidth={1.5}
									className="opacity-70 duration-200 group-hover:translate-x-[1.3px] group-hover:opacity-100"
								/>
							</a>
						</span>
					</div>
					<p className="text-sm text-neutral-500 dark:text-neutral-400">
						{repo.description}
					</p>
					<div className="flex items-center space-x-2 overflow-y-auto">
						{repo.topics.map((topic) => (
							<span
								key={topic}
								className="bg-customDark/10 dark:bg-[#fafafa]/10 
                rounded-lg px-2 py-1 hover:scale-105 transition 
                text-xs cursor-pointer"
							>
								{topic}
							</span>
						))}
					</div>
				</li>
			))}
		</ul>
	);
}
