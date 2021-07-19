import React, {useMemo} from "react";
import {bindValue} from "../../../utils/bindValue";
import {useProjectsContext} from "../../../../context/projects";
import Select from "../../Select";

const ProjectSelect = ({value, onChange}) => {
	const {projects} = useProjectsContext();
	const options = useMemo(() =>
		[...projects.map(p => ({value: p.id, label: p.name}))],
		[projects]);
	return (
		<Select
			value={value == null ? "" : value}
			onChange={bindValue(onChange)}
			label={"Select project"}
			options={options}
		/>
	);
};

export default ProjectSelect;
