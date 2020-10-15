from rest_framework import serializers

from interests.models import Interest

from users.serializers import UserSerializer


class InterestSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)

    class Meta:
        model = Interest
        fields = '__all__'
