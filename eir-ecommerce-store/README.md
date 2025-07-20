# EIR (Elegant Iconnent Resources) E-commerce Store

Welcome to the EIR (Elegant Iconnent Resources) E-commerce Store project! This application is built using React and Vite, focusing on providing a seamless shopping experience for food items.

## Features

- **Modern and Elegant Design**: The store utilizes a contemporary color palette and responsive design to ensure a pleasant user experience on both desktop and mobile devices.
- **Theme Toggle**: Users can easily switch between light mode and dark mode for their convenience.
- **Shopping Cart Functionality**: 
  - Add and remove items from the cart.
  - Update item quantities and view the total price.
  - Checkout process that summarizes cart items and generates a pre-filled WhatsApp message for easy communication with the admin.

## Project Structure

```
eir-ecommerce-store
├── public
│   └── products.json         # Contains product data in JSON format
├── src
│   ├── assets                 # Static assets like images/icons
│   ├── components             # React components for the application
│   ├── context                # Context API for managing cart state
│   ├── hooks                  # Custom hooks for local storage
│   ├── styles                 # Tailwind CSS styles
│   ├── App.tsx                # Main application component
│   ├── main.tsx               # Entry point of the application
│   └── index.css              # Global CSS styles
├── package.json               # NPM configuration file
├── tsconfig.json              # TypeScript configuration file
├── vite.config.ts             # Vite configuration file
└── README.md                  # Project documentation
```

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd eir-ecommerce-store
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the development server**:
   ```
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Usage

- Browse through the food items and add your desired products to the cart.
- Use the shopping cart to manage your selections and proceed to checkout.
- The checkout process will generate a WhatsApp message summarizing your order, which you can send to the admin for processing.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.