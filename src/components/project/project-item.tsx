import { ProjectTag, type ProjectProps } from "@/types/types";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Github from "@/components/icons/github";

export function ProjectItem({
	title,
	description,
	imageUrl,
	tags,
	href,
	repoUrl,
}: ProjectProps) {
	return (
		<Card className="flex flex-col overflow-hidden hover:shadow-md transition-all duration-300 ease-out h-full bg-transparent">
			{/* <Image
				src={imageUrl}
				alt={title}
				width={400}
				height={300}
				className="rounded-t-lg object-cover w-full"
			/> */}
			<CardHeader className="px-4 py-4">
				<div className="flex items-center justify-between">
					<CardTitle
						className="text-lg font-light tracking-[0.05rem] hover:underline 
						cursor-pointer transition hover:underline-offset-4 hover:decoration-dotted py-0"
					>
						<Link
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-base font-semibold"
						>
							{title}
							<ArrowUpRight className="text-gray-500" size={14} />
						</Link>
					</CardTitle>
					<Link href={repoUrl ? repoUrl : href} target="_blank">
						<Github className="size-4" />
					</Link>
				</div>
			</CardHeader>
			<CardContent className="px-4 py-0">
				<Markdown className="prose max-w-full text-pretty text-gray-500 dark:text-white text-sm dark:prose-invert sm:min-h-[40px] font-light">
					{description}
				</Markdown>
			</CardContent>
			<CardFooter className="p-4 py-4">
				<ul className="flex flex-wrap gap-2">
					{tags.map((tag: ProjectTag) => (
						<li key={tag.framework}>
							<span
								className="bg-customDark/10 dark:bg-[#fafafa]/10
                rounded-lg px-2 py-1 text-xs"
							>
								{tag.framework}
							</span>
						</li>
					))}
				</ul>
			</CardFooter>
		</Card>
	);
}
