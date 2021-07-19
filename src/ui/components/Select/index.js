import React from "react";
import {FormControl, Select as MSelect} from "@material-ui/core";

const Select = ({options, value, onChange, label, ...props}) => {
	return (
		<FormControl>
			<MSelect
				{...props}
				native
				onChange={onChange}
				value={value}
			>
				{value === "" && (
					<option value="">{label}</option>
				)}
				{options && options.map(o => (
					<option key={o.value} value={o.value}>{o.label}</option>
				))}
			</MSelect>
		</FormControl>
	);
}

export default Select;
