"use client";

import { CommandMenu } from "@/components/command/command-menu";
import { ThemeSwitcher } from "@/components/switcher/theme-switcher";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { links } from "@/lib/data";
import emojiCaleb from "@/static/images/emoji-caleb.webp";
import { Equal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useCallback, useState } from "react";

export function Header() {
	const router = useRouter();
	const [open, setOpen] = useState(false);

	const runCommand = useCallback((command: () => unknown) => {
		setOpen(false);
		command();
	}, []);

	return (
		<header className="z-[999] relative w-screen flex justify-center md:pt-8">
			<div className="hidden fixed md:flex gap-4 items-center justify-evenly px-4">
				{/* <div
          className='fixed top-0 left-1/2 h-[4.5rem]
          -translate-x-1/2 w-full rounded-none border border-white
          border-opacity-40 bg-white bg-opacity-80 shadow-lg
          shadow-black/[0.03] sm:top-6 sm:h-[3.25rem] sm:w-[37rem]
          sm:rounded-full'
        /> */}
				<nav
					className="flex h-12
          py-2 md:py-0 bg-[#fafafa]/90
          dark:bg-customDark rounded-full px-4"
				>
					<ul
						className="flex w-[22rem] items-center justify-center
            gap-y-1 text-[0.9rem] font-medium
            sm:w-[initial] md:flex-nowrap md:gap-3"
					>
						{links.map((link) => (
							<li
								key={link.hash}
								className="h-3/4 flex items-center justify-center relative"
							>
								<Link
									href={link.hash}
									className="capitalize flex w-full justify-center items-center p-3
                  hover:scale-105 tracking-wider text-sm"
								>
									{link.name}
								</Link>
							</li>
						))}
						<li>
							<ThemeSwitcher variant="default" />
						</li>
					</ul>
				</nav>
				<CommandMenu />
			</div>
			<div
				className="bg-transparent fixed w-screen h-[3rem] flex
        items-center justify-between px-4 py-8 md:hidden"
			>
				<div
					className="size-9 border border-gray-500 
          dark:border-none rounded-full"
				>
					<Link href="/">
						<Image
							src={emojiCaleb}
							alt="Caleb's profile picture"
							className="rounded-full"
							width={36}
							height={36}
							priority
						/>
					</Link>
				</div>
				<div className="flex gap-2 items-center">
					<CommandMenu />
					<ThemeSwitcher variant="default" />
					<DropdownMenu>
						<DropdownMenuTrigger asChild className="border-none px-0 bg-none">
							<Button variant="default" className="text-black dark:text-white">
								<Equal />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							className="border border-gray-300 rounded-md 
              m-4 p-4 pr-[80px] dark:bg-customDark md:hidden"
						>
							<DropdownMenuGroup>
								{links.map((link) => (
									<Fragment key={link.hash}>
										<DropdownMenuItem
											key={link.hash}
											className="text-lg"
											onSelect={() =>
												runCommand(() => {
													router.push(link.hash);
												})
											}
										>
											<span className="text-sm text-gray-500 dark:text-white">
												{link.name}
											</span>
										</DropdownMenuItem>
									</Fragment>
								))}
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</header>
	);
}
