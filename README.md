[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/Ke_DgSzD)
# Pizza Online!

![Pizza Online!](pizza-frontend/src/image/readme.png)


Welcome to Pizza Online! Your favorite pizza delivered hot and fresh.

## Description

Pizza Online! is a web application where users can order their favorite pizzas online. The application consists of a backend built with Java and Spring Boot, and a frontend built with React and Bootstrap.



### Endpoints

- `POST /orders` - Create a new order
- `GET /orders` - Retrieve all orders
- `GET /orders/{id}` - Retrieve a specific order by ID
- `DELETE /orders/{id}` - Delete a specific order by ID
- `GET /pizzas` - Retrieve all available pizzas

### Order Model
An order consists of:
1. A unique code (generated automatically server-side)
2. A user first and last name (non-empty)
3. An address (street name, house number, city, all fields required)
4. A phone number (non-empty, 10 digits)
5. A list of pizzas (non-empty)

### Pizza Model
A pizza consists of:
1. Title
2. Price
3. Description
4. Image URL



### Directory Structure

- **public/** - Static files and the main HTML file.
- **src/** - Main source directory containing components and other resources.
  - **components/** - Contains all React components.
  - **App.js** - Main application component.
  - **index.js** - Entry point of the React application.

### Important Components

- `Home.js` - Landing page with a welcome message and a button to start a new order.
- `Menu.js` - Displays all available pizzas without the option to select quantities.
- `Order.js` - Contains the multi-step form to place an order.
- `MultiStepForm.js` - Manages the steps for placing an order including validation.
- `Cart.js` - Displays the cart summary until checkout.
- `OrderDetails.js` - Displays the details of a specific order.
- `OrderConfirmation.js` - Displays the order confirmation after checkout.
- `NavBar.js` - Navigation bar for the application.

## Usage

1. **Home Page:**
   - Click on "START NEW ORDER" to begin the ordering process.

2. **Order Process:**
   - Fill in the phone number, home address (street name, house number, city), and your name.
   - Select the pizzas you want to order and their quantities.
   - Review your order and click "Checkout" to place the order.

3. **Order Summary:**
   - The cart will display your selected pizzas and the total price. Click "Checkout" to finalize the order.

4. **Order Details:**
   - You can view the details of a specific order by its ID.

## Features

- Multi-step form for placing orders with validation.
- Responsive design using React and Bootstrap.
- Order details and summary display.
- Backend integration with Spring Boot to handle orders and pizzas.

## Contributing

Contributions are welcome! Please fork this repository and submit pull requests with your changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
