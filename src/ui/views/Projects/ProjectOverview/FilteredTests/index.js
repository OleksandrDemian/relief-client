import React from "react";
import {useConnect} from "./connect";
import TestsTable from "../../TestsTable";

const FilteredTests = ({currentProjectId, status}) => {
	const {
		tests,
		isLoading
	} = useConnect({projectId: currentProjectId, status});
	return (
		<>
			{isLoading && (
				<p>Loading tests</p>
			)}
			{!isLoading && tests && (
				<TestsTable
					tests={tests}
				/>
			)}
			{!isLoading && (!tests || tests.length < 1) && (
				<p><strong>No tests</strong> with status <strong>{status}</strong> found</p>
			)}
		</>
	);
}

export default FilteredTests;
