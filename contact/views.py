from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render, get_object_or_404

# from email.mime.text import MIMEText
# import json, urllib.request, smtplib, os

from django.core.mail import send_mail

# def send_email(name, phone, email, comment):
#     pw = os.environ.get('PW')
#     fromx = 'aargiros@gmail.com'
#     to  = 'aargiros@gmail.com'
#     body = 'NAME: ' + name + '\nPHONE: ' + phone + '\nEMAIL: ' + email + '\nCOMMENT: ' + comment

#     msg = MIMEText(body)
    
#     msg['Subject'] = 'Contact Form'
#     msg['From'] = fromx
#     msg['To'] = to

#     server = smtplib.SMTP('smtp.gmail.com:587')
#     server.starttls()
#     server.ehlo()
#     server.login('aargiros@gmail.com', pw)
#     server.sendmail(fromx, to, msg.as_string())
#     server.quit()


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
   		fromx = 'aargiros@gmail.com'
    	to  = 'aargiros@gmail.com'
    	body = 'NAME: ' + name + '\nPHONE: ' + phone + '\nEMAIL: ' + email + '\nCOMMENT: ' + comment
		
		# send_email(name, email, phone, comment)

		send_mail(
		    'Contact Form',
		    body,
		    'aargiros@gmail.com',
		    ['aargiros@gmail.com'],
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
