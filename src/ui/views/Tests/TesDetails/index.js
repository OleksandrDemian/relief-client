import React from "react";
import ReactMarkdown from "react-markdown";
import {Heading} from "../../../components/Heading";
import {TestDetailsContainer} from "./styled";
import {useConnect} from "./connect";
import Input from "../../../components/Input";
import SectionContainer from "../../../components/SectionContainer";
import TestStatus from "../TestStatus";
import Button from "../../../components/Button";
import {ButtonsRow} from "../../../components/Button/styled";

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
				<ButtonsRow>
					<Button href={`/test/${id}/update`}>Update</Button>
					<Button onClick={onDeleteTest} color={"error"}>Delete</Button>
				</ButtonsRow>
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
				<div>
					<ReactMarkdown>
						{description}
					</ReactMarkdown>
				</div>
			</TestDetailsContainer>
		</SectionContainer>
	);
};

export default TestDetails;
