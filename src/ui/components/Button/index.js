import React from "react";
import {StyledButtonLink, StyledButton} from "./styled";

const Button = ({size="small", variant="contained", color="primary", href, ...props}) => {
	if(href) {
		return (
			<StyledButtonLink
				{...props}
				to={href}
				size={size}
				variant={variant}
				color={color}
			/>
		)
	}

	return (
		<StyledButton
			size={size}
			variant={variant}
			color={color}
			{...props}
		/>
	);
};

export default Button;
