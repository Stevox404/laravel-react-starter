# Laravel React Starter

This is a boilerplate project for building web applications using Laravel and ReactJS. It provides a foundation setup with essential configurations and structures to kickstart your development process.

## Features

-   **Laravel**: A powerful PHP framework for building web applications.
-   **ReactJS**: A JavaScript library for building user interfaces.
-   **Vite**: Bundles JavaScript, CSS, and other assets for the frontend.
-   **ESLint**: Lints JavaScript/JSX code to maintain code quality.
-   **Prettier**: Formats code for consistency and readability.
-   **Routing**: Laravel's routing for backend APIs and React Router for frontend routing. `.htaccess` file for Apache configuration.
-   **Authentication**: Basic authentication setup using cookies.
-   **API Development**: Laravel serves as a backend API to interact with the frontend.
-   **Database Integration**: Integration with MySQL, SQLite, or PostgreSQL databases.

## Requirements

-   PHP >= 8.2
-   Composer
-   Node.js >= 18.6
-   Yarn

## Getting Started

1. Clone this repository:

    ```bash
    git clone https://github.com/Stevox404/laravel-react-starter.git
    ```

2. Install PHP dependencies:

    ```bash
    composer install
    ```

3. Install JavaScript dependencies:

    ```bash
    yarn install
    ```

4. Copy the .env.example file to .env:

    ```bash
    cp .env.example .env
    ```

5. Generate application key:

    ```bash
    php artisan key:generate
    ```

6. Run database migrations and seeders:

    ```bash
    php artisan migrate --seed
    ```

7. Build frontend assets:

    ```bash
    npm run dev   # For development
    # OR
    npm run prod  # For production
    ```

8. Start the development server:

    ```bash
    php artisan serve
    ```

9. Visit http://localhost:8000 in your browser.

## Folder Structure

-   `app/`: Contains Laravel application files.
-   `frontend/`: Contains frontend React files.
-   `database/`: Contains database migrations and seeders.
-   `public/`: Contains publicly accessible files (compiled assets, images, etc.).
-   `public/build`: Contains the compiled react app files

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for any improvements or features you'd like to add.

## License

This project is licensed under the MIT License.

