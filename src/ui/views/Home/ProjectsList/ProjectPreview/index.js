import React from "react";
import {ProjectPreviewTitle} from "./styled";
import {Link} from "react-router-dom";
import Button from "../../../../components/Button";
import {CardContainer} from "../../../../components/Card/styled";

export const ProjectPreview = ({id, name, description}) => {
	return (
		<CardContainer>
			<ProjectPreviewTitle>{name}</ProjectPreviewTitle>
			<p>{description}</p>
			<Button component={Link} to={`/project/${id}`}>Open</Button>
		</CardContainer>
	);
};

export default ProjectPreview;
