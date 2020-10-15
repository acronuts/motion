from django.urls import path

from interests.views import ListCreateInterest, AddDeleteInterestToUser

urlpatterns = [
    path('', ListCreateInterest.as_view()),
    path('add_interest/', AddDeleteInterestToUser.as_view())
]
