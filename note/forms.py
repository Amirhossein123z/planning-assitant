from django import forms
from .models import Note


class NoteForm(forms.ModelForm):

    class Meta:

        model = Note

        fields=['title','description']

        labels={
            'title' : 'عنوان' ,
            'description' : 'توضیحات',
        }



        error_messages={
            'title' : {
                'required' : 'لطفا عنوان فعالیت را وارد کنید',
                'max_length' : 'تعداد کاراکترهای وارد شده بیش از حد مجاز است'
            },

            'description' : {
                'max_length' : 'تعداد کاراکترهای وارد شده بیش از حد مجاز است'
            }
        }