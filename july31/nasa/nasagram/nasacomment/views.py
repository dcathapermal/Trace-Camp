from django.shortcuts import render
from django.http import HttpResponse
from nasacomment.models import Comment
import requests
from datetime import datetime, date, time, timedelta

# Create your views here.

def view_home(request):
    if request.method == 'GET':
        return render(request, 'very_nice_homepage.html')


def picture(request):
    date = request.POST.get('date')
    urlList = []
    url = F"https://api.nasa.gov/planetary/apod?api_key=IZuiH1ixIyc5SqcUqFUpoOg1P4v8Ywzc3Uz1ReZa&date={date}"
    pic_url = requests.get(url).json()["url"]
    urlList.append(pic_url)
    print(pic_url)
    return render(request, 'picture.html', context = {"urlList":urlList})

def create(request):
    if request.method == 'GET':
        date = request.GET.get('date')
        urlList = []
        url = F"https://api.nasa.gov/planetary/apod?api_key=IZuiH1ixIyc5SqcUqFUpoOg1P4v8Ywzc3Uz1ReZa&date={date}"
        pic_url = requests.get(url).json()["url"]
        urlList.append(pic_url)
        # Get date from query parameter request.GET.get('date)
        # Use date to get picture url
        # Pass picture url into hidden field in form template
        return render(request, 'picture.html', context = {"urlList":urlList})
    elif request.method == 'POST':
        Comment.objects.create(
            comment = request.POST.get('comment', 'Default Comment'),
            rating = request.POST.get('rating', '')
        )
        return HttpResponse('Created')