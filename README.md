

# **Ecommerce Follow-Along**

### **Welcome!**

The **Ecommerce Follow-Along** is an exciting, hands-on project where you’ll learn to build a complete e-commerce platform using the MERN stack. With guidance from a mentor, you’ll dive into creating APIs, setting up user authentication, designing databases, and crafting a reliable backend with Node.js and Express.

---

## **Why Use the MERN Stack?**

The MERN stack is one of the most popular tools for building web applications—and for good reason!  
- It’s **JavaScript all the way**: one language for both the frontend and backend, making it perfect for beginners.  
- It’s **powerful and efficient**: everything you need to build a fast, scalable app.  

Here’s a quick breakdown of what makes up the MERN stack:  
- **MongoDB**: A flexible database for storing your app’s data.  
- **Express**: A framework that makes backend development a breeze.  
- **React**: A library for creating beautiful, interactive user interfaces.  
- **Node.js**: A runtime that lets you run JavaScript on the server.

---

## **What Will You Build?**

This project is all about creating a fully functional e-commerce platform. Here’s what you’ll be working on:

### **1. RESTful APIs**
APIs are the bridge between the frontend and backend. You’ll build APIs to:  
- Let users sign up, log in, and stay secure.  
- Manage products—add, update, and retrieve details.  
- Handle customer orders smoothly and efficiently.  

All data will be managed using MongoDB and formatted as JSON for easy use and testing.

### **2. Database Design**
You’ll design the structure of the app’s database, organizing it into collections like:  
- **Users**: To keep track of customer details.  
- **Products**: To manage inventory and product info.  
- **Orders**: To connect customers with their purchases.

### **3. Secure Authentication**
You’ll learn how to keep the platform safe by:  
- Verifying user identities.  
- Protecting sensitive data like passwords and orders.  

---

## **What Will You Learn?**

By the end of this project, you’ll be able to:  
- Build APIs that work seamlessly in real-world apps.  
- Set up a solid backend with Node.js and Express.  
- Design organized and efficient databases using MongoDB.  
- Add secure login and authentication features.  
- Use React to create a sleek, user-friendly interface.

---

## **MILESTONE 3**

Successfully connected to mongoDB database

## **MILESTONE 4**

Added Login page

## **MILESTONE 5**

Added Signup Page

## **MILESTONE 6**

Added Login Page

## **MILESTONE 7**

Taking in user information and storing it securely

## **MILESTONE 8**

Added Home page

## **MILESTONE 9**

Added a create-product page

## **MILESTONE 10**

Added backend functionality for the create product page

## **MILESTONE 11**

Changed Home page

## **MILESTONE 12**

 Created a my-Products page that displays all the products added by a specific user based on their email

## **MILESTONE 13**

Added Functionality to edit the uploaded products

## **MILESTONE 14**

Added Functionality to delete the uploaded products

## **MILESTONE 15**

Created a new ```NAV``` component which contains links to the Home page, My products page, add products page and the cart page

## **Milestone 16**

Create a Product Info Page

## **Milestone 17**

Implementing cart functionality, the goal is to store product details in a user's cart and create an endpoint to receive and store these details in the database.

## **Milestone 18**

Working on backend functionality for the cart. The goal is to create endpoints that handle requests from the cart page and retrieve product details for a user’s cart.

## **Milestone 19**

Build a cart page that displays products inside the cart using the endpoint created in Milestone 18.

## **Milestone 20**

Create an endpoint to send user data (including profile photo, name, email, and address).

## **Milestone 21**

Create a frontend form that will take inputs for country, city, address1, address2, zip code, and address type.
Will also display address if given.

## **Milestone 22**

Create a backend endpoint that receives an address from the frontend and stores it inside the user's profile in the database.

## **Milestone 23**

Added a page to select address during cart checkout

## **Milestone 24**

Added a page to confirm order and order details while checking out

## **Milestone 25**

created backend endpoint to handle order placement

