import {useQuery} from "react-query";
import {client} from "../client";

const PROJECTS_STALE_TIME = 1000 * 60 * 5;

export const useProjects = () => useQuery(
	["projects"],
	async () => {
		const {data} = await client.get(`/projects`);
		return data;
	},
	{
		staleTime: PROJECTS_STALE_TIME
	}
);
