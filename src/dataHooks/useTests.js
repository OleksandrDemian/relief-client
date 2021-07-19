import {useMutation, useQuery, useQueryClient} from "react-query";
import {client} from "../client";

const TESTS_STALE_TIME = 1000 * 60 * 5;

export const useTest = (id) => useQuery(
	["test", id],
	async () => {
		const {data} = await client.get(`/tests/${id}`);
		return data;
	},
	{
		enabled: id != null,
		staleTime: TESTS_STALE_TIME
	}
);

export const useTests = (projectId) => useQuery(
	["tests", projectId],
	async () => {
		const {data} = await client.get(`/projects/${projectId}/tests`);
		return data;
	},
	{
		enabled: projectId != null,
		staleTime: TESTS_STALE_TIME
	}
);

export const usePostTest = (projectId) => {
	const queryClient = useQueryClient();
	return useMutation(
		async (test) => {
			const {data} = await client.post("/tests", test);
			return data;
		},
		{
			onSuccess: async () => {
				queryClient.invalidateQueries(["tests", projectId]);
			}
		}
	);
};

export const usePutTest = (testId, projectId) => {
	const queryClient = useQueryClient();
	return useMutation(
		async (test) => {
			const {data} = await client.put("/tests", test);
			return data;
		},
		{
			onSuccess: async () => {
				queryClient.invalidateQueries(["tests", projectId]);
				queryClient.invalidateQueries(["test", testId]);
			}
		}
	);
};

export const usePutStatus = (testId) => {
	const queryClient = useQueryClient();
	return useMutation(
		/**
		 *
		 * @param status {testId, envId, status}
		 * @returns {Promise<any>}
		 */
		async (status) => {
			const {data} = await client.put("/tests/status", status);
			return data;
		},
		{
			onSuccess: async () => {
				queryClient.invalidateQueries(["test", testId]);
			}
		}
	);
};

export const useDeleteTest = (projectId) => {
	const queryClient = useQueryClient();
	return useMutation(
		async (id) => {
			const {data} = await client.delete(`tests/${id}`);
			return data;
		},
		{
			onSuccess: async () => {
				console.log("Invalidate project tests: " + projectId);
				queryClient.invalidateQueries(["tests", projectId]);
			}
		}
	);
};
