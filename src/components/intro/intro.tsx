import { SocialPills } from "@/components/social/social-pills";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { AvatarIntro } from "./avatar-intro";
import { AnimatedGradientText } from "./gradient-text";

export function Intro() {
	return (
		<section
			id="home"
			className="w-full max-w-[50rem] flex flex-col gap-5 mt-28
      sm:mt-26"
		>
			<div className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center">
				<div className="flex flex-col gap-4">
					<h1
						className={`inline text-2xl sm:text-3xl font-bold
            animate-gradient bg-gradient-to-r 
            from-[#ffaa40] 
            via-[#9c40ff] 
            to-[#ffaa40] 
            bg-[length:var(--bg-size)_100%] 
            bg-clip-text 
            text-transparent`}
					>
						Hey, I&apos;m Caleb
					</h1>
					{/* <AnimatedGradientText>
            🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{' '}
            <span
              className={cn(
                'inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent',
              )}
            >
              Fullstack Developer
            </span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText> */}
					<p
						className="text-sm leading-[30px] pb-3 text-pretty
            text-gray-500 dark:text-white"
					>
						I&apos;m a <strong>fullstack developer</strong> and{" "}
						<strong>private math tutor</strong> with a passion for creating
						amazing user experiences. I love building amazing things and helping
						people.
					</p>
					<SocialPills />
				</div>
				<AvatarIntro />
			</div>
		</section>
	);
}
