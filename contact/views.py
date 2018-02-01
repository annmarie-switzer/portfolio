#from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
#from portfolio.settings.production_settings import EMAIL_HOST_USER
from django.shortcuts import render
from django.core.mail import send_mail

import os



def get(request):
	return render(request, 'contact/contact.html')


def post(request):
	to_email = os.environ.get('EMAIL')

	name = request.POST.get('name')
	email = request.POST.get('email')
	phone = request.POST.get('phone')
	comment = request.POST.get('comment')
	submitbutton = request.POST.get('submitbutton')

	if submitbutton:
		body = 'NAME: ' + name + '\nPHONE: ' + phone + '\nEMAIL: ' + email + '\nCOMMENT: ' + comment

		send_mail(
			'Contact Form',
			body,
			email,
			[to_email,],
			fail_silently=False,
		)

	context = {
		'name': name,
		'email': email,
		'phone': phone,
		'comment': comment,
		'submitbutton': submitbutton,
	}

	return render(request, 'contact/contact.html', context)
