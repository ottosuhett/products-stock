# Products Stock Project

The Products Stock project is a web application developed using technologies such as Next.js, React, JavaScript, and Sass. It allows users to add products, display relevant information on a dashboard, and manage registered products.

## Features

### Product Registration
Users can register products by filling out a form with details like name, category, and quantity. The entered data is stored in localStorage to ensure it persists even after the page is closed.

### Dashboard
The main page of the application includes a dashboard displaying the following information:

- Total number of registered product categories.
- Total number of registered products.
- Quantity of products with up to 10 units.

### Table of Products with Up to 10 Units
The main page also displays a table containing products with quantities up to 10 units in stock.

### Items Page
The items page displays a table with all registered products. Each table item includes two buttons:

1. **Details:** Allows the user to access all the information provided during product registration.
2. **Delete:** Enables the user to remove a product from the list.

## Used Technologies

- Next.js
- React
- JavaScript
- Sass
- react-bootstrap
- react-icons
- localStorage: Local storage for data persistence between sessions.

## Automatic Updates
The project is designed to automatically update the dashboard and tables whenever a new product is registered or an existing product is removed. This provides a seamless and up-to-date user experience.

## Running the Project

1. Clone this repository.
2. Install the dependencies using your preferred package manager (npm or yarn).
3. Run the project with the command `npm run dev` or `yarn dev`.

I hope this description provides a clear overview of my Products Stock project and its features.

