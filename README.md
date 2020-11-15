# Resonance Interview: Private Resonance E-Commerce Site

## Requirements
- Simple User Sign In and Sign Up Page (Credential Stored in the Base) using Encryption
- Render entire Resonance Catalog.
- Request more information on specific product; send the information about the selected product to the user and to `techpirates@resonance.nyc`;
- For test purposes please do not send the emails to the `techpirates`.

## Notes

### Concerns
- How will we show each product in the catalog?
- How do we send an email through the app?
- How to implement proper `Sign In` and `Sign Up` pages?
- How do we manage encryption for the `Sign In` and `Sign Up` pages?
- How do we safely store variables? (Such as API keys)

### Steps
1. We can see all the products from the catalog (No need to sign in).
2. If I click a product, it will send me an email with the product info.
3. I can log in to the website using one of the already stored email and password pairs.
4. I can register a new pair of email and password and it will be stored for further access.

#### Step 1.
- What are our products?
- Can we have a way to filter them? (Provider, type)
- How do we display products if they have multiple pictures?

```
	[   P   ]	 Name
	[   I   ]	 Vendor
	[   C   ]	 Price + In Stock
	[   T   ]	 
	[   U   ]	 Description
	[   R   ]	 Designer
	[   E   ]	 
	[   S   ]	 Size
						 Materials
		[Request Info]
```

#### Step 2.
Prepare a good email template with somewhat corporate jargon.

```py
f"""
Hi {user['First Name']},

Thank you for showing interest in out {product['Title']}. 

# Product details.

Best regards,

The ThriveHive Team


"""
```
#### Step 3.
#### Step 4.
