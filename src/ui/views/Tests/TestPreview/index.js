import React from "react";
import {Heading} from "../../../components/Heading";
import {TestPreviewContainer} from "./styled";
import {Link} from "react-router-dom";
import Button from "../../../components/Button";

const TestPreview = ({id, name, shortDescription}) => {
	return (
		<TestPreviewContainer>
			<Heading>{name}</Heading>
			<p>{shortDescription}</p>
			<Button href={`/test/${id}`}>
				Open
			</Button>
			<Button href={`/test/${id}/update`}>
				Update
			</Button>
		</TestPreviewContainer>
	);
};

export default TestPreview;
