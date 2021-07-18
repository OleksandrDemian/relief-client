import React from "react";
import ProjectPreview from "./ProjectPreview";
import {useProjectsContext} from "../../../../context/projects";

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
			{!isLoading && projects && projects.map(project => (
				<ProjectPreview
					key={project.id}
					id={project.id}
					name={project.name}
					description={project.description}
				/>
			))}
		</>
	);
}

export default Projects;
