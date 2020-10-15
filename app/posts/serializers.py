from rest_framework import serializers

from posts.models import Post

from users.serializers import UserSerializer


class PostSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'title', 'text_content', 'like_post', 'author']
