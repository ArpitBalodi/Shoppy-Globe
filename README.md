# ShoppyGlobe

ShoppyGlobe is a modern e-commerce web application that allows users to browse, add products to their cart, and place orders. It features a simple and intuitive interface for online shopping, with a seamless experience across desktop and mobile devices.

## Features

- **Product Browsing:** Users can view a wide variety of products across different categories.
- **Search Functionality:** Users can search for products by name, category, brand, or price.
- **Cart Management:** Users can add and remove products from the shopping cart.
- **Checkout Process:** Users can provide contact information and place orders.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **State Management:** Utilizes Redux for managing global state (cart, products, etc.).

## Tech Stack

- **Frontend:**
  - React.js
  - Vite
  - React Router
  - Redux Toolkit
  - CSS for styling

## Usage

- **Home Page:** Displays a list of products fetched from the API. Users can search and filter products.
- **Product Details:** Clicking on a product leads to its detailed page, where users can see more information and add it to the cart.
- **Cart Page:** Displays all the items in the cart. Users can remove items and proceed to checkout.
- **Checkout Page:** Users can provide their contact information and place an order. An order confirmation message is shown on successful checkout.

## Redux Store

The project uses Redux Toolkit to manage the global state. The main slices are:
- **Cart Slice:** Handles the state of the cart, including adding and removing items.
