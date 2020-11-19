import React, { useEffect, useState } from "react";
import { getAirtableCatalog } from "../plugins/airtableProvider";
import AppPanel from "../components/AppPanel";
import Catalog from "../components/Catalog";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6)
	}
}));

const Dashboard = () => {
	const [productsCatalog, setProductsCatalog] = useState([]);
	const classes = useStyles();

	useEffect(() => {
		getAirtableCatalog().then(response => {
			setProductsCatalog(response);
		});
	}, []);

	return (
		<section>
			<AppPanel />

			<main>
				<section className={ classes.heroContent }>
					<Container maxWidth="sm">
						<Typography
							component="h1" variant="h2"
							align="center" color="textPrimary"
						>
							Resonance Products
						</Typography>
					</Container>
				</section>

				<Catalog catalog={ productsCatalog } />
			</main>
		</section>
	);
};

export default Dashboard;