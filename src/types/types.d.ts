import { StaticImageData } from "next/image";

export interface HeaderProps {
	home: string;
	projects: string;
	experience: string;
	about: string;
	contact: string;
}
export interface ChildrenProps {
	children: React.ReactNode;
}

export interface PillProps {
	href: string;
	children: React.ReactNode;
	className?: string;
	target?: string;
}

export interface ProjectProps {
	title: string;
	description: string;
	tags: Array<Record<ProjectTag>>;
	imageUrl?: StaticImageData | string;
	href: string;
	repoUrl?: string
}

export interface ProjectTag {
	icon: React.ReactNode;
	framework: string;
	link?: string;
}

export interface ContactProps {
	title: string;
	description: string;
	labelEmail: string;
	labelMessage: string;
	labelSubmit: string;
}

export interface SectionWrapperProps {
	children: React.ReactNode;
	className?: string;
	id?: string;
}

interface Variant {
	variant?:
		| "default"
		| "destructive"
		| "outline"
		| "secondary"
		| "ghost"
		| "link";
}

export interface GithubResultApi {
	name: string;
	html_url: string;
	description: string;
	homepage: string;
	topics: Array<string>;
}
