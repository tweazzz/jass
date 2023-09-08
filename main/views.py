from django.shortcuts import render,redirect
from django.contrib.auth.forms import UserCreationForm
from .forms import CreateUserForm, ProfileForm
from django.contrib import messages
from django.contrib.auth import authenticate, login , logout
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.views.generic.base import View
from .models import Profile,Category,Woman

# Create your views here.

def index(request):
    woman = Woman.objects.all()
    return render(request, 'index.html', {"women_list": woman})


def loginPage(request):
    if request.user.is_authenticated:
        return redirect('index')
    else:
        if request.method == 'POST':
            username = request.POST.get('username')
            password =  request.POST.get('password')

            user = authenticate(request, username = username, password=password)

            if user is not None:
                login(request,user)
                redirect('index')
            else:
                messages.info(request, 'Username OR Password is incorrect')
            return redirect('index')

        context = {}
        return render(request, 'login.html')

def registerPage(request):
    if request.user.is_authenticated:
        return redirect('index')
    else:
        form = CreateUserForm()
        if request.method == 'POST':
            form = CreateUserForm(request.POST)
            if form.is_valid():
                form.save()
                user = form.cleaned_data.get('username')
                messages.success(request, 'Account was created for ' + user)
                return redirect('login')
        context = {'form':form}
        return render(request,'register.html', context)

@login_required(login_url='login')
def logoutUser(request):
    logout(request)
    return redirect('login')

def directory(request):
    woman = Woman.objects.all()
    return render(request, 'directory.html', {"women_list": woman})

def woman(request):
    return render(request, 'woman.html')

@login_required(login_url='login')
def userhome(request):
    return render(request,'user.html')

@login_required(login_url='login')
def profile(request):
    if request.method == 'POST':
        form = ProfileForm(request.POST, request.FILES, instance=request.user.profile)
        if form.is_valid():
            form.save()
            username = request.user.username
            messages.success(request, f'{username}, Your profile is updated.')
            return redirect('user')
    else:
        form = ProfileForm(instance=request.user.profile)
    context = {'form':form}
    return render(request, 'profile.html', context)

class Category:
    def get_category(self):
        return Category.objects.all()

class WomenView(Category,View):
    def get(self,request):
        woman = Woman.objects.all()
        return render(request,"woman.html", {"women_list": woman})

class WomenDetailView(Category, View):
    def get(self,request, slug):
        woman = Woman.objects.get(url=slug)
        return render(request, 'content_items.html', {"woman":woman})
    

@login_required(login_url='login')
def checkout(request):
    return render(request, 'checkout.html')
