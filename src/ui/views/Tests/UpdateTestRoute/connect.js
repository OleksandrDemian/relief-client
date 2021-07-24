import {useParams} from "react-router";
import {usePutTest, useTest} from "../../../../dataHooks/useTests";
import {stringToNumber} from "../../../../utils/stringToNumber";
import {useMemo} from "react";

export const useConnect = () => {
	const {id} = useParams();
	const testId = useMemo(() => stringToNumber(id), [id]);
	const {
		isLoading,
		data: test
	} = useTest(testId);

	const {
		mutate: updateTest,
		isLoading: isSaving,
		isSuccess
	} = usePutTest();

	return {
		isLoading,
		test,
		id: testId,
		updateTest,
		isSaving,
		isSuccess
	}
};
