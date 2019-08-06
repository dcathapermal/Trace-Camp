from django.shortcuts import render
from django.views.generic.edit import DeleteView
import requests, time
from stocks.models import Stock, UserSettings
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required


# Create your views here.
def stockDetail(request):
    token = 'sk_829c630554f04757b1bb0bc280a9ac0d'
    symbols = request.GET.get('stock_name', '')
    url = f'https://cloud.iexapis.com/stable/stock/{symbols}/quote?token={token}'
    price = requests.get(url).json()['latestPrice']
    return render(request, 'stockpage.html', context = {"price": price, "symbols": symbols})

@login_required(redirect_field_name='stockList')
def stockList(request):
    user_settings, created = UserSettings.objects.get_or_create(user = request.user)
    return render(request, 'stocklist.html', context = {"stocks": user_settings.stocks.all() })


def watch(request, symbol):
    # Query parameter it accepts the id of the security model  
    # Add security model to user
    token = 'sk_829c630554f04757b1bb0bc280a9ac0d'
    url = f'https://cloud.iexapis.com/stable/stock/{symbol}/quote?token={token}'
    price = requests.get(url).json()['latestPrice']

    stock, created = Stock.objects.get_or_create(name = symbol.upper(), price=price)
    
    stock.save()
    current_user = request.user

    user_settings, created = UserSettings.objects.get_or_create(user = current_user)
    user_settings.stocks.add(stock)
    user_settings.save()

    return redirect('stocklist')

def delete(request, symbol):
    stock = Stock.objects.get(name = symbol.upper())
    
    current_user = request.user
    user_settings = UserSettings.objects.get(user = current_user)
    
    # import pdb; pdb.set_trace()
    user_settings.stocks.remove(stock.id)
    user_settings.save()

    return redirect('stocklist')