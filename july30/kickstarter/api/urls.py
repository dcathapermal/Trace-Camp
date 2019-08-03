from django.urls import path
from api import views

urlpatterns = [
    path('', views.hello_world_response),
    path('kickstarterdata/', views.kickstarter_list),
    path('kickstarterdata/<int:id>/', views.kickstarter_campaign_detail)
]