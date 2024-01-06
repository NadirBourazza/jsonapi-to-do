# My Todo App

This is a simple Todo application built with Node.js and Express.js. It uses an in-memory data store to manage todos.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine. You can download and install them from [here](https://nodejs.org/en/download/).

### Installing

1. Clone the repository

```bash
git clone https://github.com/NadirBourazza/jsonapi-to-do.git
```

2. Navigate into the directory

```bash
cd jsonapi-to-do
```

3. Install the dependencies

```bash
npm install
```

## Running the App

To start the server, run the following command:

```bash
npm start
```

The server will start on port 3000, and supports hot reloads via the nodemon package.

## API Endpoints

- GET /todos: Fetch all todos
- POST /todos: Create a new todo. The title of the todo should be provided in the query parameters. (e.g., /todos?title="New Todo")
- DELETE /todos: Delete a todo. The id of the todo should be provided as a request parameter. (e.g., /todos/1)

## Built With

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
