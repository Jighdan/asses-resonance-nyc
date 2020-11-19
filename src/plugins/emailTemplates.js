export const productInformationRequestTemplate = (product) => {
	const productImage = (imageUrl) => `<img src="${imageUrl}" style="width: 100%; height: auto;" />`;
	const productName = `<h1 style="font-size: 1.2em;">${product.name}</h1>`;
	const productImages = product.picture.map(image => productImage(image.url));
	const productPrice = `<h3 style="font-weight: 300; font-style: italic;">US$${product.unitCost}</h3>`;
	const productSize = `<h4 style="letter-spacing: 1.75px; font-weight: 200;">${product.size}</h4>`;
	const productDescription = `<p style="word-break: break-all;">${product.description}</p>`;

	return `
		<article style="box-sizing: border-box; padding: 1rem 2rem;">
			${productName}
			<section style="display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));">
				${productImages.join()}
			</section>

			${productPrice}
			${productSize}

			<section>
				${productDescription}
			</section>
		</article>
	`;
};

export const clientRequestTemplate = (payload) => {
	return `
		<table style="">
			<tr>
				<th>User ID</th>
				<td>${payload.userId}</td>
			</tr>
			<tr>
				<th>Product ID</th>
				<td>${payload.productId}</td>
			</tr>
			<tr>
				<th>Issued On</th>
				<td>${payload.date}</td>
		</table>
	`;
};