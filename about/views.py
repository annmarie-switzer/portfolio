from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render, get_object_or_404


def get(request):

	about_data = {
		'Preferred mobile device': 'Currently I have an iPhone but as soon as I can justify the cost, I\'m getting a Pixel.',

		'Generation': '"She\'s an older millenial, sir, but she checks out."',

		'Feelings about Star Wars': 'I think I already answered this.',

		'Married': 'Yes.',

		'Children': 'No.',

		'Completed a marathon': 'Many times! My sister would make cookies while I got everything organized. I had to make sure each disc was in the DVD player in the right order. There is nothing more immersion-shattering than a fade-out in Rivendell and a fade-in at Helm\'s Deep!',

		'Tattoos': 'Yes.',

		'Method of note-taking': 'Digital, and even that\'s a stuggle sometimes. My brain moves too fast for my hands :P.',

		'Years of service': 'That\'s your call.',
	}

	context = {
		'about_data': about_data
	}

	return render(request, 'about/about.html', context)

