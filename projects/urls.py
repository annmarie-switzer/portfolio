from django.conf.urls import include, url
from . import views

app_name = 'projects'

urlpatterns = [
    url(r'^$', views.projects, name='projects'),
    url(r'^api/', views.api, name='api'),
    url(r'^calculator/', include('calculator.urls')),
    url(r'^weather/', include('weather.urls')),
    url(r'^pomodoro/', include('pomodoro.urls')),
    url(r'^tictactoe/', include('tictactoe.urls')),
    url(r'^simon/', include('simon.urls')),
    url(r'^wikipedia/', include('wikipedia.urls')),
    url(r'^workout/', include('workout.urls')),
]