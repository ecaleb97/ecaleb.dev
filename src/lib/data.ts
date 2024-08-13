import Github from "@/components/icons/github";
import Linkedin from "@/components/icons/linkedin";
import { Nextjs } from "@/components/icons/next";
import { TailwindCSS } from "@/components/icons/tailwind";
import { TypeScript } from "@/components/icons/typescript";
import { GithubResultApi } from "@/types/types";
import {
	BookHeart,
	BookUser,
	CircleUser,
	Code,
	Laptop,
	Notebook,
} from "lucide-react";
import React from "react";

export const project1 = [
	{
		icon: React.createElement(Nextjs),
		framework: "Next.js",
		link: "https://nextjs.org/",
	},
	{
		icon: React.createElement(TailwindCSS),
		framework: "Tailwind",
		link: "https://tailwindcss.com/",
	},
	{
		icon: React.createElement(TypeScript),
		framework: "TypeScript",
		link: "https://www.typescriptlang.org/",
	},
];

export const project2 = [
	{
		icon: React.createElement(Nextjs),
		framework: "Next.js",
		link: "https://nextjs.org/",
	},
	{
		icon: React.createElement(TailwindCSS),
		framework: "Tailwind",
		link: "https://tailwindcss.com/",
	},
	{
		icon: React.createElement(TypeScript),
		framework: "TypeScript",
		link: "https://www.typescriptlang.org/",
	},
];

export const projectsData: Array<GithubResultApi> = [
	{
		name: "Recetas AI",
		description: "Recetas AI is a recipe recommendation using AI.",
		html_url: "https://github.com/ecaleb97/hackathon-midu-vercel",
		homepage: "https://recetas.ecaleb.dev",
		topics: ["typescript", "nextjs", "tailwindcss", "shadcn/ui"],
	},
	{
		name: "AI Chatbot",
		description:
			"🤖 An AI chatbot using Next.js, TypeScript, Tailwind CSS and shadcn/ui.",
		html_url: "https://github.com/ecaleb97/ai-project",
		homepage: "https://github.com/ecaleb97/ai-project",
		topics: ["typescript", "nextjs", "tailwindcss", "shadcn/ui"],
	},
	{
		name: "Miro Clone",
		description:
			"🎨 A Miro clone using Next.js, TypeScript, Tailwind CSS and shadcn/ui.",
		html_url: "https://github.com/ecaleb97/miro-clone",
		homepage: "https://github.com/ecaleb97/miro-clone",
		topics: ["typescript", "nextjs", "tailwindcss", "shadcn/ui"],
	},
	{
		name: "ecommerce dashboard",
		description:
			"🛒 A ecommerce dashboard using Next.js, TypeScript, Tailwind CSS and shadcn/ui.",
		html_url: "https://github.com/ecaleb97/ecommerce-dashboard",
		homepage: "https://github.com/ecaleb97/ecommerce-dashboard",
		topics: ["typescript", "nextjs", "tailwindcss", "shadcn/ui"],
	},
	{
		name: "Auth Template",
		description:
			"🔐 A simple authentication template using Next.js, TypeScript, Tailwind CSS and Authjs.",
		html_url: "https://github.com/ecaleb97/auth-template",
		homepage: "https://ecaleb.dev",
		topics: ["typescript", "nextjs", "tailwindcss", "authjs", "shadcn/ui"],
	},
	{
		name: "ecaleb.dev",
		description:
			"🚀 My personal website / blog / portfolio built using Next.js, TypeScript, Tailwind CSS, shadcn/ui and Github API.",
		html_url: "https://github.com/ecaleb97/ecaleb.dev",
		homepage: "https://ecaleb.dev",
		topics: ["react", "typescript", "nextjs", "tailwindcss", "shadcn/ui"],
	},
	{
		name: "get_next_line",
		description: "📚 A program that reads a file line by line.",
		html_url: "https://github.com/ecaleb97/get_next_line",
		homepage: "https://github.com/ecaleb97/get_next_line",
		topics: ["c", "42school", "get_next_line"],
	},
	{
		name: "hack4good",
		description: "👨‍💻 Hack4good Telefonica 2024 (winners)",
		html_url: "https://github.com/ecaleb97/hack4good",
		homepage: "https://hack4good-xi.vercel.app/",
		topics: [
			"typescript",
			"42school",
			"nextjs",
			"tailwindcss",
			"hack4good",
			"prisma-orm",
			"authjs",
			"shadcn/ui",
		],
	},
	{
		name: "libft",
		description: "📚 My very first own library in C.",
		html_url: "https://github.com/ecaleb97/libft",
		homepage: "https://github.com/ecaleb97/libft",
		topics: ["c", "42school", "makefile", "libft"],
	},
	{
		name: "cv",
		description: "📙 My professional (minimalist) CV page.",
		html_url: "https://github.com/ecaleb97/cv",
		homepage: "https://cv.ecaleb.dev",
		topics: ["typescript", "nextjs", "shadcn/ui", "tailwindcss"],
	},
];

export const experienceData = [
	{
		title: "Fullstack Developer",
		company: "Freelance",
		date: "2023 - Present",
		description:
			"I work as a fullstack developer on various projects. I'm responsible for developing and maintaining web applications, creating APIs, and implementing new features.",
		companyUrl: "/",
	},
	{
		title: "Mobile Device Managament",
		company: "Indra Sistemas (Minsait)",
		date: "2022 - 2023",
		description:
			"I worked as a Mobile Device Management Specialist at Indra Sistemas. I was responsible for managing mobile devices, creating and deploying applications, and providing technical support to end users.",
		companyUrl: "https://www.indracompany.com/",
	},
	{
		title: "Frontend Developer | Apple Technician",
		company: "K-tuin Sistemas Informáticos",
		date: "2020 - 2022",
		description:
			"I was responsible for providing technical support to end users, troubleshooting hardware and software issues, and repairing Apple devices. I also worked as a frontend developer, creating and maintaining web applications.",
		companyUrl: "https://www.k-tuin.com/",
	},
	{
		title: "Private Math Tutor",
		company: "Freelance",
		date: "2017 - Present",
		description:
			"I work as a private math tutor, helping students improve their math skills and prepare for exams. I create personalized lesson plans based on each student's needs and provide ongoing support and feedback.",
		companyUrl: "/",
	},
];

export const links = [
	{
		name: "Home",
		hash: "/",
	},
	{
		name: "Projects",
		hash: "/projects",
	},
	{
		name: "About",
		hash: "/about",
	},
	{
		name: "Blog",
		hash: "/blog",
	},
];

export const commandLinks = [
	{
		name: "Projects",
		icon: Code,
		hash: "/projects",
	},
	{
		name: "Experience",
		icon: Notebook,
		hash: "/#experience",
	},
	{
		name: "About",
		icon: CircleUser,
		hash: "/about",
	},
	{
		name: "Contact",
		icon: Laptop,
		hash: "/#contact",
	},
	{
		name: "Blog",
		icon: BookHeart,
		hash: "/blog",
	},
];

export const suggestions = [
	{
		name: "Github",
		icon: Github,
		hash: "https://github.com/ecaleb97",
	},
	{
		name: "LinkedIn",
		icon: Linkedin,
		hash: "https://www.linkedin.com/in/caleb-villanueva-zamalloa/",
	},
	{
		name: "Resume",
		icon: BookUser,
		hash: "https://cv.ecaleb.dev/",
	},
	{
		name: "Blog",
		icon: BookHeart,
		hash: "/blog",
	},
];
