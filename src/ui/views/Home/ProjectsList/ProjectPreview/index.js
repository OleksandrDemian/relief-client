import React from "react";
import {ProjectPreviewContainer, ProjectPreviewTitle} from "./styled";
import {Link} from "react-router-dom";

export const ProjectPreview = ({id, name, description}) => {
	return (
		<ProjectPreviewContainer>
			<ProjectPreviewTitle>{name}</ProjectPreviewTitle>
			<p>{description}</p>
			<Link to={`/project/${id}`}>
				<button>Open</button>
			</Link>
		</ProjectPreviewContainer>
	);
};

export default ProjectPreview;
