const Status = Object.freeze({
	PENDING: {
		id: "pending",
		label: "Pending"
	},
	PASSED: {
		id: "passed",
		label: "Passed"
	},
	NOT_PASSED: {
		id: "not_passed",
		label: "Not passed"
	},
});

export const StatusArray = Object.values(Status);

export default Status;
