from audioop import reverse
from django.db import models
from django.contrib.auth.models import User
from django.db.models import CharField

# Create your models here.
class Profile(models.Model):
    user=models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    name = CharField(default='', max_length=200, null=True)
    email=models.EmailField('User Email')
    img = models.ImageField(default='main/static/images/profile.png', upload_to='main/static/images')
    phone_num = CharField(blank=True, default='8777 777 77 77',max_length=14)

    def __str__(self):
        return f"{self.user.username}'s profile"
    
class Category(models.Model):
    name = models.CharField('Category', max_length=50)
    url = models.SlugField(max_length=160, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

class Woman(models.Model):
    name = models.CharField('Name', max_length=200)
    category = models.ManyToManyField(Category)
    info = models.TextField('Info')
    image = models.ImageField('Photo', upload_to='main/static/images')
    price = models.PositiveIntegerField('Price')
    url = models.SlugField(max_length=160, unique=True,default='')

    def __str__(self):
        return self.name
    class Meta:
        verbose_name = 'Woman'
        verbose_name_plural = 'Women'


class Order(models.Model):
    name = models.CharField('Name', max_length=200)
    


