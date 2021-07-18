import React from "react";
import ReactMarkdown from "react-markdown";
import {Heading} from "../../../components/Heading";
import {TestDetailsContainer} from "./styled";
import {Link} from "react-router-dom";
import {useConnect} from "./connect";
import Input from "../../../components/Input";
import SectionContainer from "../../../components/SectionContainer";
import TestStatus from "../TestStatus";
import Button from "../../../components/Button";

const TestDetails = ({id, testKey, projectId, name, shortDescription, description}) => {
	const {
		isDeleting,
		onDeleteTest
	} = useConnect(projectId, id);

	return (
		<SectionContainer>
			<TestDetailsContainer>
				<Heading>{name}</Heading>
				{isDeleting && (
					<p>Deleting test</p>
				)}
				<Button component={Link} to={`/test/${id}/update`}>Update</Button>
				<Button onClick={onDeleteTest}>Delete</Button>
				<Input
					label="Test key"
					disabled={true}
					maxLength={testKey.length}
					value={`ID: ${testKey}`}
				/>
				<p>{shortDescription}</p>
				<TestStatus
					projectId={projectId}
					testId={id}
				/>
				<ReactMarkdown>
					{description}
				</ReactMarkdown>
			</TestDetailsContainer>
		</SectionContainer>
	);
};

export default TestDetails;
