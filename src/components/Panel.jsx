import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom"; 
import { useAuth } from "../context/auth";
import { getAirtableUserDataFromId } from "../plugins/airtablePlugin";

const Panel = () => {
	const [isLoggedOut, setLoggedOut] = useState(false);
	const [userData, setUserData] = useState({});
	const { authToken, setAuthToken } = useAuth();

	const data = getAirtableUserDataFromId(authToken).then(response => {
		console.log(response);
		setUserData(response)
	});

	console.log(data)

	const logOut = () => {
		setAuthToken();
		setLoggedOut(true);
	};

	if (isLoggedOut) { return <Redirect to="/" /> }

	return (
		<header>
			<h1>Logged in as { userData ? userData.firstName : "Guest" }</h1>
			<button onClick={ logOut }>Log Out</button>
		</header>
	);
};

export default Panel;