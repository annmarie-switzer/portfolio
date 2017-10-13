from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render, get_object_or_404


def get(request):
	return render(request, 'about/about.html')

