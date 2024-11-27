"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { type Variant } from "@/types/types";

export function ThemeSwitcher({ variant }: Variant) {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant={variant}
					size="icon"
					className="dark:border-gray-300 text-black bg-transparent dark:text-white border-none hover:bg-transparent"
				>
					<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="dark:bg-customDark border border-gray-300">
				<DropdownMenuItem onClick={() => setTheme("light")}>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export function ThemeSwitcherButton() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = React.useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<Button
			variant="ghost"
			size="icon"
			className="p-2 group opacity-80 transition-opacity duration-150 hover:opacity-100 dark:hover:bg-neutral-800"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			{theme === "dark" ? (
				<Sun className="size-5 duration-500 group-hover:rotate-12" />
			) : (
				<Moon className="size-5 duration-500 group-hover:rotate-12" />
			)}
			<span className="sr-only">Toggle Theme</span>
		</Button>
	);
}
