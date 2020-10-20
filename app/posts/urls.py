from django.urls import path

from posts.views import ListCreatePosts, GetPatchDeletePosts, ToggleLikePost, ListLikedPosts, ListUserPosts, \
    ListFolloweesPosts, ListFriendPosts

urlpatterns = [
    path('', ListCreatePosts.as_view()),
    path('<int:id>/', GetPatchDeletePosts.as_view()),
    path('toggle-like/<int:id>/', ToggleLikePost.as_view()),
    path('likes/', ListLikedPosts.as_view()),
    path('user/<int:id>/', ListUserPosts.as_view()),
    path('following/', ListFolloweesPosts.as_view()),
    path('friends/', ListFriendPosts.as_view())
]
