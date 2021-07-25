import React from "react";
import SectionContainer from "../../../components/SectionContainer";
import {Heading} from "../../../components/Heading";
import {useConnect} from "./connect";
import CreateNewTestButton from "../../../components/Helpers/CreateNewTestButton";
import {ButtonsRow} from "../../../components/Button/styled";
import StatusSelect from "../../../components/Helpers/StatusSelect";
import FilteredTests from "../ProjectOverview/FilteredTests";

const TestsRoute = () => {
	const {
		id,
		status,
		setStatus
	} = useConnect();
	return (
		<SectionContainer>
			<Heading>
				All tests for project {id}
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
				currentProjectId={id}
				status={status}
			/>
		</SectionContainer>
	);
};

export default TestsRoute;
