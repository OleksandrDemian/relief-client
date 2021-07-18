import React from "react";
import {Route, Switch} from "react-router-dom";
import NewEnvironmentRoute from "./NewEnvironmentRoute";
import EnvironmentsListRoute from "./EnvironmentsListRoute";

const EnvironmentRouter = () => {
	return (
		<Switch>
			<Route exact path="/environments" component={EnvironmentsListRoute} />
			<Route path="/environments/new" component={NewEnvironmentRoute} />
		</Switch>
	);
};

export default EnvironmentRouter;
