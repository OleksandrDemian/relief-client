import React, {useState} from "react";
import PropTypes from "prop-types";
import {TextField} from "@material-ui/core";

const labelToId = (val) => val.toLowerCase().replace(" ", "-") + "-" + Math.round(Math.random() * 1000);

const Input = ({ label, onInput, value, type = "text", maxLength = 50, ...props }) => {
	const [id] = useState(() => labelToId(label));
	return (
		<TextField
			maxLength={maxLength}
			multiline={type === "multiline"}
			placeholder="Jot something"
			id={id}
			onChange={onInput}
			value={value}
			{...props}
		/>
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
