import React from "react";
import Button from "../../Button";
import {ReactComponent as AddIcon} from "../../../assets/ionicons/add-outline.svg";

const CreateNewTestButton = () => {
	return (
		<Button href={`/test/new`}>
			<AddIcon />
			Create new test
		</Button>
	);
}

export default CreateNewTestButton;
