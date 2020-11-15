import React from "react";
import styled from "styled-components";

const ProductSection = styled.section`
	padding: 1rem 0.75rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: white;
	border-radius: 2.5rem 0px;
	box-shadow:
  	0 5.5px 10px rgba(0, 0, 0, 0.01),
  	0 44px 80px rgba(0, 0, 0, 0.02)
	;
`;

const ProductTitle = styled.h1`
	text-align: center;
	font-size: 1.2em;
	font-weight: 600;
`;

const ProductImage = styled.img`
	width: auto;
	height: auto;
	max-width: 300px;
	max-height: 200px;
	
`;

const ProductInfo = styled.section`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
`;

const ProductCost = styled.span`
	margin-bottom: 0.75rem;
	font-size: 1.1em;
	font-style: italic;
`;

const ProductStock = styled.span`
	background-color
`;

const ProductButton = styled.span``;

const Product = ({ product }) => {
	const {
		name, picture, description,
		vendor, unitCost, inStock,
		size, materials
	} = product;

	
	return (
		<ProductSection>
			<ProductImage src={ picture[0].url } alt={ name } />
			<ProductTitle>{ name }</ProductTitle>
			<ProductCost>${ unitCost.toFixed(2) }</ProductCost>
			<ProductInfo>
				<ProductStock>{ inStock ? "In Stock" : "Sold Out" }</ProductStock>
				<ProductButton>Request Information</ProductButton>
			</ProductInfo>
		</ProductSection>
	)
};	

export default Product;