import {useTests} from "../../../../../dataHooks/useTests";

export const useConnect = ({projectId, status}) => {
	const {
		data: tests,
		isLoading
	} = useTests(projectId, status === "all" ? null : status);

	return {
		tests,
		isLoading
	}
};
