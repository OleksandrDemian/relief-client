import React from "react";
import SectionContainer from "../../../components/SectionContainer";
import {Heading} from "../../../components/Heading";
import FilteredTests from "./FilteredTests";
import CreateNewTestButton from "../../../components/Helpers/CreateNewTestButton";
import {useProjectsContext} from "../../../../context/projects";
import Button from "../../../components/Button";
import {ButtonsRow} from "../../../components/Button/styled";
import Status from "../../../../enum/status";

const ProjectOverview = ({id}) => {
	const {
		currentProject,
		currentProjectId
	} = useProjectsContext();
	return (
		<SectionContainer>
			<Heading>
				{currentProject?.name}
			</Heading>
			<ButtonsRow>
				<CreateNewTestButton />
				<Button href={`/project/${id}/tests`}>
					Show all test-cases
				</Button>
			</ButtonsRow>
			<FilteredTests
				currentProjectId={currentProjectId}
				status={Status.PENDING.id}
			/>
		</SectionContainer>
	);
};

export default ProjectOverview;
