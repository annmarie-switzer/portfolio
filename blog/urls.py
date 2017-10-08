from django.conf.urls import include, url
from . import views

app_name = 'blog'

urlpatterns = [
    url(r'^$', views.blog, name='blog'),
    url(r'^(?P<slug>[^\.]+)$', views.blog_post, name='blog_post'),
]
