from django.urls import path

from comments.views import ListCreateComment

urlpatterns = [
    path('<int:post_id>/', ListCreateComment.as_view())
]
