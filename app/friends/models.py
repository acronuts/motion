from django.conf import settings
from django.db import models


class Friend(models.Model):
    status_choices = [
        ('pending', 'Pending'),
        ('accepted', 'Accepted'),
        ('rejected', 'Rejected')
    ]

    status = models.CharField(max_length=8, choices=status_choices, default='pending')
    sender = models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name="send_request_user", on_delete=models.CASCADE)
    receiver = models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name="receive_request_user", on_delete=models.CASCADE)

    def __str__(self):
        return f'Request by {self.sender} to {self.receiver} is {self.status}'

    class Meta:
        unique_together = ['sender', 'receiver']
