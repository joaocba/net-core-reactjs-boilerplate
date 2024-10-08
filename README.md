
# .NET Core & ReactJS Boilerplate

This is a boilerplate project for a web application with a **.NET Core backend** and a **ReactJS frontend**. The backend provides API endpoints, while the frontend consumes these endpoints to display and interact with data. This setup is designed to speed up initial development with ready-to-use configurations for database, frontend, and backend services.

## Features

-   **.NET Core Backend**: Includes APIs with controller-based architecture.
-   **ReactJS Frontend**: Simple UI to interact with backend APIs.
-   **Entity Framework Core**: Manage database migrations.
-   **Frontend State Management**: Currently uses **MobX** (planned to replace with **Redux**).
-   **Semantic UI**: For styling components (planned to replace with **Material UI**).
-   **Database**: Local development using SQL Server.

## Prerequisites

-   [.NET SDK](https://dotnet.microsoft.com/download)
-   [Node.js](https://nodejs.org/en/download/)
-   SQL Server (or configure your own database)

## Getting Started

### Clone the repository:

```bash
git clone https://github.com/your-repo/net-core-reactjs-boilerplate.git
cd net-core-reactjs-boilerplate
```

### Backend Setup (.NET Core)

1. Navigate to the backend project directory:

    ```bash
    cd Backend/
    ```

2. Restore NuGet packages:

    ```bash
    dotnet restore
    ```

3. Apply database migrations:

    ```bash
    dotnet ef database update
    OR
    dotnet build
    ```

4. Run the backend API server:

    ```bash
    dotnet watch run
    OR
    dotnet watch --no-hot-reload
    ```

5. To drop the database (for development reset):

    ```bash
    dotnet ef database drop --force
    ```

6. To add a new migration (after updating models):

    ```bash
    dotnet ef migrations add MigrationName -p Persistence -s API
    ```

7. To update the database after a migration:
    ```bash
    dotnet ef database update
    ```

### Frontend Setup (ReactJS)

1. Navigate to the frontend project directory:

    ```bash
    cd reactjs-client-app/
    ```

2. Install npm dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```

4. Build the frontend for production:
    ```bash
    npm run build
    ```

### Full Stack Run

1. Ensure both backend and frontend servers are running:

    - Backend: `dotnet watch run`
    - Frontend: `npm start`

    By default, the frontend will run on `https://localhost:3000` and the backend will run on `http://localhost:5000`.

## TO DO List

-   [ ] Remove MobX and implement **Redux** for state management in the React app.
-   [ ] Remove **Semantic UI** and migrate to **Material UI** for styling.
-   [ ] Clean up the codebase for better readability and maintainability.

## Useful Commands

### Backend (ASP.NET Core)

-   Restore packages: `dotnet restore`
-   Build project: `dotnet build`
-   Run project: `dotnet run`
-   Watch mode: `dotnet watch run`
-   Migrations:
    -   Add migration: `dotnet ef migrations add <MigrationName>`
    -   Update database: `dotnet ef database update`
    -   Drop database: `dotnet ef database drop --force`

### Frontend (React)

-   Install dependencies: `npm install`
-   Start development server: `npm start`
-   Build for production: `npm run build`
-   Linting: `npm run lint`
-   Run tests: `npm test`

---

Feel free to contribute and submit pull requests!
