from django.shortcuts import render
from django.views import View
from django.views.generic.base import TemplateView
from django.http import JsonResponse
from django.conf import settings

import json, urllib.request, random, os


# Create your views here.

def projects(request):
	apps = {
		'calculator': {
			'name': 'Calculator',
			'template': 'calculator/calculator.html',
			'icon': 'fa fa-calculator fa-3x',
			'url': 'https://github.com/bellamira/portfolio/tree/master/calculator'
			},
		'weather': {
			'name': 'Weather',
			'template': 'weather/weather.html',
			'icon': 'fa fa-sun-o fa-3x',
			'url': 'https://github.com/bellamira/portfolio/tree/master/weather'
			},
		'pomodoro': {
			'name': 'Timer',
			'template': 'pomodoro/pomodoro.html',
			'icon': 'fa fa-clock-o fa-3x',
			'url': 'https://github.com/bellamira/portfolio/tree/master/pomodoro'
			},
		'tictactoe': {
			'name': 'Tic Tac Toe',
			'template': 'tictactoe/tictactoe.html',
			'icon': 'fa fa-hashtag fa-3x',
			'url': 'https://github.com/bellamira/portfolio/tree/master/tictactoe'
			},
		'simon': {
			'name': 'Simon',
			'template': 'simon/simon.html',
			'icon': 'fab fa-delicious fa-3x',
			'url': 'https://github.com/bellamira/portfolio/tree/master/simon'
			},
		'wikipedia': {
			'name': 'Wiki Search',
			'template': 'wikipedia/wikipedia.html',
			'icon': 'fab fa-wikipedia-w fa-3x',
			'url': 'https://github.com/bellamira/portfolio/tree/master/wikipedia'
			},
		'workout': {
			'name': 'Random P90X',
			'template': 'workout/workout.html',
			'icon': 'fa fa-random fa-3x',
			'url': 'https://github.com/bellamira/portfolio/tree/master/workout'
			},
	}
	
	projects = [
		{'name': 'DataDetect', 'description': 'Info about DataDetect'},
		{'name': 'Connector Framework', 'description': 'Info about Connector Framework'},
		{'name': 'Supervisor', 'description': 'Info about Supervisor'}
	]

	context = {
		'apps': apps,
		'projects': projects
	}
	return render(request, 'projects/projects.html', context)

def api(request):
	weather_api = settings.WEATHER_API
	data = {'weather_api': weather_api}
	return JsonResponse(data)

