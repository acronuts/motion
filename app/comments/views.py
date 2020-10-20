from rest_framework.generics import ListCreateAPIView

from comments.models import Comment

from comments.serializers import CommentSerializer
from rest_framework.permissions import IsAuthenticated

from comments.permissions import IsUserOrReadOnly


class ListCreateComment(ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_field = 'post_id'
    permission_classes = [IsAuthenticated & IsUserOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user, post_comment_id=self.kwargs['post_id'])
