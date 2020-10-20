from rest_framework import serializers

from comments.models import Comment

from users.serializers import UserSerializer

from posts.serializers import PostSerializer


class CommentSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    post_comment = PostSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'text_content', 'author', 'post_comment']
