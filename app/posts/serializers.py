from rest_framework import serializers

from posts.models import Post

from users.serializers import UserSerializer


class PostSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)

    likes_counter = serializers.SerializerMethodField()

    def get_likes_counter(self, post):
        return post.like_post.all().count()

    class Meta:
        model = Post
        fields = '__all__'
