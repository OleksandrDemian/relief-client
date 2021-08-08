import {usePostTest} from "../../../../dao/hooks/useTests";
import {useEffect} from "react";
import {useHistory} from "react-router";
import {useProjectsContext} from "../../../../context/projects";

export const useConnect = () => {
	const {currentProjectId} = useProjectsContext();
	const {
		mutateAsync: saveTest,
		isLoading: isSaving,
		isSuccess,
		data
	} = usePostTest();
	const history = useHistory();

	const onTestSubmit = async (test) => {
		await saveTest({...test});
	};

	useEffect(() => {
		if (data && data._id) {
			history.replace(`/test/${data._id}`);
		}
	}, [data, history]);

	return {
		onTestSubmit,
		isSuccess,
		isSaving,
		currentProjectId,
	}
};
