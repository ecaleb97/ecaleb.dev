import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Caleb Zamalloa",
		short_name: "Caleb Zamalloa",
		description:
			"Developer with experience in multiple technologies and frameworks.",
		start_url: "/",
		display: "standalone",
		theme_color: "#000000",
		background_color: "#ffffff",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
			},
		],
	};
}
