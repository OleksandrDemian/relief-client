import React from "react";
import Button from "../../Button";

const CopyTextButton = ({children, inputToCopy, ...props}) => {
	const onClick = () => {
		const cur = inputToCopy.current;
		const disabled = cur.disabled;
		cur.disabled = false;
		cur.select();
		cur.setSelectionRange(0, 999);
		document.execCommand("copy");
		cur.disabled = disabled;
	};

	return (
		<Button {...props} onClick={onClick}>
			{children}
		</Button>
	);
};

export default CopyTextButton;
