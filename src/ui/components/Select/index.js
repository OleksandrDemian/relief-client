import React from "react";

const Select = ({options, value, onChange, label, ...props}) => {
	return (
		<select
			{...props}
			onChange={onChange}
			value={value}
		>
			{value === "" && (
				<option value="">{label}</option>
			)}
			{options && options.map(o => (
				<option key={o.value} value={o.value}>{o.label}</option>
			))}
		</select>
	);
}

export default Select;
