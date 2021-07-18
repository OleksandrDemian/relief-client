import React from "react";
import {Button as MButton} from "@material-ui/core";

const Button = ({size="small", variant="contained", color="primary", ...props}) => {
	return (
		<MButton
			size={size}
			variant={variant}
			color={color}
			{...props}
		/>
	);
};

export default Button;
