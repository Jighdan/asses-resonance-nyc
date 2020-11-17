export const currentDate = () => {
	const date = new Date();
	const options = {
		weekday: "long",
		year: "numeric",
		month: "short",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit"
	};

	return date.toLocaleString("en-us", options);
};
