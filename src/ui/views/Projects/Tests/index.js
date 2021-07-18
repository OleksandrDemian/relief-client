import React from "react";
import SectionContainer from "../../../components/SectionContainer";
import {Heading} from "../../../components/Heading";
import {useConnect} from "./connect";
import CreateNewTestButton from "../../../components/Helpers/CreateNewTestButton";
import TestsTable from "./TestsTable";

const Tests = () => {
	const {
		tests,
		isLoading,
		projectId
	} = useConnect();
	return (
		<SectionContainer>
			<Heading>
				All tests for project {projectId}
			</Heading>
			<CreateNewTestButton />
			{isLoading && (
				<p>Loading tests</p>
			)}
			{!isLoading && (!tests || tests.length < 1) && (
				<>
					<p>No tests</p>
				</>
			)}
			{!isLoading && tests && tests.length > 0 && (
				<TestsTable
					tests={tests}
				/>
			)}
		</SectionContainer>
	);
};

export default Tests;
