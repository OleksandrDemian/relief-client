import React from "react";
import {TestRowContainer, TestRowDescription, TestRowTitleLink, TestsTableContainer} from "./styled";
import {Link} from "react-router-dom";

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
					<Link to={`/test/${test.id}/update`}>
						<button>Update</button>
					</Link>
				</TestRowContainer>
			))}
		</TestsTableContainer>
	);
};

export default TestsTable;
