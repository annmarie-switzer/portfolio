from django.conf.urls import include, url
from . import views

app_name = 'workout'

urlpatterns = [
     url(r'^$', views.workout, name='workout'),
]