## **Milestone 26**

Created an endpoint that takes a user's email and fetches the user's orders

## **Milestone 27**

Implementing the My Orders Page for Seamless Order Tracking

## **Milestone 28**

Added a cancel order feature

## **Milestone 29**

Integrated the PayPal payment gateway, allowing users to choose between Cash on Delivery (COD) or online payment via PayPal.

## **Milestone 30**

Created a PayPal Sandbox Account
Visited developer.paypal.com, created a sandbox account, and grabbed the User ID.

Obtained Client ID
Generated sandbox client ID — used it to connect my app to PayPal’s services.

Installed the PayPal React Package
npm install @paypal/react-paypal-js

## **Milestone 31**

Successfully implemented Redux for global state management in React, enabling centralized storage and access of user data across components while mastering core concepts like actions, store configuration, and state selectors.

## **Milestone 32**

Redux implementation successfully integrated, allowing for global state management of user email across multiple pages while eliminating prop drilling.

## **Milestone 32**

<<<<<<< HEAD
Implemented secure JWT authentication by generating tokens with user info, setting expiration, and storing them in HTTP-only cookies to manage sessions and enable protected routes.
=======
By the end of this milestone, you’ll:  
- Understand how to validate user credentials during login.  
- Learn how to compare encrypted passwords with user inputs securely.

---

## Why Do We Encrypt Passwords? 🛡️

Here’s why password encryption is such a big deal:  
1. **Protect User Data:** Even if the database is compromised, passwords remain safe.  
2. **Privacy:** Passwords won’t be stored in plain text (a major security no-no).  
3. **Compliance:** Meets standards like GDPR and PCI-DSS.  
4. **Prevents Password Theft:** Hashed passwords are tough to crack, which keeps things secure.

---

## How Does Login Authentication Work? 🔑

Here’s a quick breakdown of the login process:

1. **User Enters Their Credentials:**  
   - On the login page, users type their email/username and password.

2. **Fetch User Data from the Database:**  
   - The backend checks for the user in the database using the provided email/username.  
   - If no user is found, the system responds: *"User does not exist."*

3. **Compare Encrypted Passwords:**  
   - The system processes the entered password using the same hashing algorithm (like bcrypt).  
   - The hashed password is then compared with the one stored in the database.  
   - If the hashes match, login succeeds. If not, the user gets an error.  

**Fun fact:** Passwords are not "decrypted" because hashing is a one-way process. Instead, hashes are matched!

---

## Steps for Milestone 7 📝

1. **Build the Login Endpoint:**  
   - Accept user credentials (email/username and password).  
   - Retrieve the user’s data from the database.  

2. **Validate the Password:**  
   - Use bcrypt (or a similar library) to hash the input password.  
   - Compare the hashed password to the stored one.  
   - Authenticate the user if they match.  

---

## * Milestone 8 *
In **Milestone 8**, we’ll build a **reusable card component** and design a **homepage** to display product cards.

---

## 🎯 Goals
- Create reusable **card components**.
- Dynamically display cards on the homepage.

---

## Why Card Components?
- **Show Products Clearly**: Neat and appealing display.  
- **Reusable Design**: Use across pages.  
- **Better UX**: Simplifies browsing.  
- **Organized Layout**: Clean homepage structure.

---

## Steps

### 1. Build the Card Component
- Add props for product **name**, **image**, and **price**.

### 2. Design Homepage Layout
- Use **grid** or **flexbox** for a neat arrangement of cards.

---
# 📦 Product Form Creation (Milestone 9)
# Milestone **9**

---

## 🤔 Why Build a Product Form?  
- The product form is crucial for collecting detailed information about each product.  
- These details will be stored in the database and displayed on the product homepage we created in the previous milestone.  
- This task forms the foundation of your product management feature.  

---

## 📝Complete Milestone 9  

1. **Create the Form for Products**  
   - Design a frontend form that collects all the necessary product details (e.g., name, price, description).  

