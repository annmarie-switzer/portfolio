from django.conf.urls import include, url
from . import views

app_name = 'about'

urlpatterns = [
    url(r'^$', views.get, name='about'),
]
