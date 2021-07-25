import {useParams} from "react-router";
import {usePutTest, useTest} from "../../../../dataHooks/useTests";

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
	} = usePutTest();

	return {
		isLoading,
		test,
		id,
		updateTest,
		isSaving,
		isSuccess
	}
};