2. **Handle Multiple Images**  
   - Add functionality to allow users to upload multiple product images.  

---
# 🛠️ Mongoose Schema and Endpoint Creation (Milestone 10)

# **Milestone 10,** 

---

## 📚 What I have Done:  

### **1. Product Schema**  
- Define the structure for your product data, including fields like:  
  - **Name**: The name of the product.  
  - **Description**: A short overview of the product.  
  - **Price**: The product price.  
  - **Image URLs**: URLs for product images.  
- Add **validations** for each field, such as:  
  - Making required fields mandatory.  
  - Ensuring correct data types (e.g., strings, numbers).  

### **2. Endpoint Creation**  
- Build a `POST` endpoint that will:  
  1. Accept product data from the frontend.  
  2. Validate the incoming data using the schema.  
  3. Save the valid data into your MongoDB database.  

---

## 🔒 Why Validation Matters  

- **Data Integrity**: Ensures only clean, accurate, and valid data gets stored in the database.  
- **Error Prevention**: Helps catch mistakes early, improving application reliability.  

---
# Milestone 11: Fetch and Display Products 📝

## Overview
In this milestone, we will implement an API endpoint to send all product data to the frontend. On the frontend, we will fetch this data and dynamically render it using the Product Card component.

## Steps to Complete Milestone 11

### Backend (API Endpoint)
1. Create a new API route in your backend server to fetch all product data.
2. Query the database to retrieve all products.
3. Send the product data as a JSON response.

#### Example (Node.js with Express & MongoDB)
```javascript
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products" });
    }
});
```

### Frontend (Fetching Data & Displaying Products)

1. Write a function to fetch product data from the API.
2. Store the fetched data in a state variable.
3. Pass the data to the Product Card component and render it dynamically.

#### Example (React)
```javascript
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            {products.map(product => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
```

### Product Card Component
Ensure that the `ProductCard` component correctly receives and displays the product data.

```javascript
const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
};

export default ProductCard;
```

## Summary
✅ Created an API endpoint to fetch all products.
✅ Implemented a function to retrieve product data in the frontend.
✅ Displayed the products dynamically using the `ProductCard` component.

Milestone 11 complete! 🎉

---

# Milestone 12: My Products Page 🌟

## Milestone 12! 🌟

In this milestone, we will create a "My Products" page that displays all the products added by a specific user based on their email. We will write an API endpoint that fetches products associated with the logged-in user's email, stored in MongoDB.

--

## Steps for Milestone 12 📝

### Backend (Filtering Products by User Email)
1. Create a new API route in the backend to fetch products filtered by the user's email.
2. Query MongoDB to retrieve products that match the logged-in user's email.
3. Send the filtered product data as a JSON response.

#### Example (Node.js with Express & MongoDB)
```javascript
app.get('/api/my-products', async (req, res) => {
    try {
        const { email } = req.query;
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }
        const products = await Product.find({ userEmail: email });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products" });
    }
});
```

### Frontend (Fetching and Displaying User-Specific Products)

1. Write a function to fetch product data for the logged-in user.
2. Store the fetched data in a state variable.
3. Pass the data to the Product Card component and render it dynamically.

#### Example (React)
```javascript
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const MyProducts = ({ userEmail }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchMyProducts = async () => {
            try {
                const response = await fetch(`/api/my-products?email=${userEmail}`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        if (userEmail) {
            fetchMyProducts();
        }
    }, [userEmail]);

    return (
        <div>
            {products.map(product => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
    );
};

export default MyProducts;
```

### Product Card Component
Ensure that the `ProductCard` component correctly receives and displays the product data.

```javascript
const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
};

export default ProductCard;
```

## Summary
✅ Created an API endpoint to fetch user-specific products.
✅ Implemented a function to retrieve filtered product data in the frontend.
✅ Displayed the products dynamically using the `ProductCard` component.

This lesson helps in understanding how to filter data with specific constraints and send it to the client efficiently. 🎯

