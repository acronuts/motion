from django.contrib.auth import get_user_model
from rest_framework.generics import RetrieveUpdateDestroyAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from friends.models import Friend
from friends.permissions import IsUserOrReadOnly, IsSenderReceiverOrReadOnly
from friends.serializers import FriendSerializer


User = get_user_model()


class PostFriendRequest(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = FriendSerializer
    lookup_url_kwarg = 'user_id'
    permission_classes = [IsAuthenticated & IsUserOrReadOnly]

    def post(self, request, *args, **kwargs):
        user = request.user
        receiver = self.get_object()
        friend_request = Friend(sender=user, receiver=receiver)
        friend_request.save()
        return Response(self.get_serializer(friend_request).data)


class GetPatchDeleteFriendRequest(RetrieveUpdateDestroyAPIView):
    queryset = Friend.objects.all()
    serializer_class = FriendSerializer
    lookup_url_kwarg = 'friend_request_id'
    permission_classes = [IsAuthenticated & IsSenderReceiverOrReadOnly]



