import React from "react";
import {Route, Switch} from "react-router-dom";
import NewTestRoute from "./NewTestRoute";
import TestRoute from "./TestRoute";
import UpdateTestRoute from "./UpdateTestRoute";

const TestRouter = () => {
	return (
		<Switch>
			<Route exact path="/test/new" component={NewTestRoute} />
			<Route exact path="/test/:id/update" component={UpdateTestRoute} />
			<Route exact path="/test/:id" component={TestRoute} />
		</Switch>
	);
};

export default TestRouter;