Milestone 12 complete! 

---


# Milestone 13 - Edit Uploaded Products 🌟

Today, we will add functionality to edit the uploaded products. We will add an edit button and then write a backend endpoint to update the new details inside the MongoDB database.

## Learning Goals 🎯

- How to write an endpoint that updates existing data in MongoDB.  
- How to auto-fill the form with previous data and provide an option to edit.

## Steps for Milestone 13 📝

1. Write an endpoint that receives new data and updates the existing data inside MongoDB.  
2. In the frontend, add an edit button to the product card.  
3. When the edit button is clicked, send the existing data to the form, auto-fill it, and allow editing.  
4. Save the updated data back to the database. 


---

# Milestone 14 - Delete Products from MongoDB 🗑️

In this milestone, we will implement functionality to delete a product using its specific ID from MongoDB.

## Learning Goals 🎯


- How to write an endpoint that deletes a product using its ID from MongoDB.

## Steps for Milestone 14 📝

1. Write an endpoint that deletes data from MongoDB using the product ID.  
2. In the frontend, add a delete button to the product card.  
3. When the delete button is clicked, send the product ID to the server endpoint.  

**Note:** This lesson will help you understand the delete operation in detail.  

---

# Milestone 15: Navigation Component 📝

### 1. Create a New `Nav` Component
- The `Nav` component should contain links to the following pages:
  - Home
  - My Products
  - Add Product
  - Cart

### 2. Make the Navbar Responsive
- Ensure the `Nav` component is fully responsive across all screen sizes.
- Use CSS media queries or a framework like Tailwind CSS or Bootstrap for styling.

### 3. Add the `Nav` Component to All Pages
- Include the `Nav` component in all pages of the application.
- Implement smooth navigation to ensure a seamless user experience.

## Learning Outcomes
- Understand  to create a navigation bar in a web application.
- Learn to implement responsive design for better usability.
- Enhance your skills in linking multiple pages for smooth navigation.

---

# Milestone 16 - Product Info Page  

### will create a product info page that displays all the product data, allows users to choose the quantity, and includes an "Add to Cart" button.  

## Learning Goals 🎯  
By the end of this milestone:  
- How to create a new page to display each product.  
- How to add a quantity selector and an "Add to Cart" button.  

## Steps for Milestone 16 📝  
1. Create a new page that displays all the product data.  
2. Implement a quantity selector for each product.  
3. Add an "Add to Cart" button to allow users to add products with the selected quantity.


---

# Milestone 17: Cart Functionality

## Overview
In this milestone,work on implementing cart functionality. The goal is to store product details in a user's cart and create an endpoint to receive and store these details in the database.

## Steps for Milestone 17 📝

### 1. Edit the User Schema to Store Cart Products
- Modify the user schema to include a field that will hold product details in the cart.

### 2. Write the Cart Schema to Store Products
- Create a new schema for the cart that can store product details such as product ID, quantity, and other necessary attributes.

### 3. Write an Endpoint to Receive and Store Product Details in the Cart
- Create a new endpoint that will receive product details from the frontend and store them in the database, specifically in the cart.

---

# Milestone 18: Cart Functionality - Backend Endpoints

## Overview
In this milestone, work on backend functionality for the cart. The goal is to create endpoints that handle requests from the cart page and retrieve product details for a user’s cart.

## By the End of This Milestone,

- Create an endpoint to receive requests from the cart page.
- Create a backend endpoint to fetch all the products inside the cart based on the user's email.

## Steps for Milestone 18 📝

### 1. Create a Backend Endpoint for Cart Page
- Implement an endpoint that will receive requests from the frontend (cart page) and store/update products in the user's cart.

### 2. Write an Endpoint to Get Products Inside Cart for a User
- Create a new endpoint that will fetch and return all the products inside the cart for a specific user, identified by their email.

---

# 🛒 Cart Functionality - Milestone 19

