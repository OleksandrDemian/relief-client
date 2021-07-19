import React from "react";
import {TestRowContainer, TestRowDescription, TestRowTitleLink, TestsContainer} from "./styled";
import {Link} from "react-router-dom";
import Button from "../../../components/Button";

const TestsTable = ({tests}) => {
	return (
		<TestsContainer>
			{tests.map(test => (
				<TestRowContainer key={test.id}>
					<TestRowDescription>
						<TestRowTitleLink to={`/test/${test.id}`}>
							<b>{test.name}</b>
						</TestRowTitleLink>
						<span>{test.shortDescription}</span>
					</TestRowDescription>
					<Button href={`/test/${test.id}/update`}>Update</Button>
				</TestRowContainer>
			))}
		</TestsContainer>
	);
};

export default TestsTable;
