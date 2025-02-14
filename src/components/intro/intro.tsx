import { Social, SocialPills } from "@/components/social/social-pills";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { AvatarIntro } from "./avatar-intro";
import { AnimatedGradientText } from "./gradient-text";
import styles from "@/components/intro/intro.module.css";

export function Intro() {
	return (
		<section
			id="home"
			className="w-full max-w-[50rem] flex flex-col gap-5 mt-28
      sm:mt-26"
		>
			<div className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center">
				<div className="flex flex-col gap-4">
					<div className="flex gap-4 items-center">
						<h1
							className={`inline text-2xl sm:text-2xl font-bold
						${styles.textAnimate}
            animate-gradient dark:bg-gradient-to-r 
            from-[#fff08b] 
            via-[#00affa] 
            to-[#fff08b] 
            bg-[length:var(--bg-size)_100%] 
            bg-clip-text 
            text-transparent`}
						>
							Hey, I&apos;m Caleb
						</h1>
						<Social />
					</div>
					<p
						className="text-sm leading-[30px] text-pretty
            text-gray-500 dark:text-white"
					>
						I&apos;m a{" "}
						<strong>fullstack developer with +3 years of experience</strong>,{" "}
						<strong>private math tutor</strong> and{" "}
						<strong>semi-pro runner</strong> with a passion for creating amazing
						user experiences. I love building amazing things and helping people.
					</p>
					{/* <Social /> */}
				</div>
				<AvatarIntro />
			</div>
		</section>
	);
}
