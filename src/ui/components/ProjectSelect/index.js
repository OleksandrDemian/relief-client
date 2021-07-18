import React, {useMemo} from "react";
import {bindValue} from "../../utils/bindValue";
import {useProjectsContext} from "../../../context/projects";
import Select from "../Select";

const ProjectSelect = ({value, onChange}) => {
	const {projects} = useProjectsContext();
	const options = useMemo(() => {
		const options = [{value: null, label: "None"}];
		if (projects) {
			options.push(...projects.map(p => ({value: p.id, label: p.name})));
		}
		return options;
	}, [projects]);
	return (
		<Select
			native
			value={value}
			onChange={bindValue(onChange)}
			options={options}
		/>
	);
};

export default ProjectSelect;
