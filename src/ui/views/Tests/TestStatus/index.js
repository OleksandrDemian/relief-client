import React from "react";
import {useConnect} from "./connect";
import {TestStatusContainer, TestStatusesContainer} from "./styled";
import {StatusArray} from "../../../../enum/status";
import {bindValue} from "../../../utils/bindValue";
import Select from "../../../components/Select";

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
						<TestStatusContainer key={status.envId}>
							<span>Environment:</span>
							<span><b>{status.name}</b></span>
							<span>Status:</span>
							<Select
								native
								disabled={isSavingStatus}
								value={status.status}
								onChange={bindValue(onUpdateTestStatus(status.envId))}
								options={StatusArray.map(s => ({value: s.id, label: s.label}))}>
							</Select>
						</TestStatusContainer>
					))}
				</TestStatusesContainer>
			)}
		</>
	);
}

export default TestStatus;
