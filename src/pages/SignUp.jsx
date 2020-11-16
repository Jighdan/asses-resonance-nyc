import React, {  } from "react";
import { Link } from "react-router-dom";
import airtableBase from "../plugins/airtablePlugin";

const SignUp = () => {
	const constructUser = (data) => {
		return {
			"fields": {
				"Password": data?.password,
				"First Name": data?.firstName,
				"Last Name": data?.lastName,
				"email": data?.email,
				"username": data?.username
			}
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(event);
	}

	return (
		<section>
			<form onSubmit={ handleSubmit }>
				<section>
					<label>First Name</label>
					<input type="text" required />
				</section>
				<section>
					<label>Last Name</label>
					<input type="text" required />
				</section>
				<section>
					<label>E-Mail</label>
					<input type="email" required />
				</section>
				<section>
					<label>Password</label>
					<input type="password" required />
				</section>
			</form>

			<Link to="/">Already have an account?</Link>
		</section>
	)
};

export default SignUp;