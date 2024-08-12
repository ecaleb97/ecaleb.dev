import { ProjectTag, type ProjectProps } from "@/types/types";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
            hover:underline cursor-pointer transition"
					>
						<Link href={href} target="_blank" rel="noopener noreferrer">
							{title}
							{/* <ArrowUpRight className='text-gray-500' size={14} /> */}
						</Link>
					</h3>
					<div className="max-w-full prose dark:prose-invert text-pretty">
						<p className="text-sm text-neutral-500 dark:text-neutral-400">
							{description}
						</p>
					</div>
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
