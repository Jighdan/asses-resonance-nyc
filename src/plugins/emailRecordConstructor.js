export const constructProductRequest = (payload) => {
	return {
		user_email: payload?.userEmail,
		product_name: payload?.productName,
		product_price: payload?.productPrice,
		user_full_name: payload?.userFullName,
		product_description: payload?.productDescription,
	};
};

export const constructClientRequest = (payload) => {
	return {
		user_id: payload?.userId,
		product_id: payload?.productId,
		date: payload?.date
	};
};