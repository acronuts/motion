from rest_framework import serializers

from posts.models import Post

from users.serializers import UserSerializer

from images.serializers import ImageSerializer


class PostSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    fk_image_post = ImageSerializer(many=True, required=False)
    likes_counter = serializers.SerializerMethodField()

    def get_likes_counter(self, post):
        return post.like_post.all().count()

    class Meta:
        model = Post
        fields = '__all__'
