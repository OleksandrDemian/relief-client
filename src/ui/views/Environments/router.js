import React from "react";
import {Route, Switch} from "react-router-dom";
import NewEnvironment from "./NewEnvironment";
import EnvironmentsList from "./EnvironmentsList";

const EnvironmentRouter = () => {
	return (
		<Switch>
			<Route exact path="/environments" component={EnvironmentsList} />
			<Route path="/environments/new" component={NewEnvironment} />
		</Switch>
	);
};

export default EnvironmentRouter;
