import {useDeleteEnvironment, usePutEnvironment} from "../../../../dao/hooks/useEnvironments";
import {useState} from "react";

export const useConnect = ({envId, projectId}) => {
	const {
		mutate: updateEnvironment,
		isLoading,
	} = usePutEnvironment();
	const {
		mutate: deleteEnvironment
	} = useDeleteEnvironment();
	const [isEdit, setIsEdit] = useState(false);

	const save = async (env) => {
		await updateEnvironment({
			projectId,
			envId,
			environment: env
		});
		setIsEdit(false);
	};

	const remove = async () => {
		await deleteEnvironment({
			projectId,
			envId,
		});
	};

	return {
		save,
		isLoading,
		isEdit,
		setIsEdit,
		remove
	}
}
