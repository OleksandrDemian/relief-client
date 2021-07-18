import {useEnvironments} from "../../../../dataHooks/useEnvironments";
import {usePutStatus, useTest} from "../../../../dataHooks/useTests";
import {useMemo} from "react";

export const useConnect = ({projectId, testId}) => {
	const {
		isLoading: isLoadingEnvironments,
		data: environments
	} = useEnvironments(projectId);
	const {
		isLoading: isLoadingTest,
		data: test
	} = useTest(testId);

	const statuses = useMemo(() => {
		if(!test || !environments) return null;
		const s = [];
		for (const environment of environments) {
			s.push({
				name: environment.name,
				envId: environment.id,
				status: test.environments?.[environment.id]?.status || "pending"
			});
		}

		return s;
	}, [test, environments]);

	const {
		mutate,
		isLoading: isSavingStatus
	} = usePutStatus(testId);

	const onUpdateTestStatus = (envId) => {
		return (val) => {
			mutate({
				testId,
				envId,
				status: val
			});
		};
	};

	return {
		isLoading: isLoadingEnvironments || isLoadingTest,
		environments,
		test,
		statuses,
		onUpdateTestStatus,
		isSavingStatus
	}
};