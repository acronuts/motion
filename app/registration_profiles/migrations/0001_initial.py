# Generated by Django 3.1.2 on 2020-10-20 22:46

from django.db import migrations, models
import django.db.models.deletion
import registration_profiles.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='RegistrationProfile',
            fields=[
                ('code', models.CharField(default=registration_profiles.models.code_generator, max_length=5)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='reg_profile', serialize=False, to='users.user')),
                ('code_used', models.BooleanField(default=False)),
            ],
        ),
    ]
