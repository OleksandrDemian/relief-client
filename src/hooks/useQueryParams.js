import {useHistory, useLocation} from 'react-router-dom';

export default function useQueryParams() {
	const params = new URLSearchParams(useLocation().search);
	const history = useHistory();

	const setQueryParams = (p) => {
		const loc = new URL(window.location.href);
		for(const [name, value] of Object.entries(p)) {
			if(value == null) {
				loc.searchParams.delete(name);
			} else {
				loc.searchParams.set(name, value);
			}
		}

		history.push(loc.pathname + loc.search);
	}


	return {
		params,
		setQueryParams
	}
}
