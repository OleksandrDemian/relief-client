import {useConnect} from "./connect";
import TestDetails from "../TesDetails";

const Test = () => {
	const {
		test,
		isLoading
	} = useConnect();

	return (
		<>
			{isLoading && (
				<p>Loading test</p>
			)}
			{!isLoading && test && (
				<TestDetails {...test} />
			)}
		</>
	);
}

export default Test;
