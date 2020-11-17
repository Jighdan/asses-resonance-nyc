import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { createAirtableUser } from "../plugins/airtableProvider";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignUp = () => {
	const [username, setUsername] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isRegistered, setRegistered] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		const userData = { username, firstName, lastName, email, password };
		createAirtableUser(userData);
		setRegistered(true);
	};

	if (isRegistered) {
		return <Redirect to="/" />
	};

	return (
		<Card>
			<Card.Body>
				<Card.Title>Sign Up</Card.Title>
				<Form onSubmit={ handleSubmit }>
					<Form.Row>
						<Form.Group as={ Col }>
							<Form.Label>First Name</Form.Label>
							<Form.Control 
								value={ firstName }
								onChange={ event => setFirstName(event.target.value) }
								type="text" required
								placeholder="First Name"
							/>
						</Form.Group>

						<Form.Group as={ Col }>
							<Form.Label>Last Name</Form.Label>
							<Form.Control
								value={ lastName }
								onChange={ event => setLastName(event.target.value) }
								type="text"
								required
								placeholder="Last Name"
							/>
						</Form.Group>
					</Form.Row>

					<Form.Group>
						<Form.Label>Username</Form.Label>
						<Form.Control
							value={ username }
							onChange={ event => setUsername(event.target.value) }
							type="text"
							required
							placeholder="Username"
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>E-Mail</Form.Label>
						<Form.Control
							value={ email }
							onChange={ event => setEmail(event.target.value) }
							type="email"
							required
							placeholder="E-Mail"
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Password</Form.Label>
						<Form.Control
							value={ password }
							onChange={ event => setPassword(event.target.value) }
							type="password"
							required
							placeholder="Password"
						/>
					</Form.Group>

					<Button variant="primary" type="submit">Sign Up</Button>
				</Form>
			</Card.Body>
			<Card.Link href="#"><Link to="/">Already have an account?</Link></Card.Link>
		</Card>
	)
};

export default SignUp;