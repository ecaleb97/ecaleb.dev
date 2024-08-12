import Github from "@/components/icons/github";
import Linkedin from "@/components/icons/linkedin";
import { Mail } from "@/components/icons/mail";
import { ShineBorder } from "@/components/pill/pill";

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
