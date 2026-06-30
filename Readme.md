# FreeTube Backend API

A comprehensive, production-ready backend API built with **Node.js, Express.js, and MongoDB**. This project is inspired by the "Chai aur Code" backend series, focusing on standard industry practices, scalable architecture, and robust database management.

## 🚀 Key Features

* **Secure Authentication:** User registration, login, and secure session management using JWT (Access & Refresh tokens).
* **Media Handling:** Secure file uploads (images, videos) using **Multer** and cloud storage integration via **Cloudinary**.
* **Advanced Database Operations:** Complex queries and aggregation pipelines using **Mongoose** to handle relationships between users, videos, and subscriptions.
* **Standardized Error Handling:** Custom `ApiError` and `ApiResponse` utility classes for consistent and predictable API responses.
* **Modular Architecture:** Clean separation of concerns with dedicated folders for routes, controllers, models, and middlewares.
* **Asynchronous Error Catching:** Centralized `asyncHandler` wrapper to eliminate repetitive try-catch blocks in controllers.

## 🛠️ Tech Stack

* **Environment:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB & Mongoose
* **Storage:** Cloudinary
* **Middleware/Utilities:** Multer (file uploads), JWT (auth), bcrypt (password hashing), dotenv.

## 📁 Project Structure

```text
src/
├── controllers/      # Route logic (e.g., user.controller.js)
├── db/               # Database connection setup
├── middleware/       # Custom middlewares (auth, multer)
├── models/           # Mongoose schemas (User, Video, Subscription)
├── routes/           # API route definitions
├── utils/            # Reusable utilities (ApiError, ApiResponse, Cloudinary setup)
├── app.js            # Express app configuration
├── constants.js      # Global constants (DB name, etc.)
└── index.js          # Main application entry point
⚙️ Installation & Setup
Clone the repository:

git clone <your-repo-url>
cd <your-project-directory>

Install dependencies:
npm install

Set up Environment Variables:
Create a .env file in the root directory and configure the following variables:

PORT=8000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net
CORS_ORIGIN=*

ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=10d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

Run the development server:
npm run dev

The server should start on the port specified in your .env file.  

🧪 API Testing (Postman)
This backend is designed to be tested using Postman. During development, several edge cases and bugs related to controller logic (like handling missing fields, file upload failures, and incorrect token validation) were addressed.

To test the APIs:

Ensure your local server is running.

Set up a Postman environment with variables for URL (e.g., http://localhost:8000/api/v1) and tokens.

Test endpoints ensuring Content-Type is set correctly (use multipart/form-data for routes involving Multer file uploads).

🙏 Acknowledgements
Built alongside the excellent tutorials by Hitesh Choudhary on the Chai aur Code YouTube channel.


