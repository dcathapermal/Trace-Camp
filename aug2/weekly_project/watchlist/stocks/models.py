from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Stock(models.Model):
    name = models.TextField()
    price = models.FloatField(default = 0.0)

class UserSettings(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    stocks = models.ManyToManyField(Stock)