## 🎯 Learning Goals
- Build a cart page that displays products inside the cart using the endpoint created in Milestone 18.
- Implement an option to increase and decrease product quantity using `+` and `-` buttons.
- Develop backend endpoints to handle quantity updates dynamically.

## 📝 Steps for Milestone 19
1. **Create the Cart Page**
   - Develop the frontend page to display products in the cart.
   
2. **Add Quantity Controls**
   - Implement `+` and `-` buttons for each product to allow users to adjust the quantity.
   
3. **Set Up Backend Endpoints**
   - Write API endpoints to increase and decrease product quantity based on user actions.



   ---

   # Milestone 20 - User Profile Page

## Steps to Complete 📝

### Backend:
1. Create an endpoint to send user data (including profile photo, name, email, and address).

### Frontend:
2. Create a profile page to display user details.
3. Display the following information in one section:
   - Profile photo
   - Name
   - Email
4. In another section, display the user's address:
   - If an address exists, display it.
   - If no address is found, show: **"No address found"**
   - Add a button labeled **"Add address"** to allow users to add an address.

### Notes:
- Ensure proper API integration between frontend and backend.
- Maintain a clean and responsive UI.
- Handle cases where the user has no address data gracefully.

 ----

# Milestone 21

Milestone 21! 🌟

## Learning Goals 🎯
- Create a frontend form that will take an address.
- Take inputs for country, city, address1, address2, zip code, and address type.

## Steps for Milestone 21 📝
1. Create an address form frontend page.
2. Create a state that will store the input address.
3. When clicking on 'Add Address' in the profile, it should navigate to this form page.

---

# 🚀 Milestone 22: Saving Addresses in User Profiles  

👋  
## 🎯   
By the end of this milestone, you'll know how to:  
✅ Create a backend endpoint that receives an address from the frontend.  
✅ Store that address inside the user's profile in the database.  

## 📝 Steps to Complete This Milestone  
1. Create an API endpoint that accepts an address from the frontend form.  
2. Add the received address to the `addresses` array inside the user collection in the database.  
3. Test the endpoint to make sure it’s working as expected.  

---
=======
# Milestone 23 🚀

## Welcome! 🌟
Hey there! Ready to level up your project? Today, we’re working on two important things:
- Adding a **Place Order** button inside the cart.
- Creating a **Select Address** page in the frontend.
- Setting up a **Mongoose schema** to store order details in the backend.

## What You’ll Learn 🎯
By the end of this milestone
- Have a working **Place Order** button that takes users to the Select Address page.
- Build a page that shows all saved addresses and lets users pick a delivery address.
- Write a backend schema to store order details properly.

## Steps to Complete 📝
1. **Add the Place Order button** inside the cart page. When clicked, it should take the user to the Select Address page.
2. **Build the Select Address page** to display all saved addresses and allow users to choose one.
3. **Create a backend API endpoint** to fetch and return all addresses associated with a user.

---

# Milestone 24 🚀

## Hey Kalvians! 🌟  
Welcome back! Today, I’m building an **Order Confirmation** page to bring everything together. This page will show the products I’m ordering, the delivery address I selected, and the total price details. 

## What I’ll Accomplish 🎯  
By the end of this milestone, I will:
- Create an **Order Confirmation** page.
- Display all the products I’m ordering.
- Show the delivery address I chose.
- Calculate and display the total order value.
- Add a **Place Order** button at the bottom.

## My Game Plan 📝  
1. **Show all the products** I’m ordering.
2. **Display the delivery address** I selected.
3. **Calculate and present the total cart value.**
4. **Add a Place Order button** at the bottom for final confirmation.

Let’s do this! 🚀

---

---


# Milestone 25 - Backend Endpoint for Placing Orders 🚀

Welcome to **Milestone 25** — today, I’m building a backend endpoint to handle order placements. 🎯

