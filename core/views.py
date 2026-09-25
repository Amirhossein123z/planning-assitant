from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from task.models import Task
from note.models import Note
from task.serializers import TaskSerializer
from note.serializers import NoteSerializer


class TaskViewSet(viewsets.ModelViewSet):

    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]


    def get_queryset(self):
        
        return Task.objects.filter(user=self.request.user)


    def perform_create(self, serializer):

        serializer.save(user=self.request.user)



class NoteViewSet(viewsets.ModelViewSet):

    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):

        return Note.objects.filter(user=self.request.user)

    def perform_create(self, serializer):

        serializer.save(user=self.request.user)