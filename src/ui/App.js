import Layout, {Main} from "./layout";
import Menu from "./views/Menu";
import Home from "./views/Home";
import {Route} from "react-router-dom";
import TestRouter from "./views/Tests/router";
import ProjectsRouter from "./views/Projects/router";

const App = () => {
	return (
		<Layout>
			<Menu />
			<Main>
				<Route exact path="/" component={Home} />
				{/* todo: temp put project router under project/:id path in order to have project id available */}
				<Route path="/project/:id" component={ProjectsRouter} />
				<TestRouter />
			</Main>
		</Layout>
	);
};

export default App;
