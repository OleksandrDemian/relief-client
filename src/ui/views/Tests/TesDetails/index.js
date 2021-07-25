import React, {useRef} from "react";
import ReactMarkdown from "react-markdown";
import {Heading} from "../../../components/Heading";
import {TestActionsRow, TestDetailsContainer} from "./styled";
import {useConnect} from "./connect";
import Input from "../../../components/Input";
import SectionContainer from "../../../components/SectionContainer";
import TestStatus from "../TestStatus";
import Button from "../../../components/Button";
import {ReactComponent as DeleteIcon} from "../../../assets/ionicons/trash.svg";
import {ReactComponent as UpdateIcon} from "../../../assets/ionicons/create-outline.svg";
import CopyTextButton from "../../../components/Helpers/CopyTextButton";

const TestDetails = ({_id, testKey, projectId, name, shortDescription, description}) => {
	const {
		isDeleting,
		onDeleteTest
	} = useConnect(projectId, _id);
	const inputToCopy = useRef(null);
	return (
		<SectionContainer>
			<TestDetailsContainer>
				<Heading>{name}</Heading>
				{isDeleting && (
					<p>Deleting test</p>
				)}
				<TestActionsRow vSpace={0}>
					<Input
						inputRef={inputToCopy}
						label="Test key"
						disabled={true}
						maxLength={testKey.length}
						value={testKey}
					/>
					<CopyTextButton inputToCopy={inputToCopy} color="secondary">
						Copy test key
					</CopyTextButton>
					<Button href={`/test/${_id}/update`}>
						<UpdateIcon />
						Update
					</Button>
					<Button onClick={onDeleteTest} color={"error"}>
						<DeleteIcon />
						Delete
					</Button>
				</TestActionsRow>
				<p>{shortDescription}</p>
				<TestStatus
					projectId={projectId}
					testId={_id}
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
