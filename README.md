
# Company Management System

This project is a Company Management System with separate backend and frontend components.

## Table of Contents

1. [Backend (Django)](#backend-django)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Server](#running-the-server)
    - [Running Tests](#running-tests)
2. [Frontend (React)](#frontend-react)
    - [Prerequisites](#prerequisites-1)
    - [Installation](#installation-1)
    - [Running the Development Server](#running-the-development-server)
    - [Running Tests](#running-tests-1)


## Backend (Django)

### Prerequisites

- Python 3.10+
- pip
- virtualenv

### Installation

1. **Clone the repository:**

    ```bash
    git clone [<repository-url>](https://github.com/3ashryy2/Employee-Management-System-Full-Stack)
    cd company_management/backend
    ```

2. **Create and activate a virtual environment:**

    ```bash
    python -m venv env
    source env/bin/activate  # On Windows use `env\Scripts\activate`
    ```

3. **Install the required packages:**

    ```bash
    pip install -r requirements.txt
    ```

4. **Apply migrations to set up the database:**

    ```bash
    python manage.py migrate
    ```

5. **Create a superuser (admin account):**

    ```bash
    python manage.py createsuperuser
    ```

### Running the Server

1. **Run the development server:**

    ```bash
    python manage.py runserver
    ```

The backend server should now be running at `http://127.0.0.1:8000/`.

### Running Tests

1. **Run backend tests using pytest:**

    ```bash
    pytest
    ```

## Frontend (React)

### Prerequisites

- Node.js 14+
- npm or Yarn

### Installation

1. **Navigate to the frontend directory:**

    ```bash
    cd ../frontend
    ```

2. **Install the required packages:**

    ```bash
    npm install
    # Or if you prefer Yarn:
    # yarn install
    ```

### Running the Development Server

1. **Run the development server:**

    ```bash
    npm start
    # Or if you prefer Yarn:
    # yarn start
    ```

The frontend development server should now be running at `http://localhost:3000/`.

### Running Tests

1. **Run frontend tests:**

    ```bash
    npm test
    # Or if you prefer Yarn:
    # yarn test
    ```
