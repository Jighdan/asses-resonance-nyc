import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom"; 
import { useAuth } from "../context/auth";
import { getAirtableUserDataFromId } from "../plugins/airtableProvider";

const Panel = () => {
	const [isLoggedOut, setLoggedOut] = useState(false);
	const [userData, setUserData] = useState({});
	const { authToken, setAuthToken } = useAuth();

	getAirtableUserDataFromId(authToken).then(response => setUserData(response));

	const logOut = () => {
		setAuthToken("");
		setLoggedOut(true);
	};

	if (isLoggedOut) { return <Redirect to="/" /> };

	const fullName = userData ? `${userData.firstName} ${userData.lastName}` : "Guest";

	return (
		<header>
			<h1>Logged in as { fullName }</h1>
			<button onClick={ logOut }>Log Out</button>
		</header>
	);
};

export default Panel;