This application is built with *Nodejs, Express, TypeScript and TypeORM*, powerful tools for building robust, scalable and performant web applications. The application is designed to provide a seamless user experience, while also allowing for easy maintenance and updates.

## *Getting Started*

### Prerequisites
- Node.js 
- npm
- docker https://docs.docker.com/get-docker/
- docker-compose https://docs.docker.com/compose/install/

### Set up
1. clone repo: clone [repository URL]
2. create a *.env* file in the root of the project. Copy variables form example.env file into *.env* file
3. run command *docker-compose up -d*
4. run command *npm i* to install all the dependencies
5. run command *npm run db:push*
5. run command *npm run start* to run the aplication

### The application is organized into different directories and files to make it easy to navigate and maintain. Here's a brief overview of the file structure:
config/: 
src/: contains the source code for the application. It is structured as follows: 
- controllers/: contains api, components and hooks that are generic and can be used easly all over the app
- entities/: contains the React components used to build the application.
- middleware/: 
- migrations/
    - index.ts: contains the TypeScript type definitions used throughout the application
-  App.tsx: is the main entry point for the application
- index.css
- main.tsx: This file renders the React application and injects it into the index.html file.