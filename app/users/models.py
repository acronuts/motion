from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings

from friends.models import Friend


class User(AbstractUser):

    location = models.CharField(max_length=20, blank=True, default="")
    about_me = models.TextField(null=True, blank=True)
    phone_num = models.CharField(max_length=15, null=True, blank=True)
    job = models.CharField(max_length=20, null=True, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    followees = models.ManyToManyField(to=settings.AUTH_USER_MODEL, related_name='followers', blank=True)
    email = models.EmailField(unique=True)

    def __str__(self):
        return f'{self.username}'

    @property
    def friends(self):
        received_requests = Friend.objects.filter(receiver=self, status='accepted')
        send_requests = Friend.objects.filter(sender=self, status='accepted')
        friend_list = received_requests + send_requests
        return friend_list
