import {useParams} from "react-router";
import {stringToNumber} from "../../../../utils/stringToNumber";
import {useMemo} from "react";
import useQueryParams from "../../../../hooks/useQueryParams";
import Status from "../../../../enum/status";

export const useConnect = () => {
	const {id} = useParams();
	const { params, setQueryParams } = useQueryParams();
	const status = useMemo(() => params.get("status") || Status.PENDING.id, [params]);
	const projectId = useMemo(() => stringToNumber(id), [id]);

	const setStatus = (val) => {
		setQueryParams({
			status: val
		});
	};

	return {
		projectId,
		status,
		setStatus
	}
};
