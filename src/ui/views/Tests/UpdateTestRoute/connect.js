import {useParams} from "react-router";
import {usePatchTest, useTest} from "../../../../dao/hooks/useTests";

export const useConnect = () => {
	const {id} = useParams();
	const {
		isLoading,
		data: test
	} = useTest(id);

	const {
		mutate: updateTest,
		isLoading: isSaving,
		isSuccess
	} = usePatchTest();

	return {
		isLoading,
		test,
		id,
		updateTest,
		isSaving,
		isSuccess
	}
};
