from django.shortcuts import render,redirect
from django.contrib.auth.decorators import login_required
from .forms import NoteForm
from django.contrib import messages
from .models import Note
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import NoteSerializer


@login_required(login_url="signin")
def create_note(request):

    if request.method=='POST':

        note_form=NoteForm(request.POST)

        if note_form.is_valid():

            note=note_form.save(commit=False)

            note.user=request.user

            note.save()

            messages.success(
                request,"یادداشت شما با موفقیت ذخیره شد"
            )

            return redirect("home")

        return render(request,"homepage.html",{"note_form": note_form,})

    return redirect("home")
            

@login_required(login_url="signin")            
def delete_note(request,note_id):

    if request.method=='POST':

        note=Note.objects.get(id=note_id,
        user=request.user)

        note.delete()

    return redirect("home")


    
    
@api_view(['GET'])
def note_list(request):

    notes = Note.objects.filter(user=request.user)

    serializer = NoteSerializer( notes, many=True)

    return Response(serializer.data)