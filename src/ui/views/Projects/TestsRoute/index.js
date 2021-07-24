import React from "react";
import SectionContainer from "../../../components/SectionContainer";
import {Heading} from "../../../components/Heading";
import {useConnect} from "./connect";
import CreateNewTestButton from "../../../components/Helpers/CreateNewTestButton";
import TestsTable from "../TestsTable";
import {ButtonsRow} from "../../../components/Button/styled";
import StatusSelect from "../../../components/Helpers/StatusSelect";
import Status from "../../../../enum/status";
import FilteredTests from "../ProjectOverview/FilteredTests";

const TestsRoute = () => {
	const {
		projectId,
		status,
		setStatus
	} = useConnect();
	return (
		<SectionContainer>
			<Heading>
				All tests for project {projectId}
			</Heading>
			<ButtonsRow>
				<CreateNewTestButton />
				<StatusSelect
					value={status}
					onChange={setStatus}
					options={[
						{value: "all", label: "All"}
					]}
				/>
			</ButtonsRow>
			<FilteredTests
				currentProjectId={projectId}
				status={status}
			/>
		</SectionContainer>
	);
};

export default TestsRoute;
