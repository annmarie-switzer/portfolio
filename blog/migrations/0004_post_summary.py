# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-08-21 19:27
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_auto_20170817_2049'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='summary',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
