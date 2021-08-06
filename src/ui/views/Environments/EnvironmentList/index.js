import React from "react";
import {EnvironmentsContainer} from "./styled";
import Environment from "../Environment";

const EnvironmentsList = ({environments}) => {
	return (
		<EnvironmentsContainer>
			{environments.map(env => (
				<Environment {...env} />
			))}
		</EnvironmentsContainer>
	);
};

export default EnvironmentsList;
