from rest_framework import serializers
from .models import Task


class TaskSerializer(serializers.ModelSerializer):

    class Meta:

        model=Task

        fields=[
            'id',
            'title',
            'category',
            'description',
            'active',
            'schedule',
            'estimated_time',
            'due_date',
            'created_date',
        ]