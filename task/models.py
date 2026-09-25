from django.db import models
from django.contrib.auth.models import User


class Task(models.Model):

    CATEGORY_CHOICES = [
        ('study','درسی'),
        ('sport','ورزشی'),
        ('financial','مالی'),
        ('other','سایر')
    ]

    user=models.ForeignKey(User,on_delete=models.CASCADE,related_name='tasks')

    title=models.CharField(max_length=100)

    category=models.CharField(max_length=30,
    choices=CATEGORY_CHOICES,
    default='other'

    )

    description=models.TextField(blank=True)

    active=models.BooleanField(default=True)

    schedule=models.DateField()

    estimated_time=models.PositiveIntegerField(
        help_text="estimated time in minutes",
        
    )

    due_date=models.DateTimeField(
        null=True,
        blank=True
    )

    created_date=models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title

    