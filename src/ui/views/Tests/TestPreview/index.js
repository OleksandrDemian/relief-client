import React from "react";
import {Heading} from "../../../components/Heading";
import {TestPreviewContainer} from "./styled";
import {Link} from "react-router-dom";

const TestPreview = ({id, name, shortDescription}) => {
	return (
		<TestPreviewContainer>
			<Heading>{name}</Heading>
			<p>{shortDescription}</p>
			<Link to={`/test/${id}`}>
				<button>
					Open
				</button>
			</Link>
			<Link to={`/test/${id}/update`}>
				<button>Update</button>
			</Link>
		</TestPreviewContainer>
	);
};

export default TestPreview;
