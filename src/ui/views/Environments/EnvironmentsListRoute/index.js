import React from "react";
import {useProjectsContext} from "../../../../context/projects";
import {useEnvironments} from "../../../../dataHooks/useEnvironments";
import {Heading} from "../../../components/Heading";
import SectionContainer from "../../../components/SectionContainer";
import EnvironmentsList from "../EnvironmentList";

const EnvironmentsListRoute = () => {
	const {currentProjectId} = useProjectsContext();
	const {
		isLoading,
		data
	} = useEnvironments(currentProjectId);
	return (
		<SectionContainer>
			<Heading>Environments</Heading>
			{isLoading && (
				<p>Loading</p>
			)}
			{!isLoading && data && (
				<EnvironmentsList
					environments={data}
				/>
			)}
		</SectionContainer>
	);
};

export default EnvironmentsListRoute;
