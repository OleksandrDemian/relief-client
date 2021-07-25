import {useProjectsContext} from "../../../context/projects";
import {useParams} from "react-router";
import {useEffect} from "react";

export const useConnect = () => {
	const {id} = useParams();
	const {
		currentProjectId,
		changeCurrentProject
	} = useProjectsContext();

	useEffect(() => {
		if(id !== currentProjectId) {
			changeCurrentProject(id);
		}
	}, [id, currentProjectId, changeCurrentProject]);

	return {
		id
	}
} ;
