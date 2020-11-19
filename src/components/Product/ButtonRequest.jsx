import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { getAirtableUserDataFromId } from "../../plugins/airtableProvider";
import { emailProvider } from "../../plugins/emailProvider";
import { currentDate } from "../../plugins/dateProvider";
import { useSnackbar } from "notistack";

import Button from "@material-ui/core/Button";

const ButtonRequest =({ product }) => {
	const [userData, setUserData] = useState({});
	const [emailSent, setEmailSent] = useState(false);
	const { authToken } = useAuth();
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		getAirtableUserDataFromId(authToken).then(response => {
			setUserData(response);
		})
	}, [authToken]);

	const productData = {
		userFullName: `${userData.firstName} ${userData.lastName}`,
		userEmail: userData.email,
		productName: product.name,
		productInformation: {
			name: product.name,
			picture: product.picture,
			unitCost: product.unitCost,
			size: product.size,
			description: product.description
		}
	};

	const clientData = {
		userId: authToken,
		productId: product.id,
		date: currentDate()
	};

	const handleClick = () => {
		if (!emailSent) {
			emailProvider(productData, clientData);
			setEmailSent(true);
			enqueueSnackbar(`The product information was sent to ${userData.email}.`);
		} else {
			enqueueSnackbar(`
				This product information was already sent to ${userData.email}.
				Please check your inbox.
			`)
		};
	};

	return (
		<Button
			variant="outlined" size="small" color="primary"
			onClick={ handleClick }
		>
			Request Information
		</Button>
	)
};

export default ButtonRequest;