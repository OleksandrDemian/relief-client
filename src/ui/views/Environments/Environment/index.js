import React from "react";
import ReactMarkdown from "react-markdown";
import {EnvironmentContainer, EnvironmentHead} from "./styled";

const Environment = ({name, description, _id}) => {
	return (
		<EnvironmentContainer>
			<EnvironmentHead>{name}</EnvironmentHead>
			<div>
				<ReactMarkdown>
					{description}
				</ReactMarkdown>
			</div>
		</EnvironmentContainer>
	);
};

export default Environment;
