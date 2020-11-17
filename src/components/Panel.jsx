import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom"; 
import { useAuth } from "../context/auth";
import { getAirtableUserDataFromId } from "../plugins/airtableProvider";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1
	},
	title: {
		flexGrow: 1
	}
}));

const Panel = () => {
	const [isLoggedOut, setLoggedOut] = useState(false);
	const [userData, setUserData] = useState({});
	const { authToken, setAuthToken } = useAuth();
	const classes = useStyles();

	useEffect(() => {
		getAirtableUserDataFromId(authToken).then(response => {
			setUserData(response);
		})
	}, [authToken]);

	const logOut = () => {
		setAuthToken("");
		setLoggedOut(true);
	};

	if (isLoggedOut) { return <Redirect to="/" /> };

	const fullName = userData.firstName ? `${userData.firstName} ${userData.lastName}` : "Guest";

	return (
		<AppBar position="relative">
			<ToolBar>
				<Typography className={ classes.title } variant="h6" color="inherit" noWrap>
					Welcome, { fullName }
				</Typography>
				<Button variant="outlined" color="inherit" onClick={ logOut }>Log Out</Button>
			</ToolBar>
		</AppBar>
	);
};

export default Panel;