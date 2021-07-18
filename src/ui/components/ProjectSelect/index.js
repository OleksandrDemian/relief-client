import React from "react";
import {bindValue} from "../../utils/bindValue";
import {useProjectsContext} from "../../../context/projects";

const ProjectSelect = ({value, onChange}) => {
	const {projects} = useProjectsContext();

	return (
		<select value={value} onChange={bindValue(onChange)}>
			<option value={null}>None</option>
			{projects && projects.map(project => (
				<option value={project.id}>{project.name}</option>
			))}
		</select>
	);
};

export default ProjectSelect;
