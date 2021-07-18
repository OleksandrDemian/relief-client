export const stringToNumber = (str) => {
	const num = parseInt(str);
	if(isNaN(num)) {
		return null;
	} else {
		return num;
	}
}
