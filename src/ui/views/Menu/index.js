import React from "react";
import {MenuContainer, MenuItemsContainer, StyleMenuLink, ProjectsTitle} from "./styled";
import {useProjectsContext} from "../../../context/projects";
import Button from "../../components/Button";
import {ReactComponent as HomeIcon} from "../../assets/ionicons/home.svg"
import {ReactComponent as TestsIcon} from "../../assets/ionicons/tests.svg"
import {ReactComponent as EnvironmentsIcon} from "../../assets/ionicons/environments.svg"

const MenuItem = ({to, children, ...props}) => (
	<Button href={to} {...props}>{children}</Button>
);

const Menu = () => {
	const {
		projects,
		isLoading,
		currentProjectId
	} = useProjectsContext();
	return (
		<MenuContainer>
			<MenuItemsContainer>
				<StyleMenuLink to="/">
					<HomeIcon/>
					<span>Home</span>
				</StyleMenuLink>
				{!isLoading && (currentProjectId != null) && (
					<>
						<StyleMenuLink to={`/project/${currentProjectId}/tests`}>
							<TestsIcon/>
							<span>Tests</span>
						</StyleMenuLink>
						<StyleMenuLink to={`/environments`}>
							<EnvironmentsIcon/>
							<span>Environments</span>
						</StyleMenuLink>
					</>
				)}
			</MenuItemsContainer>
			<MenuItemsContainer>
				<ProjectsTitle>Projects</ProjectsTitle>
				{!isLoading && projects && projects.map(project => (
					<MenuItem
						key={project._id}
						to={`/project/${project._id}`}
					>
						{project.name}
					</MenuItem>
				))}
			</MenuItemsContainer>
		</MenuContainer>
	);
};

export default Menu;
