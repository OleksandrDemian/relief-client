import React from "react";
import SectionContainer from "../../../components/SectionContainer";
import {Heading} from "../../../components/Heading";
import {Link} from "react-router-dom";
import PendingTests from "./PendingTests";
import CreateNewTestButton from "../../../components/Helpers/CreateNewTestButton";
import {useProjectsContext} from "../../../../context/projects";
import Button from "../../../components/Button";
import {ButtonsRow} from "../../../components/Button/styled";

const ProjectOverview = ({id}) => {
	const {
		currentProject
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
			<PendingTests />
		</SectionContainer>
	);
};

export default ProjectOverview;
