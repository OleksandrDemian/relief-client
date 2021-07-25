import {useParams} from "react-router";
import {useProjectsContext} from "../../../../context/projects";

export const useConnect = () => {
	const {id} = useParams();
	const {
		currentProject,
		isLoading,
	} = useProjectsContext();

	return {
		id,
		currentProject,
		isLoading,
	}
};
