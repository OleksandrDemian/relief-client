import {useMutation, useQuery, useQueryClient} from "react-query";
import {client} from "../client";

const ENV_STALE_TIME = 1000 * 60 * 5;

export const useEnvironments = (projectId) => useQuery(
	["environments", projectId],
	async () => {
		const {data} = await client.get(`/projects/${projectId}/environments`);
		return data;
	},
	{
		enabled: projectId != null,
		staleTime: ENV_STALE_TIME
	}
);

export const usePostEnvironment = (projectId) => {
	const queryClient = useQueryClient();
	return useMutation(
		async (environment) => {
			const {data} = await client.post(`/projects/${projectId}/environment`, environment);
			return data;
		},
		{
			onSuccess: async () => {
				queryClient.invalidateQueries(["environments", projectId]);
			}
		}
	);
};
