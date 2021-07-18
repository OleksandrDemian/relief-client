import React from "react";
import {ProjectPreviewContainer, ProjectPreviewTitle} from "./styled";
import {Link} from "react-router-dom";
import Button from "../../../../components/Button";

export const ProjectPreview = ({id, name, description}) => {
	return (
		<ProjectPreviewContainer>
			<ProjectPreviewTitle>{name}</ProjectPreviewTitle>
			<p>{description}</p>
			<Button component={Link} to={`/project/${id}`}>Open</Button>
		</ProjectPreviewContainer>
	);
};

export default ProjectPreview;
