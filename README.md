# Online Learning Platform API 🎓

A robust API for an online learning platform built with Node.js, Express, MongoDB, and JWT authentication. This platform enables user registration, course enrollment, progress tracking, and secure payment processing.

## Features 🚀

- **User Authentication**
  - Secure registration and login with JWT
  - Role-based access control (Admin, Instructor, Student)

- **Course Management**
  - Create, read, update, and delete courses
  - Comprehensive course metadata and content management
  - Instructor-specific course controls

- **Enrollment System**
  - Course enrollment functionality
  - Progress tracking
  - Course completion certificates

- **Payment Processing**
  - Secure payment recording
  - Payment history tracking
  - Transaction management

## Project Structure 📁

```
online-course-platform-api/
├── controllers/     # Request handlers
├── middlewares/    # Auth & validation middleware
├── models/         # MongoDB schemas
├── routes/         # API routes
├── config/         # Configuration files
├── docs/           # API documentation
├── .env            # Environment variables
├── server.js       # Application entry point
└── package.json    # Project dependencies
```

## Getting Started ⚙️

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/online-course-platform-api.git
   cd online-course-platform-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. Start the server:
   ```bash
   npm start
   ```

The API will be available at `http://localhost:5000`

## API Documentation 📚

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register new user |
| POST | `/auth/login` | Authenticate user |

### Course Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/courses` | Create course (Instructor) |
| GET | `/courses` | List all courses |
| PUT | `/courses/:id` | Update course (Instructor) |
| DELETE | `/courses/:id` | Remove course (Admin/Instructor) |

### Enrollment Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/enrollments` | Enroll in course |
| GET | `/enrollments/:userId` | View enrollments |
| PUT | `/enrollments/progress/:enrollmentId` | Update progress |

### Payment Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/payments` | Process payment |
| GET | `/payments/:userId` | View payment history |

Full API documentation is available via Swagger at `/api-docs`

## Deployment 🌐

### Deploying to Render

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. On Render:
   - Create a new Web Service
   - Connect your GitHub repository
   - Configure environment variables
   - Deploy

## Technology Stack 🛠️

- **Backend Framework**: Node.js with Express
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **Documentation**: Swagger/OpenAPI
- **Deployment**: Render-ready configuration

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Contact 📧

- **Email**: chauhanakshay395@gmail.com
- **Project Link**: [https://github.com/your-username/online-course-platform-api](https://github.com/your-username/online-course-platform-api)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
