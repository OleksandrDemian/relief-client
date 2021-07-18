import {usePostTest} from "../../../../dataHooks/useTests";
import {useEffect, useState} from "react";
import {useHistory} from "react-router";
import {useProjectsContext} from "../../../../context/projects";

export const useConnect = () => {
	const {currentProjectId} = useProjectsContext();
	const [projectId, setProjectId] = useState(currentProjectId);

	const {
		mutate: saveTest,
		isLoading: isSaving,
		isSuccess,
		data
	} = usePostTest(projectId);
	const history = useHistory();

	const onTestSubmit = (test) => {
		const newTest = Object.assign({}, test, {
			projectId: Number(projectId)// should be number!
		});
		saveTest(newTest);
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
		projectId,
		setProjectId
	}
};
