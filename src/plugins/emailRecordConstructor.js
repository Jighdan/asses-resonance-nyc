import {
	productInformationRequestTemplate,
	clientRequestTemplate
} from "./emailTemplates";

export const constructProductRequest = (payload) => {
	const requestContent = productInformationRequestTemplate(payload.productInformation);
	return {
		user_email: payload?.userEmail,
		user_full_name: payload?.userFullName,
		product_name: payload?.productName,
		product_information: requestContent
	};
};

export const constructClientRequest = (payload) => {
	const requestContent = clientRequestTemplate(payload);
	return { client_information: requestContent };
};