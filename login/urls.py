from django.urls import path
from . import views

urlpatterns=[
    path("signup/", views.signupPage, name="signup"),
    path("signin/", views.signinPage, name="signin"),
    path("logout/", views.logoutPage, name="logout")
]