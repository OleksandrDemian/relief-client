import {useParams} from "react-router";
import {useMemo} from "react";
import useQueryParams from "../../../../hooks/useQueryParams";

export const useConnect = () => {
	const {id} = useParams();
	const { params, setQueryParams } = useQueryParams();
	const status = useMemo(() => params.get("status") || "all", [params]);

	const setStatus = (val) => {
		setQueryParams({
			status: val
		});
	};

	return {
		id,
		status,
		setStatus
	}
};
