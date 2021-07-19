import React from "react";
import CreateTestForm from "./CreateTestForm";
import {Heading} from "../../../components/Heading";
import {useConnect} from "./connect";
import ProjectSelect from "../../../components/Helpers/ProjectSelect";
import SectionContainer from "../../../components/SectionContainer";

const CreateTest = () => {
	const {
		onTestSubmit,
		isSaving,
		projectId,
		setProjectId
	} = useConnect();

	return (
		<SectionContainer>
			<Heading>Create test case</Heading>
			<ProjectSelect
				value={projectId}
				onChange={(id) => setProjectId(id)}
			/>
			<CreateTestForm onTestSubmit={onTestSubmit} disabled={isSaving} />
		</SectionContainer>
	);
}

export default CreateTest;
