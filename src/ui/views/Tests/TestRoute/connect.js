import {useParams} from "react-router";
import {useTest} from "../../../../dao/hooks/useTests";
import {useEffect} from "react";
import {useProjectsContext} from "../../../../context/projects";

export const useConnect = () => {
	const {id} = useParams();
	const {
		changeCurrentProject,
		currentProjectId
	} = useProjectsContext();
	const {
		data: test,
		isLoading
	} = useTest(id);

	useEffect(() => {
		if(test && test.projectId !== currentProjectId) {
			changeCurrentProject(test.projectId);
		}
	}, [test, changeCurrentProject, currentProjectId]);

	return {
		test,
		id,
		isLoading
	}
};
