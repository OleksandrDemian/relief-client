import Themed from "./theme";
import {QueryClient, QueryClientProvider} from "react-query";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {ProjectsContextProvider} from "../context/projects";

const AppContext = () => {
	const queryClient = new QueryClient()
	return (
		<Themed>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<ProjectsContextProvider>
						<App />
					</ProjectsContextProvider>
				</BrowserRouter>
			</QueryClientProvider>
		</Themed>
	);
}

export default AppContext;
