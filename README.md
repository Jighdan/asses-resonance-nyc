# Resonance Interview: Private Resonance E-Commerce Site

## Requirements
- Simple User Sign In and Sign Up Page (Credential Stored in the Base) using Encryption
- Render entire Resonance Catalog.
- Request more information on specific product; send the information about the selected product to the user and to `techpirates@resonance.nyc`;
- For test purposes please do not send the emails to the `techpirates`.

## To-do
- When registering a new user, disallow if an user with the registered email exists.
- In the `Sign In` page, a `Forgot Password?` button that sends the user password to the user registered email.
- When user clicks on `Request Product Information` button, show a notification if email was sent.
- Improve email template using `HTML`.

### Concerns
- How will we show each product in the catalog?
- How do we send an email through the app?
- How to implement proper `Sign In` and `Sign Up` pages?
- How do we manage encryption?
- How do we safely store variables? (Such as API keys)

### Steps
1. We can see all the products from the catalog (No need to sign in).
2. If I click a product, it will send me an email with the product info.
3. I can log in to the website using one of the already stored email and password pairs.
4. I can register a new pair of email and password and it will be stored for further access.
