import React, { useState, useEffect } from "react";
import { useAuth } from "../context/auth";
import { getAirtableUserDataFromId } from "../plugins/airtableProvider";
import { emailProvider } from "../plugins/emailProvider";
import { currentDate } from "../plugins/dateProvider";

import Button from "@material-ui/core/Button";

const ButtonRequest =({ product }) => {
	const [userData, setUserData] = useState({});
	const { authToken } = useAuth();

	useEffect(() => {
		getAirtableUserDataFromId(authToken).then(response => {
			setUserData(response);
		})
	}, [authToken]);

	const productData = {
		userFullName: `${userData.firstName} ${userData.lastName}`,
		userEmail: userData.email,
		productName: product.name,
		productPrice: product.unitCost,
		productDescription: product.description
	};

	const clientData = {
		userId: authToken,
		productId: product.id,
		date: currentDate()
	};

	const handleClick = () => {
		emailProvider(productData, clientData);
		window.alert("Email sent");
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