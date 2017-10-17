from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render, get_object_or_404

import os
from django.core.mail import send_mail


def get(request):
	return render(request, 'contact/contact.html')


def post(request):
	name = request.POST.get('name')
	email = request.POST.get('email')
	phone = request.POST.get('phone')
	comment = request.POST.get('comment')
	submitbutton = request.POST.get('submitbutton')

	if submitbutton:
		pw = os.environ.get('PW')
		body = 'NAME: ' + name + '\nPHONE: ' + phone + '\nEMAIL: ' + email + '\nCOMMENT: ' + comment

		send_mail(
			'Contact Form',
			body,
			'bellamiraharfoot@gmail.com',
			['bellamiraharfoot@gmail.com',],
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
