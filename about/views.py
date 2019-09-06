from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render, get_object_or_404


def get(request):

    about_data = {
        'Experience': 'I am a software engineer currently focused on frontend engineering. I have experience in a number of technologies, not to mention a degree in English. See my <a href="https://docs.google.com/document/d/103V8QM5Jolj0HsdzSuwHZCPD1LXalgJyyz-AeARKHuo/edit?usp=sharing" target="_blank" class="colored-link font-weight-bold">resume</a> for more details.',
        'Phone': 'Pixel 3',
        'Role model': 'FemShep',
		'Oxford comma': 'Always',

        'Vacation': 'Canadian Rockies',
        'Coffee': 'Black',
		'Completed a marathon': 'If you count a 10+ hour <span style="font-style: italic">The Lord of the Rings Extended Edition</span> viewing session as a marathon...',
        'Music': '<span style="font-style: italic">Dance with the Dead</span> for working, <span style="font-style: italic">Blind Guardian</span> for working out',

		'Why programming': 'We have to stay one step ahead of Skynet.',
        'Seriously though': 'I get to use my intelligence, creativity, and capacity and desire to learn to contribute to society in a way I was never able to do before learning to code.',
		'Future': 'My goal is to be a true full-stack developer. Every chance I get, I\'m enhancing my current skills and learning new ones, from frontend to backend, database arcitecture to deployment. I believe the best part about being a programmer is always having something new to learn.'
    }

    context = {
		'about_data': about_data
    }

    return render(request, 'about/about.html', context)
