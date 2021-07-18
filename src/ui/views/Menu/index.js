import React from "react";
import {MenuContainer, StickyContainer} from "./styled";
import {Heading} from "../../components/Heading";
import {Link} from "react-router-dom";
import {useProjectsContext} from "../../../context/projects";

const Menu = () => {
	const {
		projects,
		isLoading,
		currentProjectId
	} = useProjectsContext();
	return (
		<MenuContainer>
			<StickyContainer>
				<Heading>Menu</Heading>
				<Link to="/">Home</Link>
				{!isLoading && (currentProjectId != null) && (
					<>
						<Link to={`/project/${currentProjectId}/tests`}>Tests</Link>
						<Link to={`/environments`}>Environments</Link>
						<Link to={`/test/new`}>New test</Link>
						<Link to={`/environments/new`}>New environment</Link>
					</>
				)}

				<Heading>Projects</Heading>
				{!isLoading && projects && projects.map(project => (
					<Link
						key={project.id}
						to={`/project/${project.id}`}
					>
						{project.name}
					</Link>
				))}
			</StickyContainer>
		</MenuContainer>
	);
};

export default Menu;
