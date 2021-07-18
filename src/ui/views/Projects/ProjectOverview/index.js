import React from "react";
import SectionContainer from "../../../components/SectionContainer";
import {Heading} from "../../../components/Heading";
import {Link} from "react-router-dom";
import PendingTests from "./PendingTests";
import CreateNewTestButton from "../../../components/Helpers/CreateNewTestButton";
import {useProjectsContext} from "../../../../context/projects";

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
			<Link to={`/project/${id}/tests`}>
				<button>
					Show all test-cases
				</button>
			</Link>
			<PendingTests />
		</SectionContainer>
	);
};

export default ProjectOverview;
