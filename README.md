# Dynamic Portfolio - MERN Stack

## Overview
This is a dynamic portfolio built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The portfolio allows users to showcase their skills, projects, and experiences dynamically with an admin panel for easy content updates.

## Features
- Dynamic content management (projects, skills, experience, etc.)
- Admin dashboard for content updates
- Contact form with email functionality
- Responsive design for all devices
- Authentication and authorization for admin access
- Optimized for SEO

## Tech Stack
- **Frontend**: React.js, Redux, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Database**: MongoDB with Mongoose
- **Authentication**: JSON Web Token (JWT)

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (v16+ recommended)
- MongoDB (local or Atlas)
- Git

### Clone the Repository
```sh
git clone https://github.com/satish30118/dynamic-porfolio.git
cd dynamic-porfolio
```

### Backend Setup
1. Navigate to the `server` folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the `server` directory and configure the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```

### Frontend Setup
1. Navigate to the `client` folder:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the `client` directory and configure:
   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```
4. Start the frontend server:
   ```sh
   npm start
   ```

## Usage
- Open `http://localhost:3000` in your browser.
- Navigate to the `/admin` route for content management (login required).
- Update portfolio sections dynamically using the admin panel.

## API Endpoints
- **Auth**: `/api/auth/login`, `/api/auth/register`
- **Projects**: `/api/projects`
- **Skills**: `/api/skills`
- **Experience**: `/api/experience`
- **Contact Form**: `/api/contact`

## Deployment
[Live test][(https://satish-portfolio-six.vercel.app/)].

