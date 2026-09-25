# MySite

A Django web application project.

## Quick Start

```bash
python manage.py runserver
```

## Project Structure

```
mysite/                         # Project root
├── manage.py                   # Django management script
├── db.sqlite3                  # SQLite database
├── mysite/                     # Django project configuration
│   ├── __init__.py
│   ├── settings.py             # Project settings
│   ├── urls.py                 # Root URL configuration
│   └── wsgi.py / asgi.py       # WSGI/ASGI entry points
├── login/                      # Login/authentication app
│   ├── models.py               # User-related models
│   ├── views.py                # View logic
│   ├── form.py                 # Authentication forms
│   └── templates/              # Login-related templates
├── task/                       # Task management app
│   ├── views.py                # Task view logic
│   └── ...
├── core/                       # Core/shared app
│   └── ...
├── MyStaticFile/               # Static file serving app
│   └── ...
├── assets/                     # Static assets
│   └── frontend/               # Frontend CSS, JS, images
│       └── signup.css
├── templates/                  # Global templates
│   └── ...
├── scripts/                    # Utility scripts
│   └── ...
├── update_static_paths.py      # Static path resolution script
└── index.md                    # This file
```

## Django Apps

| App       | Purpose                     |
|-----------|-----------------------------|
| `login`   | User authentication, signup, login |
| `task`    | Task management features    |
| `core`    | Core/shared functionality   |
| `MyStaticFile` | Static file serving    |

## Key Commands

| Command                                          | Description                  |
|--------------------------------------------------|------------------------------|
| `python manage.py runserver`                     | Start dev server             |
| `python manage.py makemigrations`                | Create migration files       |
| `python manage.py migrate`                       | Apply migrations             |
| `python manage.py collectstatic`                 | Collect static files         |
| `python manage.py createsuperuser`               | Create admin user            |
| `python manage.py shell`                         | Django shell                 |

## Tech Stack

- **Framework:** Django
- **Database:** SQLite (db.sqlite3)
- **Frontend:** CSS, HTML templates
- **Deployment:** WSGI/ASGI ready
