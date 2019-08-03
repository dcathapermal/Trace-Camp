from django.urls import path
from nasacomment import views

urlpatterns = [
    path('home/',views.view_home),
    path('home/create', views.picture),
    path('create/', views.create),
    path('picture/', views.picture),
    #path('update',views.update)
]