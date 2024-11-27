import Github from "@/components/icons/github";
import Linkedin from "@/components/icons/linkedin";
import { Mail } from "@/components/icons/mail";
import { ShineBorder } from "@/components/pill/pill";
import { Button } from "../ui/button";
import Link from "next/link";

const socialLinks = [
	{
		name: "Linkedin",
		url: "https://www.linkedin.com/in/caleb-villanueva-zamalloa/",
		icon: Linkedin,
	},
	{
		name: "Github",
		url: "https://www.github.com/ecaleb97",
		icon: Github,
	},
];

export function SocialPills() {
	return (
		<div className="flex flex-wrap gap-5 text-sm">
			<ShineBorder
				target="_blank"
				className=""
				href="https://www.linkedin.com/in/caleb-villanueva-zamalloa/"
				color={["#0D66C2"]}
			>
				<Linkedin />
				<span>Linkedin</span>
			</ShineBorder>
			<ShineBorder
				target="_blank"
				className=""
				href="https://github.com/ecaleb97"
				color={["#6b7280"]}
			>
				<Github />
				<span>Github</span>
			</ShineBorder>
			<ShineBorder className="" href="/#contact" color={["#6b7280"]}>
				<Mail className="size-7" />
				<span>ecaleb.vz@gmail.com</span>
			</ShineBorder>
		</div>
	);
}

export function Social() {
	return (
		<div className="flex flex-wrap items-center">
			{socialLinks.map((link) => (
				<Button key={link.url} asChild variant="ghost" className="px-2 hover:bg-slate-200 dark:hover:bg-neutral-800 ">
					<Link target="_blank" href={link.url}>
						{<link.icon className="size-4" />}
					</Link>
				</Button>
			))}
		</div>
	);
}
