# Generated by Django 3.1.2 on 2020-10-16 11:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0002_auto_20201014_1055'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='title',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]