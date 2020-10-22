from django.db import models

from posts.models import Post


def user_directory_path(instance, filename):
    return f'user_{instance.post_image.author.id}/{filename}'


class Image(models.Model):
    image_name = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    post_image = models.ForeignKey(to=Post, related_name='fk_image_post', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.image_name}'
