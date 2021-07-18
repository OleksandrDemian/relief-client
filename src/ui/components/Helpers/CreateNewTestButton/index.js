import React from "react";
import {Link} from "react-router-dom";

const CreateNewTestButton = () => {
	return (
		<Link to={`/test/new`}>
			<button>
				Create new test
			</button>
		</Link>
	);
}

export default CreateNewTestButton;
