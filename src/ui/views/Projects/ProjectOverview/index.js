import React from "react";
import SectionContainer from "../../../components/SectionContainer";
import {Heading} from "../../../components/Heading";
import {Link} from "react-router-dom";
import PendingTests from "./PendingTests";
import CreateNewTestButton from "../../../components/Helpers/CreateNewTestButton";
import {useProjectsContext} from "../../../../context/projects";
import Button from "../../../components/Button";

const ProjectOverview = ({id}) => {
	const {
		currentProject
	} = useProjectsContext();
	return (
		<SectionContainer>
			<Heading>
				{currentProject?.name}
			</Heading>
			<CreateNewTestButton />
			<Button component={Link} to={`/project/${id}/tests`}>
				Show all test-cases
			</Button>
			<PendingTests />
		</SectionContainer>
	);
};

export default ProjectOverview;
