import React, {  } from "react";
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

	// const handleRegister = ()

	return (
		<section>
			<h1>Sign Up</h1>
		</section>
	)
};

export default SignUp;