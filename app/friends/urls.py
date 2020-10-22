from django.contrib.auth import get_user_model
from django.urls import path

from app.friends.views import PostFriendRequest, GetPatchDeleteFriendRequest

User = get_user_model()

urlpatterns = [
    # path('', User.friends),
    path('request/<int:user_id>/', PostFriendRequest.as_view()),
    path('requests/<int:friend_request_id>/', GetPatchDeleteFriendRequest.as_view()),
]
