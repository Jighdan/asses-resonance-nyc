import React, { useState, useContext } from "react";
import { Redirect, Link } from "react-router-dom";

const SignIn = ({ history }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	// const authenticateUser = (email, password) => {
	// 	const userData = availableUsers.find(user => user.user === email || user.email === email);
	// 	return (userData && userData.password === password) ? userData : null;
	// };

	const handleEmailChange = (event) => setEmail(event.target.value);
	const handlePasswordChange = (event) => setPassword(event.target.value);
	const handleSubmit = (event) => {
		// const user = authenticateUser(email, password);
		// if (user !== null) {
		// 	setAuthUser(user);
		// 	setAuth(true);
		// };
		event.preventDefault();
		console.log(email, password);
	};

	// if (auth) {
	// 	return (<Redirect to={ { pathname: "/catalog", state: { user: authUser } } } />)
	// }

	return (
		<section>
			<form onSubmit={ handleSubmit }>
				<section>
					<label>E-Mail</label>
					<input
						type="email" 
						required 
						value={ email } 
						onChange={ handleEmailChange }
					/>
				</section>

				<section>
					<label>Password</label>
					<input
						type="password"
						required
						value={ password }
						onChange={ handlePasswordChange }
					/>
				</section>

				<input type="submit" value="Sign In" />
			</form>		
			
			<Link to="/signup"><span>Sign Up</span></Link>
		</section>
	)
};

export default SignIn;