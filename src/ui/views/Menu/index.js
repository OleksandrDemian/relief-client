import React from "react";
import {MenuContainer, StickyContainer} from "./styled";
import {Heading} from "../../components/Heading";
import {useProjectsContext} from "../../../context/projects";
import Button from "../../components/Button";

const MenuItem = ({to, children}) => (
	<Button href={to}>{children}</Button>
);

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
				<MenuItem to="/">Home</MenuItem>
				{!isLoading && (currentProjectId != null) && (
					<>
						<MenuItem to={`/project/${currentProjectId}/tests`}>Tests</MenuItem>
						<MenuItem to={`/environments`}>Environments</MenuItem>
						<MenuItem to={`/test/new`}>New test</MenuItem>
						<MenuItem to={`/environments/new`}>New environment</MenuItem>
					</>
				)}

				<Heading>Projects</Heading>
				{!isLoading && projects && projects.map(project => (
					<MenuItem
						key={project.id}
						to={`/project/${project.id}`}
					>
						{project.name}
					</MenuItem>
				))}
			</StickyContainer>
		</MenuContainer>
	);
};

export default Menu;
