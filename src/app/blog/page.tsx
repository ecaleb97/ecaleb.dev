import { Path } from "@/components/breadcrumb/path";
import { SectionHeading } from "@/components/heading/section-heading";
import { SectionWrapper } from "@/components/section/section-wrapper";

export default function BlogPage() {
	return (
		<main className="flex flex-col items-center px-5">
			<SectionWrapper className="my-28">
				<Path name="Blog" />
				<SectionHeading>Blog</SectionHeading>
			</SectionWrapper>
		</main>
	);
}
