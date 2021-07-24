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

export const useTests = (projectId, status = null) => useQuery(
	["tests", {
		projectId,
		status
	}],
	async () => {
		const {data} = await client.get(`/projects/${projectId}/tests${status ? `?status=${status}` : ""}`);
		return data;
	},
	{
		enabled: projectId != null,
		staleTime: TESTS_STALE_TIME
	}
);

export const usePostTest = () => {
	const queryClient = useQueryClient();
	return useMutation(
		async (test) => {
			const {data} = await client.post("/tests", test);
			return data;
		},
		{
			onSuccess: (data, input) => {
				queryClient.invalidateQueries(["tests", {
					projectId: input.projectId
				}]);
			}
		}
	);
}

export const usePutTest = () => {
	const queryClient = useQueryClient();
	return useMutation(
		async (test) => {
			const {data} = await client.put("/tests", test);
			return data;
		},
		{
			onSuccess: async (data, input) => {
				queryClient.invalidateQueries(["tests", {
					projectId: input.projectId
				}]);
				queryClient.invalidateQueries(["test", input.id]);
			}
		}
	);
};

export const usePutStatus = () => {
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
			onSuccess: async (res, input) => {
				console.log(input)
				queryClient.invalidateQueries(["test", input.testId]);
				queryClient.invalidateQueries(["tests"]);
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
				queryClient.invalidateQueries(["tests", {
					projectId
				}]);
			}
		}
	);
};
