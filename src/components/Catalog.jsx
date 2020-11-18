import React from "react";
import Product from "./Product/index";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8)
	}
}));

const Catalog = ({ catalog }) => {
	const classes = useStyles();

	return (
		<Container className={ classes.cardGrid } maxWidth="md">
			<Grid container spacing={ 6 }>
				{ catalog.map((product) => (
					<Product key={ product.id } product={ product } />
				)) }
			</Grid>
		</Container>
	);
};

export default Catalog;