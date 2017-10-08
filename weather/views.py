from django.shortcuts import render
from django.views import View
from django.views.generic.base import TemplateView

import json, urllib.request

# Create your views here.

def weather(request):
	return render(request, 'weather/weather.html')

