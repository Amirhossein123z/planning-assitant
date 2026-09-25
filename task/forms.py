from django import forms
from django.core.validators import MinValueValidator
from .models import Task


class TaskForm(forms.ModelForm):

    estimated_time=forms.IntegerField(min_value=1,
    error_messages={
        'required' : 'لطفا زمان تخمینی را وارد کنید',
        'min_value' : 'زمان تخمینی باید حداقل 1 دقیقه باشد',
         'invalid': 'لطفا یک عدد معتبر وارد کنید',
    })

    class Meta:

        model= Task
        fields=[

            'title',
            'category',
            'description',
            'schedule',
            'estimated_time',
            'due_date',
        ]

        labels={
            'title':'عنوان',
            'category':'دسته‌بندی',
            'description':'توضیحات',
            'schedule':'زمان‌بندی',
            'estimated_time':'زمان تخمینی',
            'due_date':'تاریخ تحویل',
        }

        help_texts={
            'estimated_time':'زمان را بر حسب دقیقه وارد کنید',
            }


        error_messages={

            'title' : {
                'required' : 'لطفا عنوان فعالیت را وارد کنید',
            },

            'schedule' : {
                'required' : 'لطفا زمان بندی این فعالیت را مشخص کنید'
            },
                        
        }