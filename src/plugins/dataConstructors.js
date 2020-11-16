export const constructUserAuthRecord = (record) => {
	return {
		id: record.id,
		email: record.get("email"),
		password: record.get("Password")
	};
};

export const constructUserRecord = (record) => {
	return {
		firstName: record.get("First Name"),
		lastName: record.get("Last Name"),
		email: record.get("email"),
	};
};

export const constructCatalogProductRecord = (record) => {
	return {
		name: record.get("Name"),
		picture: record.get("Picture"),
		description: record.get("Description"),
		vendor: record.get("vendor"),
		unitCost: record.get("Unit Cost"),
		inStock: record.get("In Stock"),
		size: record.get("Size (WxLxH)"),
		materials: record.get("Materials and Finishes"),
		id: record.id
	}
};