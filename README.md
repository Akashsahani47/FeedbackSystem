📝 User Feedback System
A full-stack web application to collect and manage user feedback. Built with React, Node.js, Express, and MongoDB, this project demonstrates full-stack development skills, including frontend design, backend API integration, and database operations.

🚀 Features
Submit feedback with user name, email, and message.
Store feedback securely in MongoDB.
Display all feedback in a responsive dashboard.
Filter and sort feedback entries.
(Optional) Categorize feedback (e.g., suggestion, bug, feature request).



Scalable backend with clean code structure.

🛠️ Tech Stack
Frontend: React
Backend: Node.js, Express.js
Database: MongoDB (using Mongoose for ODM)


1. Clone the Repository
git clone https://github.com/your-username/user-feedback-system.git
cd user-feedback-system

2. Set Up and Run the Backend
cd backend
npm install
npm start

Create a .env file inside the backend/ folder and add the following content:
PORT=5000
MONGODB_URI=your-mongodb-connection-string

3. Set Up and Run the Frontend
cd ../frontend
npm install
npm start

📄 API Endpoints
POST /submit — Submit user feedback
GET /getAll— Retrieve all feedback data




