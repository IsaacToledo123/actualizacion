# Generated by Django 2.2.8 on 2023-10-07 18:23

import cloudinary.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('usuarios', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuarios',
            name='photo',
            field=cloudinary.models.CloudinaryField(default=1, max_length=255, verbose_name='Images'),
            preserve_default=False,
        ),
    ]
