from django.urls import path

from users.views import ToggleFollower, GetUsers, GetPatchDeleteUsers, ListUserFollowees, ListUserFollowers

urlpatterns = [
    path('', GetUsers.as_view()),
    path('me/', GetPatchDeleteUsers.as_view()),
    path('toggle-follow/<int:id>/', ToggleFollower.as_view()),
    path('following/', ListUserFollowees.as_view()),
    path('followers/', ListUserFollowers.as_view()),
]
