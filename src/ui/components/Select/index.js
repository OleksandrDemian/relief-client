import React from "react";
import {StyledSelect, StyledSelectContainer} from "./styled";
import {StyledLabel} from "../Input/styled";

const Select = ({options, value, onChange, label, ...props}) => {
	return (
		<StyledSelectContainer>
			<StyledLabel>{label}</StyledLabel>
			<StyledSelect
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
			</StyledSelect>
		</StyledSelectContainer>
	);
}

export default Select;
