from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render, get_object_or_404


def get(request):

	about_data = {
	'Education': 'I have a B.A. in English and nearly two years of independent study in Programming and Web Development. See my <a href="https://docs.google.com/document/d/103V8QM5Jolj0HsdzSuwHZCPD1LXalgJyyz-AeARKHuo/edit?usp=sharing" target="_blank" class="colored-link font-weight-bold">resume</a> for more details.',
		'Generation': '"She\'s an older millenial, sir, but she checks out."',
		'Feelings about Star Wars': 'I think I already answered this.',
		'Preferred mobile device': 'Current: iPhone<br>Future: Pixel',
		'Tattoos': 'Yes',
		'Married': 'Yes',
		'Children': 'No',
		'Completed a marathon': 'Many times! My sister would make cookies while I got everything organized. I had to make sure each disc was in the DVD player in the right order. There is nothing more immersion-shattering than a fade-out in Rivendell and a fade-in at Helm\'s Deep!',
		'Music to work to': 'Tycho',
		'Music to work out to': 'Blind Guardian',
		'Coffee': 'Black',
		'Method of note-taking': 'Digital, and even that\'s a stuggle sometimes. My brain moves too fast for my hands :P.',
		'Why programming': 'We have to stay one step ahead of Skynet.',
		'Seriously, though': 'I get to use my intelligence, creativity, and capacity and desire to learn to contribute to society in a way I was never able to do before learning to code.',
		'Years of service': 'That\'s your call.',
		
	}

	context = {
		'about_data': about_data
	}

	return render(request, 'about/about.html', context)

