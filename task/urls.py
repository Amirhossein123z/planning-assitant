from django.urls import path
from . import views

urlpatterns=[
    path("create/", views.create_task, name="create_task"),
    path("delete/<int:task_id>/", views.delete_task, name="delete_task"),
    path("tasks/", views.task_list, name="task_list"),
]