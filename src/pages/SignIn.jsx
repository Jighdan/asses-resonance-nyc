import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";
import { getAirtableUserAuth } from "../plugins/airtableProvider";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const SignIn = () => {
	const [isLoggedIn, setLoggedIn] = useState(false);
	const [isError, setError] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { setAuthToken } = useAuth();
	const classes = useStyles();

	const handleSubmit = (event) => {
		event.preventDefault();
		getAirtableUserAuth(email, password).then(response => {
			if (response !== null) {
				setAuthToken(response);
				setLoggedIn(true);
			} else {
				setError(true)
			}
		}).catch(error => {
			console.error(error);
			setError(true);
		})
	};

	if (isLoggedIn) { return <Redirect to="/dashboard" /> };

	return (
		<Container component="main" maxWidth="xs">
			<section className={ classes.paper }>
				<Typography component="h1" variant="h5">Sign In</Typography>
				{ isError && (
					<Alert severity="error">The username or password provided were invalid!</Alert>
				) }
				<form className={ classes.form } onSubmit={ handleSubmit } noValidate>
					<TextField
						type="email" variant="outlined"
						required fullWidth label="E-Mail"
						value={ email } margin="normal"
						onChange={ event => setEmail(event.target.value) }
						placeholder="E-Mail" autoFocus
					/>

					<TextField
						type="password" variant="outlined"
						required fullWidth label="Password"
						value={ password } margin="normal"
						onChange={ event => setPassword(event.target.value) }
						placeholder="Password"
					/>

					<Button
						variant="contained" type="submit" fullWidth
						color="primary" className={ classes.submit}
					>
						Sign In
					</Button>

					<Button component={ Link } to="/sign-up">
						Not registered yet?
					</Button>
				</form>	
			</section>
		</Container>
	);
};

export default SignIn;