## 🎯 Learning Goals
By the end of this milestone, I will:
- Create a backend endpoint that helps place orders.
- Understand how to manage user and product data effectively.
- Store order details in MongoDB using the order schema I made earlier.

---

## 🛠️ Steps to Complete Milestone 25

1. **Create the Endpoint:**
   - I’ll set up a backend route that takes product details, user info, and address data.

2. **Retrieve User Details:**
   - I’ll extract the user’s email from the request.
   - Using the email, I’ll fetch the user’s `_id` from the database.

3. **Handle Product Orders:**
   - For each product, I’ll create a separate order entry.
   - I’ll keep the same address for all product orders.

4. **Save Orders to MongoDB:**
   - I’ll use my order schema to structure and store each order in the `orders` collection.

5. **Test the Endpoint:**
   - I’ll make sure the endpoint works smoothly — handling data properly and saving orders correctly.

---

## 📥 Submission Guidelines

1. **Push Code to GitHub:**
   - I’ll commit and push everything to a publicly accessible GitHub repository.

2. **Update README:**
   - I’ll summarize my progress for this milestone (this file covers that!).

3. **Submit the Link:**
   - I’ll share my GitHub repository link in the assignment submission section.

---
# Milestone 26: Building an Orders Endpoint

Hey there! 👋

This milestone is all about creating an endpoint to fetch a user's orders. Let me walk you through the steps I followed to get this working smoothly.

## 🎯 Goal
The goal is to create an endpoint that takes a user’s email, retrieves their `_id`, and fetches all their orders — then returns those orders in the response.

## 🚀 Steps I Took

1. **Create the Endpoint**  
   - I set up a new route that accepts a `POST` or `GET` request (depending on the API style I’m aiming for) and expects the user’s email in the request body or query params.

2. **Extract User's `_id`**  
   - Using the email provided, I queried the database to fetch the user’s `_id`.  
   - If the email isn’t found, I return a clean, friendly error message — no cryptic errors here! 💪  

3. **Retrieve User's Orders**  
   - Once I had the user’s `_id`, I queried the `orders` collection (or whatever collection I’m using for orders) to pull all orders tied to that user.

4. **Send Back the Orders**  
   - Finally, I bundled the orders into a neat JSON response and sent it back. If no orders were found, I made sure to handle that gracefully with a message like, "Looks like this user hasn’t placed any orders yet."

## 🛠️ Error Handling  
   - **Invalid Email:** If the email doesn’t exist, I made sure to return a 404 with a friendly message.  
   - **No Orders:** If the user exists but hasn’t placed any orders yet, the response still succeeds — but it’s an empty array with a helpful message.  
   - **Server Errors:** I wrapped everything in a try-catch to handle any unexpected issues.  

----
Milestone 27: Implementing the My Orders Page for Seamless Order Tracking

# 📦 My Orders Page

## 🌟 Overview

The My Orders page allows users to view all their past and ongoing orders in one place. This page fetches order details from the backend and displays them in an organized manner.

## ✨ Features

- 🔄 Fetch and display all user orders by making a GET request to the `/my-orders` endpoint.
- 📧 Orders are retrieved based on the user's email.
- 📋 Orders are presented in a user-friendly format.
- 🏠 Integrated into the navigation bar for easy access.

## 📝 Implementation Steps

### 🖥 Create the My Orders Page
Develop a React component to display user orders.

### 📡 Fetch User Orders
- Send a GET request to the `/my-orders` endpoint.
- Pass the user’s email to retrieve their orders.

### 📑 Display Orders
Format and show the fetched data in a structured layout.

### 🔗 Add Page to Navbar
Ensure smooth navigation by linking the My Orders page in the navbar.

---

Milestone 28: ❌ Cancel Order Feature

## 🌟 Overview

The Cancel Order feature allows users to cancel their placed orders. This involves updating both the frontend and backend to support order cancellation.

## ✨ Features

