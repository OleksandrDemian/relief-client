import React from "react";
import {useConnect} from "./connect";
import {TestStatusContainer, TestStatusNameText} from "./styled";
import StatusSelect from "../../../components/Helpers/StatusSelect";

export const TestStatus = ({status, testId}) => {
	const {
		onUpdateTestStatus,
		isSavingStatus
	} = useConnect({testId});
	return (
		<TestStatusContainer status={status}>
			<TestStatusNameText>Test status</TestStatusNameText>
			<StatusSelect
				disabled={isSavingStatus}
				value={status}
				onChange={onUpdateTestStatus(status._id)}
			/>
		</TestStatusContainer>
	);
}

export default TestStatus;
