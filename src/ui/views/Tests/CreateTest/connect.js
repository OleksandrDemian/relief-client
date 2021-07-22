import {usePostTest} from "../../../../dataHooks/useTests";
import {useEffect} from "react";
import {useHistory} from "react-router";
import {useProjectsContext} from "../../../../context/projects";
import {useQueryClient} from "react-query";

export const useConnect = () => {
	const {currentProjectId} = useProjectsContext();
	const queryClient = useQueryClient();
	const {
		mutateAsync: saveTest,
		isLoading: isSaving,
		isSuccess,
		data
	} = usePostTest();
	const history = useHistory();

	const onTestSubmit = async (test) => {
		const newTest = Object.assign({}, test);
		console.log(newTest);
		await saveTest(newTest);

		queryClient.invalidateQueries(["tests", newTest?.projectId]);
	};

	useEffect(() => {
		if (data && data.id) {
			history.replace(`/test/${data.id}`);
		}
	}, [data, history]);

	return {
		onTestSubmit,
		isSuccess,
		isSaving,
		currentProjectId,
	}
};
