import random

from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class RegistrationProfile(models.Model):
    code = models.CharField(max_length=5, default=code_generator)
    user = models.OneToOneField(to=User, related_name='reg_profile', on_delete=models.CASCADE, primary_key=True)
    code_used = models.BooleanField(default=False)

    def __str__(self):
        return f'Registration profile for: {self.user.username}'
