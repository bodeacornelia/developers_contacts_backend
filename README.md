This application is built with *Nodejs, Express, TypeScript and TypeORM*, powerful tools for building robust, scalable and performant web applications. The application is designed to provide a seamless user experience, while also allowing for easy maintenance and updates.

## *Getting Started*

### Prerequisites
- Node.js 
- npm
- docker https://docs.docker.com/get-docker/

### Set up
1. clone repo using https: clone [repository URL]
2. Open project in VSCode
3. create a *.env* file in the root of the project. Copy variables form example.env file into *.env* file
4. run command *docker-compose up -d*
5. run command *npm i* to install all the dependencies
6. run command *npm run db:push*
7. run command *npm run start* to run the aplication
8. check server: open browser and type 'http://localhost:8000/api/healthchecker'

### The application is organized into different directories and files to make it easy to navigate and maintain. Here's a brief overview of the file structure:
- config/: 
- src/: 
    - app.ts: the entry point of the api service. It initializes the Express application, sets up middleware, and defines the routes for the API.
    - controllers/: contains the controller functions that handle HTTP requests and responses. These functions typically call services or repositories to retrieve or manipulate data.
    - entities/: contains the TypeORM entity classes that define the structure and relationships of the data models used by the application.
    - middleware/: This directory contains the middleware functions that handle incoming requests before they reach the controllers. This include a validate middleware of the user inputs when a user is created.
    - migrations/: contains the database migration files that are used to make changes to the database schema. Used to populate 'roles', 'statuses' and 'teams' tables before creating a user.
    - routes/: contains the route definitions that map HTTP requests to controller functions.
    - schemas/: contains the schemas definitions that are used to validate incoming request data.
    - services/: contains the business logic of the application, such as functions for retrieving, manipulating, and validating data. Services typically interact with repositories to perform CRUD operations.
    - utils/