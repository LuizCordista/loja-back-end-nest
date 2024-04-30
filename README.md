# Nest Store

This is the second version of the BackEnd Store project. Unlike the first version which was built with Java, this version is built with TypeScript using the NestJS framework and TypeORM for database operations.

## Project Overview

The project is a simple e-commerce API that allows for basic CRUD operations on a `Product` entity. The `Product` entity has properties such as `id`, `name`, `description`, `imageUrl`, and `price`.

## Technologies Used

- TypeScript
- NestJS
- TypeORM
- PostgreSQL

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Set up your PostgreSQL database and update the connection details in `src/app.module.ts`
4. Run the application with `npm run start`

## API Endpoints

- `GET /products`: Fetch all products
- `GET /products/:id`: Fetch a single product by its ID
- `POST /products`: Create a new product
- `PUT /products/:id`: Update a product by its ID
- `DELETE /products/:id`: Delete a product by its ID

## Future Improvements

- Add user authentication and authorization
- Implement a shopping cart feature
- Add more comprehensive tests

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
