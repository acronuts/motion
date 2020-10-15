from rest_framework.generics import ListCreateAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from interests.models import Interest
from interests.permissions import IsUserOrReadOnly
from interests.serializers import InterestSerializer


class ListCreateInterest(ListCreateAPIView):
    queryset = Interest.objects.all()
    serializer_class = InterestSerializer
    permission_classes = [IsAuthenticated & IsUserOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class AddDeleteInterestToUser(GenericAPIView):
    queryset = Interest.objects.all()
    serializer_class = InterestSerializer
    permission_classes = []

    def get_object(self):
        return self.request.user

    def patch(self, request, *args, **kwargs):
        user = self.get_object()
        for interest_id in request.data['interest_name']:
            interest = Interest.objects.get(id=interest_id)
            user.interests.add(interest)
        serializer = self.get_serializer(user)
        return Response(status=201, data=serializer.data)
