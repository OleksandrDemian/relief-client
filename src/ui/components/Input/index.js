import React, {useState} from "react";
import PropTypes from "prop-types";
import {InputContainer, StyledInput, StyledLabel, StyledLabelContainer, StyledTextArea} from "./styled";

const labelToId = (val) => val.toLowerCase().replace(" ", "-") + "-" + Math.round(Math.random() * 1000);

const Input = ({ label, onInput, value, type = "text", maxLength = 50, ...props }) => {
	const [id] = useState(() => labelToId(label));
	if(type === "multiline") {
		return (
			<InputContainer>
				<StyledLabelContainer>
					<StyledLabel htmlFor={id}>{label}</StyledLabel>
					<StyledLabel htmlFor={id}>{value?.length || 0}/{maxLength}</StyledLabel>
				</StyledLabelContainer>
				<StyledTextArea
					maxLength={maxLength}
					label={label}
					id={id}
					onChange={onInput}
					value={value}
					{...props}
				/>
			</InputContainer>

		);
	}

	return (
		<InputContainer>
			<StyledLabelContainer>
				<StyledLabel htmlFor={id}>{label}</StyledLabel>
				<StyledLabel htmlFor={id}>{value?.length || 0}/{maxLength}</StyledLabel>
			</StyledLabelContainer>
			<StyledInput
				maxLength={maxLength}
				label={label}
				id={id}
				onChange={onInput}
				value={value}
				{...props}
			/>
		</InputContainer>
	);
};

Input.propTypes = {
	value: PropTypes.string,
	label: PropTypes.string,
	onInput: PropTypes.func,
	maxLength: PropTypes.number,
	type: PropTypes.oneOf(["text", "multiline"])
};

export default Input;
