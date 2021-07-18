import {useHistory} from "react-router";
import {useDeleteTest} from "../../../../dataHooks/useTests";

export const useConnect = (projectId, testId) => {
	const {
		isLoading: isDeleting,
		mutate: deleteTest
	} = useDeleteTest(projectId);

	const history = useHistory();

	const onDeleteTest = () => {
		deleteTest(testId);
		history.replace(`/project/${projectId}/tests`);
	};

	return {
		isDeleting,
		deleteTest,
		onDeleteTest
	}
};
