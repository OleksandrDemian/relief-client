import React from "react";
import {Select as MSelect} from "@material-ui/core";

const Select = ({options, value, ...props}) => {
	return (
		<MSelect
			{...props}
			value={value || ''}
		>
			{options && options.map(o => (
				<option value={o.value}>{o.label}</option>
			))}
		</MSelect>
	);
}

export default Select;
