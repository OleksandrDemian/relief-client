import React from "react";
import {Route, Switch} from "react-router-dom";
import NewTest from "./NewTest";
import Test from "./Test";
import UpdateTest from "./UpdateTest";

const TestRouter = () => {
	return (
		<Switch>
			<Route exact path="/test/new" component={NewTest} />
			<Route exact path="/test/:id/update" component={UpdateTest} />
			<Route exact path="/test/:id" component={Test} />
		</Switch>
	);
};

export default TestRouter;
