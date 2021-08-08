import {usePatchStatus} from "../../../../dao/hooks/useTests";

export const useConnect = ({testId}) => {
	const {
		mutate,
		isLoading: isSavingStatus
	} = usePatchStatus(testId);

	const onUpdateTestStatus = () => {
		return (val) => {
			mutate({
				userId: null,
				status: val
			});
		};
	};

	return {
		onUpdateTestStatus,
		isSavingStatus
	}
};