- 🛑 Add a Cancel Order button next to each active order on the My Orders page.
- 🚫 The cancel button will be hidden for orders that are already canceled.
- 🔄 Create a backend endpoint to handle order cancellation.
- ✅ Update the order status to "Canceled" in the database.

## 📝 Implementation Steps

### 🖥 Update My Orders Page
- Add a Cancel Order button next to each order.
- Hide the button for orders that are already canceled.

### 🔧 Create Cancel Order Endpoint
- Develop a new POST endpoint: `/cancel-order`.
- Receive `orderId` in the request payload.
- Fetch the order using this ID, update its status to "Canceled," and save it.

### 🔄 Integrate API with Frontend
- On clicking the Cancel Order button, send a request to the backend.
- Update the UI to reflect the canceled order status.

## 🎯 Conclusion

This milestone enhances the My Orders page by allowing users to cancel their orders when needed. It helps in understanding how to modify order statuses and manage data updates dynamically.

---

# MileStone 29: PayPal
# Setting Up PayPal for Online Payments

## 1. Create a PayPal Developer Account
First things first, head over to the **PayPal Developer Dashboard** and create a PayPal account if you haven’t already. This will give us access to the developer tools we need.

## 2. Set Up a Sandbox Account
Once you're logged in, navigate to the **Sandbox Accounts** section. Here, you’ll find a test account created by PayPal for development purposes.

- Copy the **User ID** of this sandbox account and save it for later.
- Inside the sandbox account details, locate your **Client ID**, copy it, and keep it safe. We’ll need this soon.

## 3. Implement Payment Options in the Order Confirmation Page
Now, let’s work on adding the payment options to our order confirmation page.

- We need two payment methods:
  1. **Cash on Delivery (COD)**
  2. **Online Payment using PayPal**
- Create radio buttons to let users select between **COD** and **Online Payment**.
- If the user selects **Online Payment**, the PayPal payment buttons should appear dynamically on the page.

---

# 💸 Integrating PayPal Payments – 

## 🧠 What I Learned
- How to use the PayPal API for payment integration
- How to enable online payments in a React app
- How to use `react-paypal-js` to embed PayPal payment options

## 📝 Milestone 30 – My Steps

