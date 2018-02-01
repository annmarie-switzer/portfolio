from .base_settings import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# Allow all host headers
ALLOWED_HOSTS = ['*']

EMAIL_HOST = 'smtp.sendgrid.net'
EMAIL_HOST_USER = os.environ.get('SENDGRID_USERNAME')
EMAIL_HOST_PASSWORD = os.environ.get('SENDGRID_PASSWORD')
EMAIL_PORT = 587
EMAIL_USE_TLS = True

SERVER_EMAIL = EMAIL_HOST_USER

ADMINS = (
    ('admin', EMAIL_HOST_USER),
)

MANAGERS = ADMINS
