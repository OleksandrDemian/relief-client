import SectionContainer from "../../../components/SectionContainer";
import {useConnect} from "./connect";
import {Heading} from "../../../components/Heading";
import CreateTestForm from "../CreateTest/CreateTestForm";
import React from "react";

const UpdateTestRoute = () => {
	const {
		id,
		isLoading,
		test,
		updateTest,
		isSaving
	} = useConnect();

	const onTestSubmit = (updatedTest) => {
		const newTest = Object.assign({}, test, updatedTest);
		updateTest(newTest);
	};

	return (
		<SectionContainer>
			{isLoading && (
				<p>Loading test {id}</p>
			)}
			{!isLoading && test && (
				<>
					<Heading>Update {test.name} {isSaving ? '<Saving>' : ''}</Heading>
					<CreateTestForm
						onTestSubmit={onTestSubmit}
						disabled={isLoading || isSaving}
						placeHolder={test}
					/>
				</>
			)}
			{!isLoading && !test && (
				<p>Test not found</p>
			)}
		</SectionContainer>
	);
};

export default UpdateTestRoute;
