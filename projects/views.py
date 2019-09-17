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
		{
			'name': 'DataDetect',
			'description': 'An application for file system data analysis and action. The frontend is an Angular 7 web app connecting to a .NET/Elastic/PostgreSQL backend, styled with the Angular Material component library. <br><br> The UI was designed with the idea that a user will want to "scan, act, and move on." Therefore, the workflow is very concise but also extremely versatile, giving a user multiple ways to search, analyze, and tag documents, as well as maintaing query terms through navigation events.'
		},
		{
			'name': 'Connector Framework',
			'description': 'A tool used to get data from social media platforms and transform that data into an archiveable format. The frontend is Angular 8, the backend is .NET/MariaDB, and styling is based on the Angular Material component library. <br><br>  The core functionality of this application is based on a very long and potentially confusing list of config options, so the UI utilizes a wizard-style workflow with carefully styled calls-to-action to make the user workflow as intuitive and simple as possible.'
		},
		{
			'name': 'Sparkit',
			'description': 'Sparkit is an application that connects event hosts to prospective event goers. My primary responsibility for the application has been user CRUD functionality and authentication, as well as styling the associated pages. The application uses Django\'s model-based forms and authentication middleware along with PostgreSQL.'
		},
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

