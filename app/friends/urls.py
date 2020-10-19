from django.urls import path

from app.friends.views import PostFriendRequest, GetPatchDeleteFriendRequest

urlpatterns = [
    # path('', GetFriends.as_view()),
    path('request/<int:user_id>/', PostFriendRequest.as_view()),
    path('requests/<int:friend_request_id>/', GetPatchDeleteFriendRequest.as_view()),
]
