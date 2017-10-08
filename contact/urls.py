from django.conf.urls import include, url
from . import views

app_name = 'contact'

urlpatterns = [
    url(r'^$', views.get, name='contact'),
    url(r'^confirmation$', views.post, name='confirmation'),
]
