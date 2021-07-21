import {useParams} from "react-router";
import {useTest} from "../../../../dataHooks/useTests";
import {useEffect, useMemo} from "react";
import {stringToNumber} from "../../../../utils/stringToNumber";
import {useProjectsContext} from "../../../../context/projects";

export const useConnect = () => {
	const {id} = useParams();
	const {
		changeCurrentProject,
		currentProjectId
	} = useProjectsContext();
	const testId = useMemo(() => stringToNumber(id), [id]);
	const {
		data: test,
		isLoading
	} = useTest(testId);

	useEffect(() => {
		if(test && test.projectId !== currentProjectId) {
			changeCurrentProject(test.projectId);
		}
	}, [test, changeCurrentProject, currentProjectId]);

	return {
		test,
		id: testId,
		isLoading
	}
};
