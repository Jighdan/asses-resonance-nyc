import emailjs, { init } from "emailjs-com";
import { constructProductRequest, constructClientRequest } from "./emailRecordConstructor";

init(process.env.REACT_APP_EMAIL_USER_KEY);

const productInformationRequest = (payload) => {
	emailjs.send(
		process.env.REACT_APP_EMAIL_SERVICE_KEY, 
		process.env.REACT_APP_EMAIL_TEMPLATE_PRODUCT_KEY, 
		constructProductRequest(payload), 
		process.env.REACT_APP_EMAIL_USER_KEY);
};

const clientInformationRequest = (payload) => {
	emailjs.send(
		process.env.REACT_APP_EMAIL_SERVICE_KEY,
		process.env.REACT_APP_EMAIL_TEMPLATE_CLIENT_KEY,
		constructClientRequest(payload),
		process.env.REACT_APP_EMAIL_USER_KEY
	);
};

export const emailProvider = (productRequestData, clientRequestData) => {
	productInformationRequest(productRequestData);
	clientInformationRequest(clientRequestData);
};