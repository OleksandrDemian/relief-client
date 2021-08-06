import {useEnvironments} from "../../../../dao/hooks/useEnvironments";
import {usePatchStatus, useTest} from "../../../../dao/hooks/useTests";
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
		// todo: refactor this (also backend)
		for (const environment of environments) {
			s.push({
				name: environment.name,
				envId: environment._id,
				status: test.environments.find(env => env.envId === environment._id)?.status || "pending"
			});
		}

		return s;
	}, [test, environments]);

	const {
		mutate,
		isLoading: isSavingStatus
	} = usePatchStatus();

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
