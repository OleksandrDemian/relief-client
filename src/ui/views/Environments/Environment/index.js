import React from "react";
import {EnvironmentEditView, EnvironmentView} from "./views";
import {useConnect} from "./connect";

const Environment = ({ environment }) => {
	const {
		isLoading,
		isEdit,
		setIsEdit,
		save,
		remove
	} = useConnect({
		envId: environment._id,
		projectId: environment.projectId,
	});

	const onSave = async (newEnvironment) => {
		await save({
			...environment,
			...newEnvironment,
		});
	};

	return (
		<>
			{!isEdit && (
				<EnvironmentView
					{...environment}
					onEdit={() => setIsEdit(true)}
				/>
			)}
			{isEdit && (
				<EnvironmentEditView
					{...environment}
					onClose={() => setIsEdit(false)}
					onSave={onSave}
					onRemove={remove}
					disabled={isLoading}
				/>
			)}
		</>
	);
};

export default Environment;
