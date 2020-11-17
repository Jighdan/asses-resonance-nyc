import emailjs, { init } from "emailjs-com";
import { constructProductRequest, constructClientRequest } from "./emailRecordConstructor";

const data = {
	userKey: "user_BjAsDS1hlUGM7EoLCmoW3",
	serviceKey: "service_c8m2kq9",
	templateProductKey: "template_fzprz1z",
	templateClientKey: "template_cod224j",
};

init(data.userKey);

const productInformationRequest = (payload) => {
	emailjs.send(
		data.serviceKey, 
		data.templateProductKey, 
		constructProductRequest(payload), 
		data.userKey);
};

const clientInformationRequest = (payload) => {
	emailjs.send(
		data.serviceKey,
		data.templateClientKey,
		constructClientRequest(payload),
		data.userKey
	);
};

export const emailProvider = (productRequestData, clientRequestData) => {
	productInformationRequest(productRequestData);
	clientInformationRequest(clientRequestData);
};