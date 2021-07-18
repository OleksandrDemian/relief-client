import { useLocation } from 'react-router-dom';

export default function useQueryParams() {
	// eslint-disable-next-line no-undef
	return new URLSearchParams(useLocation().search);
}
