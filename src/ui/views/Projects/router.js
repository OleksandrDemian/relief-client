import React from "react";
import {Route, Switch} from "react-router-dom";
import TestsRoute from "./TestsRoute";
import ProjectRoute from "./ProjectRoute";
import {useConnect} from "./connect";

const ProjectsRouter = () => {
	useConnect();

	return (
		<Switch>
			<Route exact path="/project/:id" component={ProjectRoute} />
			<Route exact path="/project/:id/tests" component={TestsRoute} />
		</Switch>
	);
};

export default ProjectsRouter;
