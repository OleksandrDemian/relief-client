import React from "react";
import {ProjectPreviewTitle} from "./styled";
import Button from "../../../../components/Button";
import {CardContainer} from "../../../../components/Card/styled";

export const ProjectPreview = ({id, name, description}) => {
	return (
		<CardContainer>
			<ProjectPreviewTitle>{name}</ProjectPreviewTitle>
			<p>{description}</p>
			<Button href={`/project/${id}`}>Open</Button>
		</CardContainer>
	);
};

export default ProjectPreview;
