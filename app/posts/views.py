from django.contrib.auth import get_user_model
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import filters

from posts.models import Post
from posts.permissions import IsUserOrReadOnly
from posts.serializers import PostSerializer


User = get_user_model()


class ListCreatePosts(ListCreateAPIView):
    search_fields = ['text_content', 'title']
    filter_backends = (filters.SearchFilter,)
    queryset = Post.objects.all().order_by('-post_date')
    serializer_class = PostSerializer
    permission_classes = []

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class GetPatchDeletePosts(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'id'
    permission_classes = [IsAuthenticated & IsUserOrReadOnly]


class ToggleLikePost(GenericAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'id'
    permission_classes = []

    def patch(self, request, *args, **kwargs):
        post = self.get_object()
        user = request.user
        if post in user.m2m_likes.all():
            user.m2m_likes.remove(post)
        else:
            user.m2m_likes.add(post)
        return Response(status=200)


class ListLikedPosts(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_queryset(self):
        return self.request.user.m2m_likes


class ListUserPosts(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'id'
    permission_classes = []

    def get_queryset(self):
        return Post.objects.filter(author=self.kwargs['id']).order_by('-post_date')


class ListFolloweesPosts(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_queryset(self):
        post = Post.objects.filter(author__in=self.request.user.followees.all())
        return post


class ListFriendPosts(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = []

    def get_queryset(self):
        post = Post.objects.filter(author__in=self.request.user.friends)
        return post
