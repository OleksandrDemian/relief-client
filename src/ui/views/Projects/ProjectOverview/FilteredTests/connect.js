import {useTests} from "../../../../../dao/hooks/useTests";

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
