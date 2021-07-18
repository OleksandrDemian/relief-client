import React from "react";
import {TestRowContainer, TestRowDescription, TestRowTitleLink, TestsTableContainer} from "./styled";
import {Link} from "react-router-dom";
import Button from "../../../components/Button";

const TestsTable = ({tests}) => {
	return (
		<TestsTableContainer>
			{tests.map(test => (
				<TestRowContainer key={test.id}>
					<TestRowDescription>
						<TestRowTitleLink to={`/test/${test.id}`}>
							<b>{test.name}</b>
						</TestRowTitleLink>
						<span>{test.shortDescription}</span>
					</TestRowDescription>
					<Button component={Link} to={`/test/${test.id}/update`}>Update</Button>
				</TestRowContainer>
			))}
		</TestsTableContainer>
	);
};

export default TestsTable;