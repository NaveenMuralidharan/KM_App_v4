## KNOWLEDGE MAP APP v1

## Description of the app:
This app allows users to build easy-to-use knowledge maps and process documents to meet  information needs


## Link to planning Trello board:
[TRELLO BOARD](https://trello.com/invite/b/hyKmhNsr/ATTI749f54c8d77da1773b9f1c9550761dbf23FAADFA/project-2)

# KM_App_v4

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Wireframes](#wireframes)
3. [ERD](#ERD)
4. [Installation](#installation)
   - [Prerequisites](#prerequisites)
   - [Steps to Install](#steps-to-install)
5. [API Routes](#api-routes)
6. [Usage](#usage)
7. [Contributing](#contributing)
   - [Code Style](#code-style)
   - [Testing](#testing)
8. [License](#license)
9. [Contact](#contact)
10. [Future Improvements](#future-improvements)

---

## Technologies Used
- HTML
- CSS
- Node.js
- Express.js
- MongoDB
- MVC
- RESTful API

---
## Wireframes
![img](https://i.imgur.com/740Qx6K.png)

## ERD
![image](https://i.imgur.com/QIAC9ef.png)

## Installation

### Prerequisites

- Node.js (v14 or later)
- MongoDB (locally or through MongoDB Atlas)

### Steps to Install

1. **Clone the repository**:
   ```bash
   git clone https://github.com/NaveenMuralidharan/KM_App_v4.git
   cd KM_App_v4
2. **Install dependencies:
   ```bash
      npm install
   ```
3. **Setup MongoDB:
Ensure MongoDB is running (locally or using MongoDB Atlas).
Create a .env file in the backend root directory and add your MongoDB URI:
```bash
   MONGO_URI=your_mongo_database_uri
```
4. **Run the application:
```bash
   npm start
```
The application should now be running at http://localhost:3000.

## Usage

### Frontend Routes:
- **Homepage**: Navigate to `/process` to view all process maps.
- **View a Process Map**: Navigate to `/process/:id` to view the details of a specific process map.
- **Create a Process Map**: Use the `POST /process` route with the required JSON body to create a new process map.
- **Update a Process Map**: Use the `PUT /process/:id` route to update a process map by its ID.
- **Delete a Process Map**: Use the `DELETE /process/:id` route to delete a process map by its ID.

---

## Contributing

We welcome contributions to improve **KM_App_v4**. To contribute:

1. **Fork the repository**.
2. **Create a new branch** (`git checkout -b feature-name`).
3. **Make your changes** and commit them (`git commit -am 'Add new feature'`).
4. **Push to the branch** (`git push origin feature-name`).
5. **Open a pull request**.

### Code Style
- Ensure that your code adheres to the style conventions used in this project.
- Write clear, concise commit messages.

### Testing
To run tests, use the following command:

```bash
npm test
```
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

For any questions or inquiries, please contact:

- **Author**: Naveen Muralidharan
- **Email**: [naveenspec@gmail.com](mailto:naveenspec@gmail.com) 

---

## Future Improvements

- **Add Authentication**: Implement JWT-based authentication to secure the API.
- **Rate Limiting**: Add rate-limiting to prevent abuse of the API.
- **Swagger Documentation**: Integrate Swagger to auto-generate API documentation.
- **Add Unit Tests for Routes**: Write comprehensive unit tests for all endpoints.
- **Improve Error Handling**: Enhance error handling to return more detailed error messages.

