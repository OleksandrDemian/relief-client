import {useMutation, useQuery, useQueryClient} from "react-query";
import {client} from "../../client";

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

export const usePutEnvironment = () => {
	const queryClient = useQueryClient();
	return useMutation(
		async ({projectId, envId, environment}) => {
			const {data} = await client.put(`/projects/${projectId}/environment/${envId}`, environment);
			return data;
		},
		{
			onSuccess: async (a, input) => {
				queryClient.invalidateQueries(["environments", input.projectId]);
			}
		}
	);
};

export const useDeleteEnvironment = () => {
	const queryClient = useQueryClient();
	return useMutation(
		async ({projectId, envId}) => {
			const {data} = await client.delete(`/projects/${projectId}/environment/${envId}`);
			return data;
		},
		{
			onSuccess: async (a, input) => {
				queryClient.invalidateQueries(["environments", input.projectId]);
			}
		}
	);
};
