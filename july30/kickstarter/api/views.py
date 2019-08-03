from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from api.models import Kickstarter_Campaign
from api.serializers import KickStarter_Campaign_Serializer
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

def hello_world_response(request):
    return HttpResponse("Hello, world. You're at the api index.")

@csrf_exempt
def kickstarter_list(request):
    if request.method == 'GET':
        data = Kickstarter_Campaign.objects.all()
        serializer = KickStarter_Campaign_Serializer(data, many = True)
        return JsonResponse(serializer.data, safe = False)
    elif request.method == 'POST':
        if request.body.decode('utf-8') == "":
            return HttpResponse("You need to pass in data to POST and add data to the server", status = 400)
        data = JSONParser().parse(request)
        serializer = KickStarter_Campaign_Serializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
    return JsonResponse(serializer.errors, status = 400)

@csrf_exempt
def kickstarter_campaign_detail(request, id):
    campaign = Kickstarter_Campaign.objects.get(pk=id)

    if request.method == 'GET':
        serializer = KickStarter_Campaign_Serializer(campaign)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        if request.body.decode('utf-8') == "":
            return HttpResponse("You need to pass in data to PUT body to modify this entry", status = 400)
        data = JSONParser().parse(request)
        serializer = KickStarter_Campaign_Serializer(campaign,data = data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = 201)
    elif request.method == 'DELETE':
        campaign.DELETE()
        return HttpResponse(status = 204)
    return JsonResponse(serializer.errors, status =400)
