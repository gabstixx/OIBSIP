# Login Authentication System

## About the Project

This project is a simple login authentication system built with Python and Flask. It allows users to create accounts, log in securely, access a protected dashboard, and log out.

The application uses SQLite to store user information, Werkzeug to hash passwords, and Flask sessions to manage authenticated users.

## Features

1. User registration with username, email, and password.
2. Password validation requiring at least 8 characters and one number.
3. Duplicate username and email prevention.
4. Secure password hashing.
5. Login authentication with credential verification.
6. Protected dashboard accessible only to authenticated users.
7. Session management and logout functionality.
8. CSRF protection for form submissions.
9. Flash messages for registration and login feedback.
10. Environment-based secret key configuration.

## Technologies Used

1. Python
2. Flask
3. SQLite
4. HTML5
5. CSS3
6. Werkzeug
7. Flask-WTF
8. python-dotenv

## Project Structure

```text
WebDev-L2-LoginAuthentication/
├── app.py
├── database.py
├── database.db
├── requirements.txt
├── .env
├── .gitignore
├── static/
│   └── css/
│       └── style.css
├── templates/
│   ├── login.html
│   ├── register.html
│   └── dashboard.html
└── screenshots/
    ├── 01-register.png
    ├── 02-login.png
    └── 03-dashboard.png
```
