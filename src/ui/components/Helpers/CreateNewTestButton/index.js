import React from "react";
import {Link} from "react-router-dom";
import Button from "../../Button";

const CreateNewTestButton = () => {
	return (
		<Button component={Link} to={`/test/new`}>
			Create new test
		</Button>
	);
}

export default CreateNewTestButton;
