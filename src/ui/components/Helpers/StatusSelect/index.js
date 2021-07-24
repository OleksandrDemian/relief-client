import React from "react";
import {bindValue} from "../../../utils/bindValue";
import Select from "../../Select";
import {StatusArray} from "../../../../enum/status";

const StatusSelect = ({onChange, ...props}) => {
	const options = [...StatusArray.map(s => ({value: s.id, label: s.label}))];
	if (props.options) {
		options.push(...props.options);
	}

	return (
		<Select
			{...props}
			onChange={bindValue(onChange)}
			options={options}
		/>
	);
};

export default StatusSelect;
