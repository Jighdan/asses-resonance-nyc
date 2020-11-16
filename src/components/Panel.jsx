import React from "react";
import { useAuth } from "../context/auth";

const Panel = ({ props }) => {
	const { setAuthToken } = useAuth();

	const logOut = () => setAuthToken();

	return (
		<header>
			<button onClick={ logOut }></button>
		</header>
	)
};

export default Panel;