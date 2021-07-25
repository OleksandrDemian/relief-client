import React from "react";
import {TestRowContainer, TestRowDescription, TestRowTitleLink, TestsContainer} from "./styled";
import Button from "../../../components/Button";
import {ReactComponent as EditIcon} from "../../../assets/ionicons/create-outline.svg"

const TestsTable = ({tests}) => {
	return (
		<TestsContainer>
			{tests.map(test => (
				<TestRowContainer key={test._id}>
					<TestRowDescription>
						<TestRowTitleLink to={`/test/${test._id}`}>
							<b>{test.name}</b>
						</TestRowTitleLink>
						<span>{test.shortDescription}</span>
					</TestRowDescription>
					<Button href={`/test/${test._id}/update`}>
						<EditIcon />
						Update
					</Button>
				</TestRowContainer>
			))}
		</TestsContainer>
	);
};

export default TestsTable;
