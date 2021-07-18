import React from "react";
import {Route, Switch} from "react-router-dom";
import Tests from "./Tests";
import Project from "./Project";
import {useConnect} from "./connect";

const ProjectsRouter = () => {
	useConnect();

	return (
		<Switch>
			<Route exact path="/project/:id" component={Project} />
			<Route exact path="/project/:id/tests" component={Tests} />
		</Switch>
	);
};

export default ProjectsRouter;