1. **Created a PayPal Sandbox Account**  
   I visited [developer.paypal.com](https://developer.paypal.com/), created a sandbox account, and grabbed the User ID.

2. **Got My Client ID**  
   Inside the PayPal developer dashboard, I generated my sandbox client ID — this is what I used to connect my app to PayPal’s services.

3. **Installed the PayPal React Package**  
   I installed the `@paypal/react-paypal-js` package using npm:
   ```bash
   npm install @paypal/react-paypal-js
---
# Milestone 31 – Global State Management with Redux 🎯

Hey there! 👋  
This milestone was all about learning how to use Redux for managing global state in a React app. It felt like leveling up from local component state to something way more powerful and scalable.

-

## 🧠 What I Learned

By the end of this, I figured out how to:

- Use **Redux** for global state management across the entire app.
- Set up a **Redux store** to handle shared states (in this case, user email).
- Dispatch actions and write reducers to update that global state cleanly.

-

## 🛠️ Steps I Took

Here’s what I did, step by step:

1. Installed the `react-redux` package using npm.
2. Created a new folder named `store` and added two files:
   - `store.js`
   - `userActions.js`
3. The goal was to store the **user’s email** in a global state.
4. In `store.js`, I configured a Redux store using a `userReducer` function that handles the user email logic.
5. Inside `userActions.js`, I wrote a `setEmail` function to help update the email state globally.
6. Finally, in `index.js`, I wrapped the `App` component with the `<Provider>` component and passed the store as a prop.

---
# 🧠 Milestone 32 - Follow-Along Project
## 🎯 What I Learned

By completing this milestone, I learned how to:

- Use **Redux** to manage global state in a React application.
- Store data (like email) using the `dispatch` method.
- Access that stored data using `useSelector` across multiple components.

---

## 🛠️ What I Did

1. On the **Login page**, I used `dispatch` to store the user's email in the global Redux state.
2. On the remaining pages, I used `useSelector` to retrieve and use that email wherever needed.


---

# 🔐 Milestone 33 & 34: Implementing JWT Authentication

This guide walks you through setting up JWT-based authentication in your web application using cookies. By the end, you'll be able to create, store, and validate tokens to protect routes and restrict access for unauthorized users.

---

## 🧩 Milestone 33: Creating & Storing the JWT Token

### 1. Install the `jsonwebtoken` Package
First, install the `jsonwebtoken` package using NPM:

```bash
npm install jsonwebtoken
```

### 2. Generate a Token Using User Info
After a successful login, create a token that includes user-specific details like email and ID:

```js
const jwt = require('jsonwebtoken');

const token = jwt.sign(
  { email: user.email, id: user._id },
  process.env.JWT_SECRET,
  { expiresIn: '1d' } // Token will expire in 1 day
);
```

### 3. Set Token Expiry with `maxAge`
Define the maximum age for the cookie to control how long the user stays logged in:

```js
const maxAge = 24 * 60 * 60 * 1000; // 1 day in milliseconds
```

### 4. Store the Token in a Cookie
Send the JWT token to the browser by attaching it to a cookie in the server response:

```js
res.cookie('token', token, {
  httpOnly: true,
  maxAge: maxAge,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'Strict',
});
```

This way, the token is stored securely and automatically sent with each request.

---

## 🔒 Milestone 34: Validating the Token & Protecting Routes

### 1. Retrieve Token from Browser Cookie
On each page load or API call, the token will be included in the request if it's stored in an HTTP-only cookie.

### 2. Middleware to Validate JWT on Backend
Create a reusable middleware function that verifies the token and attaches user data to the request:

```js
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401); // Unauthorized

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403); // Forbidden
    req.user = decoded;
    next();
  });
}
```

Use this middleware on any route you want to protect.

### 3. Restrict Frontend Access to Logged-in Users
On the frontend, ensure each protected page checks if the user is authenticated. If not, redirect them to the login page.

You can do this by:
- Fetching a protected route (e.g. `/api/user`) and checking for an error.
- Creating a route guard or wrapper component that handles this logic.

---



- ✅ How to generate and sign JWT tokens
- ✅ How to store tokens in cookies securely
- ✅ How to use middleware to validate tokens on the backend
- ✅ How to protect frontend routes based on authentication

> These steps form the foundation of a secure login system for your app.


---

# 🚀 Milestone 35: Deploying Your Full-Stack Application

In this milestone, you’ll learn how to deploy both your backend and frontend applications using popular deployment services. This ensures your app is accessible to the world, not just on your local machine.

---

## 🔧 Step-by-Step Instructions

### 1. Deploy Your Backend 🛠️
- Choose a deployment platform like **Render**, **Railway**, **Vercel (for serverless)**, **Heroku**, or **Cylic**.
- Push your backend code to GitHub (if not done already).
- Connect your repo to the deployment platform and follow its steps to deploy.
- Once deployed, you’ll get a live **backend URL** (e.g., `https://your-backend.onrender.com`).

### 2. Replace Localhost with Backend Deployment URL 🌐
- In your frontend code, wherever you made requests to `http://localhost:PORT`, **replace** it with your live backend URL.

Example:
```js
// Before
axios.get("http://localhost:5000/api/data");

// After
axios.get("https://your-backend.onrender.com/api/data");
```

### 3. Deploy Your Frontend 💻
- Use platforms like **Vercel**, **Netlify**, or **Firebase Hosting**.
- Connect your frontend repo and deploy.
- You’ll receive a live **frontend URL**.

### 4. Test Your Deployment ✅
- Visit both the frontend and backend URLs.
- Ensure API requests from frontend work correctly (check DevTools -> Network tab).
- Make sure cookies (if used) are transferred properly, especially in production (`withCredentials`, CORS, etc.).

---


