<h1 align="center"> SparkZkart ( E-Commerce Store 🛒)</h1>


## Overview
An elegant, full-featured **E-Commerce Store** built with the MERN Stack (MongoDB, Express, React, Node.js).  
SparkZkart supports user authentication, product management, cart functionality, coupon system, and online payments.

## Features
- 🛒 User Authentication (Register/Login)
- 📦 Product Listings with Ratings
- 🧺 Cart Management
- 💳 Stripe Payment Integration
- 🎟️ Coupon Discounts
- 📈 Admin Dashboard & Analytics
- ☁️ Cloudinary Image Uploads

## Tech Stack
- Frontend: React, Tailwind CSS, Zustand, Vite
- Backend: Node.js, Express.js, MongoDB Atlas, Mongoose
- Auth: JWT, Cookies
- Payments: Stripe
- Image Uploads: Cloudinary
- State Management: Zustand
- Dev Tools: Nodemon, ESLint
- Caching: Redis

## Installation
### Prerequisites
- MongoDB Atlas
- Redis Upstash
- Cloudinary
- Stripe

### Steps
1. Clone the repositories:
```bash
git clone https://github.com/tharunteja77/E-commerce-website
```
2. Open VS code / similar IDE and Navigate to the project directory:
```bash
cd ghost-share
```
3. Install Dependencies
```bash
npm install
npm install --prefix frontend
```
- 1st one installs backend dependencies.
- 2nd one installs frontend dependencies.
4. Setup .env file

```bash
PORT=5000
MONGO_URI=your_mongo_uri

UPSTASH_REDIS_URL=your_redis_url

ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

STRIPE_SECRET_KEY=your_stripe_secret_key
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

5. Run this app locally

```bash
npm run build
```

6. Start the app

```bash
npm run dev
```
