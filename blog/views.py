from django.shortcuts import render
from django.views import View
from django.views.generic.base import TemplateView
from .models import Post, Category

import json, urllib.request


def blog(request):
	categories = Category.objects.extra(select={'name_lower': 'lower(name)'})
	categories = categories.order_by('name_lower')

	context = {
        'categories': categories,
        'posts': Post.objects.all().order_by('-posted_date'),
    	}

	return render(request, 'blog/blog.html', context)


def blog_post(request, slug):
	p = Post.objects.get(slug=slug)
	return render(request, 'blog/blog_post.html', {'p': p})

