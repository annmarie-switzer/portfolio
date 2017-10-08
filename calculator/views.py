from django.shortcuts import render
from django.views import View
from django.views.generic.base import TemplateView

import json, urllib.request

# Create your views here.

def calculator(request):
	return render(request, 'calculator/calculator.html')