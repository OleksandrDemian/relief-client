import React from "react";
import CreateTestForm from "./CreateTestForm";
import {Heading} from "../../../components/Heading";
import {useConnect} from "./connect";
import SectionContainer from "../../../components/SectionContainer";
import {stringToNumber} from "../../../../utils/stringToNumber";

const CreateTest = () => {
	const {
		onTestSubmit,
		isSaving,
		currentProjectId,
		isLoading
	} = useConnect();

	return (
		<>
			{isLoading && (
				<p>Preparing</p>
			)}
			{!isLoading && (
				<SectionContainer>
					<Heading>Create test case</Heading>
					<CreateTestForm
						onTestSubmit={onTestSubmit}
						disabled={isSaving}
						showProjectSelect
						placeHolder={{
							projectId: stringToNumber(currentProjectId)
						}}
					/>
				</SectionContainer>
			)}
		</>
	);
}

export default CreateTest;
