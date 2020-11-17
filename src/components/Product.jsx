import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles(() => ({
	card: {
		height: "100%",
		display: "flex",
		flexDirection: "column"
	},
	cardMedia: {
		paddingTop: "56.25%",
	},
	cardContent: {
		flexGrow: 1,
	}
}));

const Product = ({ product }) => {
	const classes = useStyles();

	return (
		<Grid item xs={ 12 } sm={ 6 } md={ 4 }>
			<Card className={ classes.card }>
				<CardMedia
					className={ classes.cardMedia }
					image={ product.picture[0].url }
					alt={ product.name }
				/>

				<CardContent className={ classes.cardContent }>
					<Typography
						gutterBottom variant="h5"
						component="h2"
					>
						{ product.name }
					</Typography>
					<Typography>{ product.inStock ? "In Stock" : "Sold Out" }</Typography>
					<Typography>${ product.unitCost.toFixed(2) }</Typography>
				</CardContent>

				<CardActions>
					<Button size="small" color="primary">Request Information</Button>
				</CardActions>
			</Card>
		</Grid>
	)
};	

export default Product;