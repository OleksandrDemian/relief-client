import {useConnect} from "./connect";
import ProjectOverview from "../ProjectOverview";

const ProjectRoute = () => {
	const {
		id,
		isLoading,
		currentProject
	} = useConnect();

	return (
		<>
			{isLoading && (
				<p>Loading project</p>
			)}
			{!isLoading && currentProject && (
				<ProjectOverview id={id} />
			)}
		</>
	);
}

export default ProjectRoute;
