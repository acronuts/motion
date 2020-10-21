from django.contrib.auth import get_user_model
from django.http import HttpResponse
from rest_framework.generics import GenericAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import filters

from posts.permissions import IsUserOrReadOnly
from users.serializers import UserSerializer

User = get_user_model()


class GetUsers(ListAPIView):
    search_fields = ['first_name', 'last_name', 'username']
    filter_backends = (filters.SearchFilter,)
    queryset = User.objects.filter(is_active=True)
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]


class GetPatchDeleteUsers(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated & IsUserOrReadOnly]

    def get_object(self):
        return self.request.user


class ToggleFollower(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'id'
    permission_classes = [IsAuthenticated]

    def patch(self, request, *args, **kwargs):
        user_to_follow = self.get_object()
        user = request.user
        if user_to_follow == user:
            return HttpResponse(content="You can't follow yourself dummy")
        if user_to_follow in user.followees.all():
            user.followees.remove(user_to_follow)
        else:
            user.followees.add(user_to_follow)
        serializer = self.get_serializer(user)
        return Response(status=200, data=serializer.data)


class ListUserFollowees(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        return self.request.user.followees


class ListUserFollowers(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        return self.request.user.followers
