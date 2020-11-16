import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";
import { getAirtableUserAuth } from "../plugins/airtablePlugin";

const SignIn = () => {
	const [isLoggedIn, setLoggedIn] = useState(false);
	const [isError, setError] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { setAuthToken } = useAuth();

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

	if (isLoggedIn) { return <Redirect to="/catalog" /> };

	return (
		<section>
			<form onSubmit={ handleSubmit }>
				<section>
					<label>E-Mail</label>
					<input
						type="email" 
						required 
						value={ email } 
						onChange={ event => setEmail(event.target.value) }
						placeholder="E-Mail"
					/>
				</section>

				<section>
					<label>Password</label>
					<input
						type="password"
						required
						value={ password }
						onChange={ event => setPassword(event.target.value) }
						placeholder="Password"
					/>
				</section>

				<input type="submit" value="Sign In" />
			</form>		
			
			<Link to="/signup">Not registered yet?</Link>
			{ isError && <h3>The username or password provided were invalid!</h3> }
		</section>
	)
};

export default SignIn;