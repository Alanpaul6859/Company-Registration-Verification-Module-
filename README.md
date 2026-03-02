Company Registration & Verification Module
A secure backend web application that allows companies to register, authenticate, and manage company profile data using token-based authentication.
This project demonstrates backend development concepts like authentication, authorization, middleware usage, and database integration.


Features
1. Company Registration
2. Secure Login System
3. JWT Authentication
4. Protected Routes
5. Company Profile Management
6. Middleware Authorization
7. Environment Configuration Support


Tech Stack
Category	                   Technology
Runtime	                    Node.js
Framework	                  Express.js
Authentication	             JWT (JSON Web Token)
Database	                   MongoDB
ODM	                        Mongoose
Environment Variables	      dotenv
Password Security	          bcrypt
API Testing	                Postman   


Authentication Flow
1. User registers company
2. User logs in
3. Server generates JWT token
4. Token sent in headers for protected routes
Authorization: Bearer <token>


Testing the API (Postman)
1. Register a company
2. Login → copy token
3. Add token in Authorization header
4. Access protected routes

Example Request
Login
POST /api/auth/login

{
  "email": "company@gmail.com",
  "password": "123456"
}
Response
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}



Learning Concepts Covered
1. REST API Design
2. MVC Structure
3. Middleware Handling
4. Token Based Authentication
5. Secure Password Storage
6. Environment Configurations



Future Improvements
1. Email Verification
2. Admin Approval System
3. Role Based Access Control
4. File Upload (Company Documents)
5. Frontend Dashboard






   
