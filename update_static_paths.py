from pathlib import Path

path = Path("templates/homepage.html")
text = path.read_text(encoding="utf-8")
replacements = [
    ("{% static 'img/", "{% static 'frontend/img/"),
    ("{% static 'libs/", "{% static 'frontend/libs/"),
    ("{% static 'main-page.css'", "{% static 'frontend/main-page.css'"),
    ("{% static 'task.css'", "{% static 'frontend/task.css'"),
    ("{% static 'main-page.js'", "{% static 'frontend/main-page.js'"),
]
for old, new in replacements:
    text = text.replace(old, new)
path.write_text(text, encoding="utf-8")
