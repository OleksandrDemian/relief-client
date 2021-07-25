import React from "react";
import {EnvironmentContainer, EnvironmentsContainer} from "./styled";

const EnvironmentsList = ({environments}) => {
	return (
		<EnvironmentsContainer>
			{environments.map(env => (
				<EnvironmentContainer key={env._id}>
					{env.name}
					<p>{env.description}</p>
				</EnvironmentContainer>
			))}
		</EnvironmentsContainer>
	);
};

export default EnvironmentsList;
