from django.shortcuts import render
from django.views import View
from django.views.generic.base import TemplateView

import json, urllib.request, random

# Create your views here.

def workout(request):

	context = {

	}

	return render(request, 'workout/workout.html', context)
	