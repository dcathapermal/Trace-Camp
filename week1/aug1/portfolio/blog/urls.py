from django.urls import path
from blog.views import  views

urlpatterns =[
    path('create/', views.PostCreate.as_view())
    path('list/' , view.)
]