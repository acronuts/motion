from django.contrib.auth import get_user_model
from rest_framework import serializers
from interests.models import Interest
import sys

from posts.models import Post

sys.path.append('..')

User = get_user_model()


class UserInterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    fk_interest_user = UserInterestSerializer(many=True)
    amount_of_posts = serializers.SerializerMethodField()
    amount_of_likes = serializers.SerializerMethodField()
    amount_of_followers = serializers.SerializerMethodField()
    amount_of_following = serializers.SerializerMethodField()
    amount_of_friends = serializers.SerializerMethodField()

    def get_amount_of_posts(self, user):
        return Post.objects.filter(author=user).count()

    def get_amount_of_likes(self, user):
        return user.m2m_likes.count()

    def get_amount_of_friends(self, user):
        return len(user.friends)

    def get_amount_of_followers(self, user):
        return User.objects.filter(followees=user).count()

    def get_amount_of_following(self, user):
        return user.followees.count()

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'location', 'followees', 'fk_interest_user', 'about_me',
                  'amount_of_posts', 'amount_of_likes', 'amount_of_followers', 'job', 'amount_of_friends', 'is_active',
                  'amount_of_following', 'phone_num', 'email', 'avatar', 'banner']
