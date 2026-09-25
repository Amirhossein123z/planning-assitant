from django.shortcuts import render
from django.db.models import Q
from task.forms import TaskForm
from task.models import Task
from note.forms import NoteForm
from note.models import Note
from django.contrib.auth.decorators import login_required


@login_required(login_url="signin")
def homepage(request):

    form = TaskForm()

    search_query = request.GET.get("q", "").strip()

    if search_query:
        tasks = Task.objects.filter(
            user=request.user
        ).filter(
            Q(title__icontains=search_query) |
            Q(description__icontains=search_query)
        )

        notes = Note.objects.filter(
            user=request.user
        ).filter(
            Q(title__icontains=search_query) |
            Q(description__icontains=search_query)
        )

        print("SEARCH QUERY:", search_query)
        print("TASKS FOUND:", list(tasks))
        print("NOTES FOUND:", list(notes))

        
    else:
        tasks = Task.objects.filter(user=request.user)
        notes = Note.objects.filter(user=request.user)


    note_form = NoteForm()

    context = {
        "form": form,
        "tasks": tasks,

        "note_form": note_form,
        "notes": notes,

        "search_query": search_query,
    }

    return render(request, "homepage.html", context)
