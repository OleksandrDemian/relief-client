import React, {useState} from "react";
import {InputContainer, StyledInput, StyledLabel, StyledLabelContainer, StyledTextArea} from "./styled";
import PropTypes from "prop-types";

const labelToId = (val) => val.toLowerCase().replace(" ", "-") + "-" + Math.round(Math.random() * 1000);

const Input = ({ label, onInput, value, type = "input", maxLength = 50, ...props }) => {
	const [id] = useState(() => labelToId(label));
	return (
		<InputContainer disabled={props.disabled}>
			<StyledLabelContainer>
				<StyledLabel htmlFor={id}>{label}</StyledLabel>
				<StyledLabel htmlFor={id}>{value?.length || 0}/{maxLength}</StyledLabel>
			</StyledLabelContainer>
			{type !== "text" && (
				<StyledInput maxLength={maxLength} type={type} placeholder="Empty" id={id} onInput={onInput} value={value} {...props} />
			)}
			{type === "text" && (
				<StyledTextArea maxLength={maxLength} placeholder="Empty" id={id} onInput={onInput} value={value} {...props} />
			)}
		</InputContainer>
	);
};

Input.propTypes = {
	value: PropTypes.string,
	label: PropTypes.string,
	onInput: PropTypes.func,
	maxLength: PropTypes.number,
	type: PropTypes.oneOf(["input", "text"])
};

export default Input;
