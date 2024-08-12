"use client";

import { useEffect } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<main className="min-h-screen w-full flex flex-col gap-y-6 items-center justify-center p-4">
			<h2 className="text-2xl text-center">
				Oh no, something went wrong... maybe refresh?
			</h2>
			<button className="text-lg" onClick={() => reset()}>
				Try again
			</button>
		</main>
	);
}
