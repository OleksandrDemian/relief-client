import {usePostTest} from "../../../../dataHooks/useTests";
import {useEffect} from "react";
import {useHistory} from "react-router";
import {useProjectsContext} from "../../../../context/projects";
import {useEnvironments} from "../../../../dataHooks/useEnvironments";
import Status from "../../../../enum/status";

export const useConnect = () => {
	const {currentProjectId} = useProjectsContext();
	const {
		data: environments,
		isLoading
	} = useEnvironments(currentProjectId);
	const {
		mutateAsync: saveTest,
		isLoading: isSaving,
		isSuccess,
		data
	} = usePostTest();
	const history = useHistory();

	const onTestSubmit = async (test) => {
		const newTest = Object.assign({}, test, {
			environments: environments.map(e => ({ envId: e.id, status: Status.PENDING.id }))
		});
		await saveTest(newTest);
	};

	useEffect(() => {
		if (data && data.id) {
			history.replace(`/test/${data.id}`);
		}
	}, [data, history]);

	return {
		isLoading,
		environments,
		onTestSubmit,
		isSuccess,
		isSaving,
		currentProjectId,
	}
};
