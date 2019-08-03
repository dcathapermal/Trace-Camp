from django.shortcuts import render
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic.list import ListView
import requests, time
from stocks.models import Stock, UserSettings
from django.shortcuts import redirect


# Create your views here.
def stockDetail(request):
    token = 'sk_411d96648b644779824579a209303708'
    symbols = request.GET.get('stock_name', '')
    url = f'https://cloud.iexapis.com/stable/tops?token={token}&symbols={symbols}'
    price = requests.get(url).json()[0]['lastSalePrice']
    
    return render(request, 'stockpage.html', context = {"price": price, "symbols": symbols})

def stockList(request):
    user_settings = UserSettings.objects.get(user = request.user)
    return render(request, 'stocklist.html', context = {"stocks": user_settings.stocks.all() })

def delete(request):

def watch(request, symbol):
    # Query parameter it accepts the id of the security model    
    stock, created = Stock.objects.get_or_create(name = symbol)
    stock.save()
    current_user = request.user
    # Add security model to user
    user_settings, created = UserSettings.objects.get_or_create(user = current_user)
    user_settings.stocks.add(stock)
    user_settings.save()

    return redirect('stocklist')

