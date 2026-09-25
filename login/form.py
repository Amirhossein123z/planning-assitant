from django import forms
from django.contrib.auth.models import User
from .models import Profile

class registerForm(forms.Form):
    username = forms.CharField(
        max_length=50,
        widget=forms.TextInput(attrs={'placeholder': 'نام کاربری', 'class': 'input1'}),
        error_messages={'required':'وارد کردن نام کاربری الزامی است'}
    )
    email = forms.EmailField(
        max_length=50,
        widget=forms.EmailInput(attrs={'placeholder':' ایمیل', 'class':'input2'}),
        
        error_messages={
            'invalid':'ایمیل معتبری وارد کنید'
        }


    )
    password = forms.CharField(
        max_length=50,
        widget=forms.PasswordInput(attrs={'placeholder': 'رمز عبور', 'class': 'input2'})
    )
    repassword = forms.CharField(
        max_length=50,
        widget=forms.PasswordInput(attrs={'placeholder': 'تکرار رمز عبور', 'class': 'input2'}),
        error_messages={
            'required': 'این فیلد اجباری است',
        }
    )
    
    def clean_repassword(self):
        p1 = self.cleaned_data.get('password')
        p2 = self.cleaned_data.get('repassword')

        if p1 != p2:
            raise forms.ValidationError("کلمات عبور یکسان نیستند")
        
        return p2
    
    def clean_email(self):
        e=self.cleaned_data['email']
        
        if User.objects.filter(email=e).exists():
            raise forms.ValidationError('ایمیل تکراری است')
        
        return e

    def clean_username(self):
        u=self.cleaned_data['username']

        if User.objects.filter(username=u).exists():
            raise forms.ValidationError('نام کاربری تکراری است')
        
        return u

        

class loginForm(forms.Form):
    username = forms.CharField(
        max_length=50,
        widget=forms.TextInput(attrs={'placeholder': 'نام کاربری', 'class': 'input1'}),
        error_messages=
        {'required':'نام کاربری را وارد کنید'}
    )
    password = forms.CharField(
        max_length=50,
        widget=forms.TextInput(attrs={'placeholder': 'رمز عبور', 'class': 'input2'}),
        error_messages=
        {'required':'رمز عبور را وارد کنید'}
    )

    