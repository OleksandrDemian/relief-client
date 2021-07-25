import React from "react";
import ProjectPreview from "./ProjectPreview";
import {useProjectsContext} from "../../../../context/projects";
import {CardsColumn} from "../../../components/Card/styled";

const Projects = () => {
	const {
		isLoading,
		projects
	} = useProjectsContext();

	return (
		<>
			{isLoading && (
				<p>Loading projects</p>
			)}
			<CardsColumn>
				{!isLoading && projects && projects.map(project => (
					<ProjectPreview
						key={project._id}
						id={project._id}
						name={project.name}
						description={project.description}
					/>
				))}
			</CardsColumn>
		</>
	);
}

export default Projects;
