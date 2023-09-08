from django.urls import path
from . import views

urlpatterns = [
    path('', views.index,name='index'), 
    path('login', views.loginPage, name='login'),
    path('register', views.registerPage, name='register'),
    path('logout', views.logoutUser, name='logout'),
    path('user', views.userhome, name = 'user'),
    path('profile', views.profile, name = 'profile'),
    path('directory', views.directory, name = 'directory'),
    path('woman', views.WomenView.as_view(), name='woman'),
    path('woman/<slug:slug>', views.WomenDetailView.as_view(),name='detail'),
    path('checkout', views.checkout, name='checkout'),

]