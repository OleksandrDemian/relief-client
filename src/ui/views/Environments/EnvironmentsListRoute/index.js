import React from "react";
import {useProjectsContext} from "../../../../context/projects";
import {useEnvironments} from "../../../../dao/hooks/useEnvironments";
import {Heading} from "../../../components/Heading";
import SectionContainer from "../../../components/SectionContainer";
import EnvironmentsList from "../EnvironmentList";
import {ButtonsRow} from "../../../components/Button/styled";
import Button from "../../../components/Button";

const EnvironmentsListRoute = () => {
	const {currentProjectId} = useProjectsContext();
	const {
		isLoading,
		data
	} = useEnvironments(currentProjectId);
	return (
		<SectionContainer>
			<Heading>Environments</Heading>
			<ButtonsRow>
				<Button href="/environments/new">
					New environment
				</Button>
			</ButtonsRow>
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
