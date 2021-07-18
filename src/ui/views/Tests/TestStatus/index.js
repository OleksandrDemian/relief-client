import React from "react";
import {useConnect} from "./connect";
import {TestStatusContainer, TestStatusesContainer} from "./styled";
import {StatusArray} from "../../../../enum/status";
import {bindValue} from "../../../utils/bindValue";

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
						<TestStatusContainer>
							<span>Environment:</span>
							<span><b>{status.name}</b></span>
							<span>Status:</span>
							<select disabled={isSavingStatus} value={status.status} onChange={bindValue(onUpdateTestStatus(status.envId))}>
								{StatusArray.map(s => (
									<option value={s.id}>{s.label}</option>
								))}
							</select>
						</TestStatusContainer>
					))}
				</TestStatusesContainer>
			)}
		</>
	);
}

export default TestStatus;
