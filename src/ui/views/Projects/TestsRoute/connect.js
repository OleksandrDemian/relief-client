import {useTests} from "../../../../dataHooks/useTests";
import {useParams} from "react-router";
import {stringToNumber} from "../../../../utils/stringToNumber";

export const useConnect = () => {
	const {id: projectId} = useParams();
	const {
		data: tests,
		isLoading
	} = useTests(stringToNumber(projectId));

	return {
		tests,
		isLoading,
		projectId
	}
};
