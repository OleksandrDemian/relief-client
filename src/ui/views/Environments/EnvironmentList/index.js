import React from "react";
import {EnvironmentsContainer} from "./styled";
import Environment from "../Environment";

const EnvironmentsList = ({environments}) => {
	return (
		<EnvironmentsContainer>
			{environments.map(env => (
				<Environment key={env._id} environment={env} />
			))}
		</EnvironmentsContainer>
	);
};

export default EnvironmentsList;
