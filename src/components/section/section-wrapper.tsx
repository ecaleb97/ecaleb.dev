import { SectionWrapperProps } from "@/types/types";

export function SectionWrapper({
	children,
	className,
	id,
}: SectionWrapperProps) {
	return (
		<section
			className={`w-full max-w-[42rem] text-left
      scroll-mt-28 ${className} flex flex-col gap-6`}
			id={id}
		>
			{children}
		</section>
	);
}
