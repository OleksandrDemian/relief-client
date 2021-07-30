import React from "react";
import {useConnect} from "./connect";
import {TestStatusContainer, TestStatusesContainer, TestStatusNameText} from "./styled";
import StatusSelect from "../../../components/Helpers/StatusSelect";

export const TestStatus = ({projectId, testId}) => {
	const {
		isLoading,
		statuses,
		onUpdateTestStatus,
		isSavingStatus
	} = useConnect({projectId, testId});
	return (
		<>
			{isLoading && (
				<p>isLoading</p>
			)}

			{!isLoading && statuses && statuses.length && (
				<TestStatusesContainer>
					{statuses.map(status => (
						<TestStatusContainer key={status.envId} status={status.status}>
							<TestStatusNameText>{status.name}</TestStatusNameText>
							<StatusSelect
								disabled={isSavingStatus}
								value={status.status}
								onChange={onUpdateTestStatus(status.envId)}
							/>
						</TestStatusContainer>
					))}
				</TestStatusesContainer>
			)}
		</>
	);
}

export default TestStatus;
