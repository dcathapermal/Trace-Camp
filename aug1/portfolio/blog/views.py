from django.shortcuts import render
from django.views.generic.edit import CreateView
from blog.models import Post

# Create your views here.

class PostCreate(CreateView):
    model = Post
    fields = ['title', 'body']

    def get_success_url(self):
        return '/'

