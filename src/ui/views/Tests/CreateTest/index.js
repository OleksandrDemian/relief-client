import React from "react";
import CreateTestForm from "./CreateTestForm";
import {Heading} from "../../../components/Heading";
import {useConnect} from "./connect";
import ProjectSelect from "../../../components/ProjectSelect";

const CreateTest = () => {
	const {
		onTestSubmit,
		isSaving,
		projectId,
		setProjectId
	} = useConnect();

	return (
		<>
			<Heading>Create test case</Heading>
			<ProjectSelect
				value={projectId}
				onChange={(id) => setProjectId(id)}
			/>
			<CreateTestForm onTestSubmit={onTestSubmit} disabled={isSaving} />
		</>
	);
}

export default CreateTest;
