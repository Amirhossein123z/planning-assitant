from django.urls import path
from . import views

urlpatterns=[
    path("note/", views.create_note, name="create_note"),
    path("delete/<int:note_id>", views.delete_note, name="delete_note"),
    path("notes/", views.note_list, name="note_list"),
]