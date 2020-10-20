from django.contrib.auth import get_user_model
from django.db import models

from posts.models import Post

User = get_user_model()


class Comment(models.Model):
    text_content = models.TextField()
    comment_date = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(to=User, related_name='fk_comment_user', on_delete=models.CASCADE)
    post_comment = models.ForeignKey(to=Post, related_name='fk_comment_post', on_delete=models.CASCADE)

    def __str__(self):
        return f'Comment by {self.author} on Post {self.post_comment}'
