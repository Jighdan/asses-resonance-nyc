import React, {  } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
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