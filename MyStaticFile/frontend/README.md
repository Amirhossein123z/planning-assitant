# Boardio Django Backend Documentation

## Overview
This document provides a detailed guide to the Django backend implementation that supports the frontend UI defined in [`frontend/main-page.html`](frontend/main-page.html).

## 1. Prerequisites
- Python 3.12.0
- Django 5.1.5
- Django REST Framework (djangorestframework)

## 2. Installation and Setup
1. Navigate into the backend directory:
   ```
   cd backend
   ```
2. Create and activate a virtual environment:
   ```
   python -m venv venv
   venv\Scripts\activate   
   ```
3. Install required packages:
   ```
   pip install django==5.1.5 djangorestframework
   ```

## 3. Project Structure
- [`manage.py`](backend/mybordio/manage.py)
- [`settings.py`](backend/mybordio/mybordio/settings.py)
- [`urls.py`](backend/mybordio/mybordio/urls.py)
- [`asgi.py`](backend/mybordio/mybordio/asgi.py)
- [`wsgi.py`](backend/mybordio/mybordio/wsgi.py)

## 4. Configuration
### 4.1 Modify Settings
Edit [`settings.py`](backend/mybordio/mybordio/settings.py) to:
- Add "rest_framework" to `INSTALLED_APPS`.
- Configure static and media files:
  ```python
  STATIC_URL = '/static/'
  MEDIA_URL = '/media/'
  MEDIA_ROOT = BASE_DIR / 'media'
  ```

## 5. Data Models
Create a new app named `core` to define domain models.
- File: [`core/models.py`](backend/mybordio/core/models.py)
- Primary models:
  - `Workspace`
  - `Category`
  - `Task`
  - `Note`

## 6. API Endpoints
Define REST API routes in `core/urls.py` and include them in the project URLs.

| Method | Endpoint               | Description              |
| ------ | ---------------------- | ------------------------ |
| GET    | `/api/tasks/`          | List all tasks           |
| POST   | `/api/tasks/`          | Create a new task        |
| GET    | `/api/tasks/{id}/`     | Retrieve a task by ID    |
| PUT    | `/api/tasks/{id}/`     | Update a task            |
| DELETE | `/api/tasks/{id}/`     | Delete a task            |
| GET    | `/api/notes/`          | List all notes           |
| POST   | `/api/notes/`          | Create a new note        |

Include the core routes in the root URL configuration. In [`urls.py`](backend/mybordio/mybordio/urls.py):
```python
from django.urls import include, path

urlpatterns += [
    path('api/', include('core.urls')),
]
```

## 7. Serializers and Views
- Serializers: [`core/serializers.py`](backend/mybordio/core/serializers.py)
- Views:       [`core/views.py`](backend/mybordio/core/views.py)

## 8. Admin Interface
Register the models in the Django admin site:
- File: [`core/admin.py`](backend/mybordio/core/admin.py)

## 9. Database Migrations
Run the following commands to apply migrations:
```bash
python manage.py makemigrations
python manage.py migrate
```

## 10. Running the Development Server
Start the Django development server:
```bash
python manage.py runserver
```

## 11. Testing
Add unit tests in [`core/tests.py`](backend/mybordio/core/tests.py) and execute:
```bash
python manage.py test
```

## 12. Authentication Pages
The application provides client sign-up and sign-in pages that allow users to register and log in.

### 12.1 Sign-Up Page
File: `signup.html` (frontend)
- Fields:
  - Username (required)
  - Email (required)
  - Password (required)
  - Confirm Password (required)
  - Profile Picture (optional)
- Form action: `/api/auth/signup/`

### 12.2 Sign-In Page
File: `signin.html` (frontend)
- Fields:
  - Username
  - Password
- Includes links to create account (`ایجاد حساب کاربری`) and reset password (`بازنشانی رمز عبور`).

Backend URLs (in `mybordio/urls.py`):
```python
path('api/auth/signup/', include('auth.urls.signup')),
path('api/auth/signin/', include('auth.urls.signin')),
```

---
This documentation outlines the setup, configuration, data models, API contract, and developer commands needed to build and maintain the Boardio Django backend.