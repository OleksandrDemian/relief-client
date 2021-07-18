import {createContext, useCallback, useContext, useMemo, useState} from "react";
import {useProjects} from "../../dataHooks/useProjects";

const ProjectsContext = createContext(null);
export const useProjectsContext = () => useContext(ProjectsContext);

export const ProjectsContextProvider = ({children}) => {
	const {
		data,
		isLoading
	} = useProjects();
	const [currentProject, setCurrentProject] = useState(null);

	const projects = useMemo(() => data, [data]);

	const changeCurrentProject = useCallback((id) => {
		if(!projects) return;

		for(let i = 0; i < projects.length; i++) {
			if(projects[i].id === id) {
				setCurrentProject(projects[i]);
				return;
			}
		}
	}, [projects]);

	return (
		<ProjectsContext.Provider
			value={{
				projects,
				currentProjectId: currentProject?.id,
				currentProject,
				isLoading,
				changeCurrentProject
			}}
		>
			{isLoading && (
				<p>Loading projects</p>
			)}
			{!isLoading && !projects && (
				<p>You have no projects</p>
			)}
			{!isLoading && projects && children}
		</ProjectsContext.Provider>
	);
};