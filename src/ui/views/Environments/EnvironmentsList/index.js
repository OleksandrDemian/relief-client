import React from "react";
import {useProjectsContext} from "../../../../context/projects";
import {useEnvironments} from "../../../../dataHooks/useEnvironments";
import {Heading} from "../../../components/Heading";
import SectionContainer from "../../../components/SectionContainer";
import {EnvironmentContainer, EnvironmentsContainer} from "./styled";

const EnvironmentsList = () => {
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
				<EnvironmentsContainer>
					{data.map(env => (
						<EnvironmentContainer>
							{env.name}
							<p>{env.description}</p>
						</EnvironmentContainer>
					))}
				</EnvironmentsContainer>
			)}
		</SectionContainer>
	);
};

export default EnvironmentsList;
