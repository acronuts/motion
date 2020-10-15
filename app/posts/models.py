from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Post(models.Model):
    title = models.CharField(max_length=50)
    text_content = models.TextField()
    post_date = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(to=User, related_name='fk_post_to_user', on_delete=models.CASCADE)
    like_post = models.ManyToManyField(to=User, related_name='m2m_likes', blank=True)

    def __str__(self):
        return f'{self.title} by {self.author}'
