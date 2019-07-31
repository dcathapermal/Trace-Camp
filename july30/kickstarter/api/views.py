from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def hello_world_response(request):
    return HttpResponse("Hello, world. You're at the api index.")

