export const constructProductRequest = (payload) => {
	return {
		user_email: payload?.userEmail,
		product_name: payload?.productName,
		user_full_name: payload?.userFullName,
		product_designer: payload?.productDesigner,
		product_description: payload?.productDescription,
	};
};

export const constructClientRequest = (payload) => {
	return {
		user_id: payload?.userId,
		product_id: payload?.productId
	};
};