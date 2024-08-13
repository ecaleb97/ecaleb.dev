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

export function ProjectItem({
	title,
	description,
	imageUrl,
	tags,
	href,
}: ProjectProps) {
	return (
		<div
			className="w-full rounded-lg border border-[#dbe5e5] dark:border-[#2e2e2e]
    hover:scale-105 transition cursor-pointer"
		>
			<Image
				src={imageUrl}
				alt={title}
				width={400}
				height={300}
				priority
				className="rounded-t-lg object-cover w-full"
			/>
			<div
				className="w-full px-4 py-6 rounded-b-lg flex flex-col gap-3
        dark:text-[#fafafa]"
			>
				<div className="space-y-3">
					<h3
						className="text-base font-thin tracking-[0.05rem] flex items-center gap-2
            hover:underline cursor-pointer transition hover:underline-offset-4 hover:decoration-dotted"
					>
						<Link
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2"
						>
							{title}
							<ArrowUpRight className="text-gray-500" size={14} />
						</Link>
					</h3>
					{/* <div className="max-w-full prose dark:prose-invert text-pretty">
						<p className="text-sm text-neutral-500 dark:text-neutral-400">
							{description}
						</p>
					</div> */}
					<Markdown className="prose max-w-full text-pretty text-sm dark:prose-invert">
						{description}
					</Markdown>
				</div>
			</div>
			<footer className="px-4 pb-4 text-pretty mt-auto flex flex-col">
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
			</footer>
		</div>
	);
}

export function ProjectItem2({
	title,
	description,
	imageUrl,
	tags,
	href,
}: ProjectProps) {
	return (
		<Card className="flex flex-col overflow-hidden hover:shadow-md transition-all duration-300 ease-out h-full bg-transparent">
			<Image
				src={imageUrl}
				alt={title}
				width={400}
				height={300}
				className="rounded-t-lg object-cover w-full"
			/>
			<CardHeader>
				<div className="space-y-2">
					<CardTitle
						className="text-lg font-light tracking-[0.05rem] sm:min-h-[56px]
            hover:underline cursor-pointer transition hover:underline-offset-4 hover:decoration-dotted"
					>
						<Link
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2"
						>
							{title}
							<ArrowUpRight className="text-gray-500" size={14} />
						</Link>
					</CardTitle>
					<Markdown className="prose max-w-full text-pretty text-gray-500 dark:text-white text-sm dark:prose-invert sm:min-h-[40px]">
						{description}
					</Markdown>
				</div>
			</CardHeader>
			<CardFooter>
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
