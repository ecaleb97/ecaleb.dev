export default async function sitemap() {
	let routes = ["", "/about", "/contact", "/experience", "/projects"].map(
		(route) => ({
			url: `https://ecaleb.dev${route}`,
			lastModified: new Date().toISOString().split("T")[0],
		}),
	);

	return [...routes];
}
