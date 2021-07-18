export const bindValue = (setter) => {
	return (e) => setter(e.currentTarget.value);
};
