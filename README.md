# Student Management API

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

npm install

## Environment Variables

Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string

## Run Project

npm run dev

## API Endpoints

POST /api/students
GET /api/students
GET /api/students/:id
PUT /api/students/:id
DELETE /api/students/:id

## Sample Request Body

{
  "name": "Deepak",
  "email": "deepak@gmail.com",
  "class": "BTech IT",
  "age": 21,
  "phone": "9876543210",
  "city": "Erode"
}