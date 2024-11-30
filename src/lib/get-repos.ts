import { GithubResultApi } from "@/types/types";
import "server-only";

export async function getRepos() {
	const githubUrl =
		"https://api.github.com/users/ecaleb97/repos?type=owner&sort=updated&per_page=15";

	const response = await fetch(githubUrl);
	const data = (await response.json()) as GithubResultApi[];
	console.log(response);
	if (!response.ok) throw new Error("Could not fetch Github Repos");

	const projects = data.map((repo: GithubResultApi) => ({
		name: repo.name,
		description: repo.description,
		topics: repo.topics,
		html_url: repo.html_url,
	}));

	return { repos: projects };
}
