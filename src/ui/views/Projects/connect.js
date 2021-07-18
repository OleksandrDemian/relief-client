import {useProjectsContext} from "../../../context/projects";
import {useParams} from "react-router";
import {useEffect, useMemo} from "react";
import {stringToNumber} from "../../../utils/stringToNumber";

export const useConnect = () => {
	const {id} = useParams();
	const numId = useMemo(() => stringToNumber(id), [id]);
	const {
		currentProjectId,
		changeCurrentProject
	} = useProjectsContext();

	useEffect(() => {
		if(numId !== currentProjectId) {
			changeCurrentProject(numId);
		}
	}, [numId, currentProjectId, changeCurrentProject]);

	return {
		id: numId
	}
} ;
