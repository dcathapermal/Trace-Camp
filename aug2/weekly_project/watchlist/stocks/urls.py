from django.urls import path
import stocks.views as views
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('stockpage', views.stockDetail),
    path('stocklist', views.stockList, name = "stocklist"),
    path('delete',views.delete),
    path('watch/<str:symbol>/', views.watch),
    path('accounts/logout', TemplateView.as_view(template_name = 'home.html')),
]