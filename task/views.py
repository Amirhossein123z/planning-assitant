from django.shortcuts import redirect,render
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .models import Task
from  .forms import TaskForm
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import TaskSerializer



@login_required(login_url="signin")
def   create_task(request):

    if request.method=="POST":

        form=TaskForm(request.POST)


        if form.is_valid():


            task=form.save(commit=False)

            task.user=request.user

            task.save()

            messages.success(
                request,
                "فعالیت شما با موفقیت ذخیره شد."
            )
                
            


            return redirect("home")    

        return render(request,"homepage.html",{"form": form,})    

    return redirect("home")



@login_required(login_url="signin")
def delete_task(request,task_id):

    if request.method=="POST" :
        task= Task.objects.get(
            id=task_id,
            user=request.user,
        )

        task.delete()

    return redirect("home")


@api_view(['GET'])
def task_list(request):

    tasks = Task.objects.filter(user=request.user)

    serializer = TaskSerializer(tasks, many=True)

    return Response(serializer.data)