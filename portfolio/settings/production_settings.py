from .base_settings import *

SECRET_KEY = os.environ.get('SECRET_KEY')

DEBUG = False

# Allow all host headers
ALLOWED_HOSTS = ['*']

EMAIL_HOST = 'smtp.sendgrid.net'
EMAIL_HOST_USER = os.environ.get('SENDGRID_USERNAME')
EMAIL_HOST_PASSWORD = os.environ.get('SENDGRID_PASSWORD')
EMAIL_PORT = 587
EMAIL_USE_TLS = True

SERVER_EMAIL = os.environ.get('EMAIL')

ADMINS = (
    ('admin', os.environ.get('EMAIL')),
)

MANAGERS = ADMINS
