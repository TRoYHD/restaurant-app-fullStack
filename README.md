# SherLock Restaurant Web Application

SherLock Restaurant is a full-stack web application built using Next.js, React, Prisma, PostgreSQL, and various other technologies. It provides a platform for users to browse and order food items from a restaurant menu, while also offering an admin interface for managing products and orders.
![Diagram](https://github.com/TRoYHD/restaurant-app-fullStack-M/blob/main/diagram-export-4-1-2024-11_58_48-PM.png?raw=true)

![Project Structure Design] https://app.eraser.io/workspace/0SVnjiOqm5fMG1a2wnaS?origin=share


## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Project Structure](#project-structure)
6. [API Endpoints](#api-endpoints)
7. [Database Schema](#database-schema)
8. [Authentication and Authorization](#authentication-and-authorization)
9. [State Management](#state-management)
10. [Styling and UI Components](#styling-and-ui-components)
11. [Testing](#testing)
12. [Deployment](#deployment)

## Features

- User registration and login with email and password or Google OAuth
- Browse food menu categorized by types (e.g., pizzas, burgers, pastas)
- View detailed information about each food item, including price and customization options
- Add items to the cart and manage cart quantities
- Place orders with delivery address and notes
- Admin panel for managing products (add, edit, delete) and viewing orders
- Order status tracking for users and admins
- Responsive design for mobile and desktop devices
- Real-time notifications for new orders using Firebase Cloud Messaging
- Integration with Stripe for payment processing

## Technologies Used

- Next.js: A React framework for building server-rendered and statically generated web applications
- React: A JavaScript library for building user interfaces
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript
- Prisma: An open-source database toolkit for TypeScript and Node.js
- PostgreSQL: A powerful, open-source relational database system
- NextAuth.js: An authentication library for Next.js applications
- Zustand: A small, fast, and scalable state management library for React
- Tailwind CSS: A utility-first CSS framework for rapid UI development
- Material-UI: A popular React UI framework for building responsive and customizable components
- Firebase: A platform for building web and mobile applications, used for real-time notifications and authentication
- Stripe: A payment processing platform for online businesses
- Jest: A JavaScript testing framework for unit and integration tests
- React Testing Library: A lightweight testing library for React components
- Vercel: A cloud platform for deploying static sites and serverless functions

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/sherlock-restaurant.git
   ```

2. Navigate to the project directory:

   ```bash
   cd sherlock-restaurant
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up the environment variables (see [Configuration](#configuration) section).

5. Run the database migrations:

   ```bash
   npx prisma migrate dev
   ```

6. Start the development server:

   ```bash
   npm run dev
   ```

7. Open your browser and visit `http://localhost:3000` to see the application.

## Configuration

Create a `.env` file in the root directory of the project and add the following environment variables:

```
DATABASE_URL=your_database_url
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_ID=your_google_oauth_client_id
GOOGLE_SECRET=your_google_oauth_client_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
```

Replace the placeholders with your actual configuration values.

## Project Structure

The project follows a standard Next.js project structure with additional directories for components, utils, and API routes. Here's an overview of the main directories and files:

- `pages/`: Contains Next.js pages and API routes
  - `api/`: API routes for handling server-side requests
    - `auth/`: Authentication-related API routes
    - `orders/`: Order-related API routes
    - `products/`: Product-related API routes
    - `stripe/`: Stripe-related API routes
  - `_app.tsx`: Custom App component for initializing global styles and providers
  - `_document.tsx`: Custom Document component for modifying the HTML document
  - `index.tsx`: The main landing page of the application
  - `menu/`: Menu-related pages for browsing food categories and items
  - `cart.tsx`: Cart page for managing and placing orders
  - `orders.tsx`: User orders page for viewing order history and status
  - `admin/`: Admin-related pages for managing products and orders
- `components/`: Reusable React components used throughout the application
- `utils/`: Utility functions and configuration files
- `prisma/`: Prisma-related files for database schema and migrations
- `public/`: Public assets such as images and fonts
- `styles/`: Global CSS styles and Tailwind CSS configuration
- `tests/`: Unit and integration tests using Jest and React Testing Library

## API Endpoints

The application provides several API endpoints for handling various functionalities. Here are the main API routes:

- `/api/auth/[...nextauth]`: NextAuth.js authentication route for handling user login and registration
- `/api/orders`: Endpoint for retrieving and creating orders
- `/api/orders/[id]`: Endpoint for updating order status
- `/api/products`: Endpoint for retrieving and creating products
- `/api/products/[id]`: Endpoint for retrieving, updating, and deleting a specific product
- `/api/stripe/create-payment-intent`: Endpoint for creating a Stripe payment intent
- `/api/stripe/webhook`: Endpoint for handling Stripe webhooks

## Database Schema

The application uses Prisma as the ORM and PostgreSQL as the database. The database schema is defined in the `prisma/schema.prisma` file. Here's an overview of the main models:

- `User`: Represents a user of the application, with fields for name, email, password, and role (customer or admin)
- `Product`: Represents a food item, with fields for title, description, price, image, and category
- `Category`: Represents a food category, with fields for name and slug
- `Order`: Represents an order placed by a user, with fields for user, products, total price, status, and delivery details
- `OrderItem`: Represents an item in an order, with fields for order, product, quantity, and price

The schema also includes relations between the models, such as one-to-many and many-to-many relationships.

## Authentication and Authorization

The application uses NextAuth.js for authentication and authorization. Users can sign up and log in using their email and password or through Google OAuth. The authentication flow is handled by the `/api/auth/[...nextauth]` API route.

User roles (customer or admin) are stored in the `users` table and are used to control access to certain features and pages. For example, only admin users can access the admin panel and manage products and orders.

## State Management

The application uses Zustand for state management. Zustand is a lightweight and fast state management library for React. It is used to manage the shopping cart state and other global application states.

The main state stores are defined in the `utils/store.ts` file. The `useCartStore` store manages the shopping cart state, including adding and removing items, updating quantities, and calculating the total price.

## Styling and UI Components

The application uses Tailwind CSS and Material-UI for styling and building the user interface. Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined classes for rapid UI development. Material-UI is a popular React UI framework that offers a set of customizable and responsive components.

The main layout components, such as the navigation bar and footer, are defined in the `components/` directory. Other reusable UI components, such as buttons, cards, and forms, are also located in the `components/` directory.

## Testing

The application includes unit and integration tests using Jest and React Testing Library. The tests are located in the `tests/` directory.

To run the tests, use the following command:

```bash
npm test
```

The tests cover various aspects of the application, including component rendering, user interactions, and API requests.

## Deployment

The application can be deployed to Vercel, a cloud platform for static sites and serverless functions. To deploy the application, follow these steps:

1. Create a Vercel account and connect your GitHub repository.
2. Configure the environment variables in the Vercel project settings.
3. Push your changes to the connected GitHub repository.
4. Vercel will automatically build and deploy the application.
