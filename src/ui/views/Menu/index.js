import React from "react";
import {MenuContainer, MenuItemsContainer, StyleMenuLink, ProjectsTitle} from "./styled";
import {useProjectsContext} from "../../../context/projects";
import Button from "../../components/Button";
import {ReactComponent as HomeIcon} from "../../assets/ionicons/home.svg"
import {ReactComponent as TestsIcon} from "../../assets/ionicons/tests.svg"
import {ReactComponent as EnvironmentsIcon} from "../../assets/ionicons/environments.svg"
import {ReactComponent as AddIcon} from "../../assets/ionicons/add-outline.svg"

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
					Home
				</StyleMenuLink>
				{!isLoading && (currentProjectId != null) && (
					<>
						<StyleMenuLink to={`/project/${currentProjectId}/tests`}>
							<TestsIcon/>
							Tests
						</StyleMenuLink>
						<StyleMenuLink to={`/environments`}>
							<EnvironmentsIcon/>
							Environments
						</StyleMenuLink>
						<StyleMenuLink to={`/test/new`}>
							<AddIcon/>
							New test
						</StyleMenuLink>
						<StyleMenuLink to={`/environments/new`}>
							<AddIcon/>
							New environment
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
