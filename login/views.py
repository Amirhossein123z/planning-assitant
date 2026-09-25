from django.shortcuts import render,redirect

from .form import registerForm,loginForm

from django.contrib.auth.models import User

from django.contrib.auth import authenticate,login,logout

from django.contrib.auth.decorators import login_required
from .models import Profile
# Create your views here.


def signupPage(request):
    context={}

    registerFrm = registerForm(request.POST or None)
    context['registerFrm']=registerFrm

    if request.POST:
        
        if registerFrm.is_valid():
                
                username=registerFrm.cleaned_data.get('username')
                password=registerFrm.cleaned_data.get('password')
                email=registerFrm.cleaned_data.get('email')
                
                user=User.objects.create_user(username=username,password=password,email=email)
                
                profile=Profile.objects.create(user=user)
                return redirect("/")
        
    return render(request,'signup.html',context)


def signinPage(request):
    context={}

    loginFrm=loginForm(request.POST or None)
    context['loginFrm']=loginFrm

    if request.method == "POST":
        print("POST received")

        print(loginFrm.is_valid())

        print(loginFrm.errors)

        if loginFrm.is_valid():
            print("Form is valid")

            username = loginFrm.cleaned_data['username']
            password = loginFrm.cleaned_data['password']

            print("Before authenticate")

            user = authenticate(
                request,
                username=username,
                password=password
            )

            print("After authenticate")
            print(user)

            if user is not None:
                login(request, user)
                return redirect('/')

            context['err'] = "نام کاربری یا کلمه عبور نادرست می باشد"    


    # if request.POST:
    #     if loginFrm.is_valid():
    #         username=loginFrm.cleaned_data.get('username')
    #         password=loginFrm.cleaned_data.get('password')

    #         user=authenticate(username=username,password=password)
    #         print(user)

    #         if user:
    #             login(request,user=user)
    #             return redirect('/')
    #         else:
    #             err='نام کاربری یا کلمه عبور نادرست می باشد'
                
    #         context['err']='this is test'
    return render(request,'signin.html',context)

@login_required(login_url='signin')
def logoutPage(request):
    if request.user.is_authenticated:
        logout(request)
    return redirect('signin')
