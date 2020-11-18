import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { createAirtableUser } from "../plugins/airtableProvider";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	form: {
		width: "100%",
		marginTop: theme.spacing(3)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

const SignUp = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isRegistered, setRegistered] = useState(false);
	const classes = useStyles();

	const handleSubmit = (event) => {
		event.preventDefault();
		const userData = { firstName, lastName, email, password };
		createAirtableUser(userData);
		setRegistered(true);
	};

	if (isRegistered) {
		return <Redirect to="/" />
	};

	return (
		<Container component="main" maxWidth="xs">
			<section className={ classes.paper }>
				<Typography
					component="h1"
					variant="h5"
				>
					Sign Up
				</Typography>
				<form
					className={ classes.form }
					onSubmit={ handleSubmit }
					noValidate
				>
					<Grid container spacing={ 2 }>
						<Grid item xs={ 12 } sm={ 6 }>
							<TextField
								variant="outlined" value={ firstName }
								onChange={ event => setFirstName(event.target.value) }
								required fullWidth autoFocus
								label="First Name"
							/>
						</Grid>

						<Grid item xs={ 12 } sm={ 6 }>
							<TextField
								variant="outlined" value={ lastName }
								onChange={ event => setLastName(event.target.value) }
								required fullWidth
								label="Last Name"
							/>
						</Grid>

						<Grid item xs={ 12 }>
							<TextField
								variant="outlined" value={ email }
								onChange={ event => setEmail(event.target.value) }
								type="email" label="E-Mail"
								required fullWidth
							/>
						</Grid>

						<Grid item xs={ 12 }>
							<TextField
								variant="outlined" value={ password }
								onChange={ event => setPassword(event.target.value) }
								required fullWidth
								label="Password" type="password"
							/>
						</Grid>
					</Grid>

					<Button
						type="submit" fullWidth variant="contained"
						color="primary" className={ classes.submit }
					>
						Sign Up
					</Button>

					<Grid container justify="flex-end">
						<Grid item>
							<Button component={ Link } to="/" variant="body2">
								Already have an account? Sign In
							</Button>
						</Grid>
					</Grid>
				</form>
			</section>
		</Container>
	)
};

export default SignUp;