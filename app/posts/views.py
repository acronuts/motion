from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from posts.models import Post
from posts.permissions import IsUserOrReadOnly
from posts.serializers import PostSerializer


class ListCreatePosts(ListCreateAPIView):
    queryset = Post.objects.all()
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
        return Post.objects.filter(author=self.kwargs['id'])


class ListFolloweesPosts(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_queryset(self):
        post = Post.objects.filter(author__in=self.request.user.followees.all())
        return post
