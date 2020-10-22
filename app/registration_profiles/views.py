from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.response import Response
from django.core.mail import send_mail

from .models import RegistrationProfile

from rest_framework.generics import GenericAPIView

from users.serializers import UserSerializer

User = get_user_model()


class Registration(GenericAPIView):
    permission_classes = []

    def post(self, request, *args, **kwargs):
        email = request.data['email']
        new_user = User(email=email, username=email, is_active=False)
        new_user.save()
        registration = RegistrationProfile(user=new_user)
        registration.save()

        send_mail(
            'Your Motion login code',
            f'Hello {new_user.username}, \n Please use the following code to validate your email address: {registration.code}',
            'joost.motion@gmail.com',
            [f'{new_user.email}'],
            fail_silently=False,
        )

        return Response(status=200)

class Validation(GenericAPIView):
    permission_classes = []
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        code = request.data['code']
        email = request.data['email']
        try:
            check_validation = RegistrationProfile.objects.get(code=code, user__email=email, code_used=False)
            check_validation.user.username = request.data['username']
            check_validation.user.first_name = request.data['first_name']
            check_validation.user.last_name = request.data['last_name']
            check_validation.user.set_password(request.data['password'])
            check_validation.code_used = True
            check_validation.user.is_active = True
            check_validation.user.save()
            check_validation.save()
            return Response(self.get_serializer(check_validation.user).data)
        except ObjectDoesNotExist:
            return Response(status=404, data=f'This {code} is not valid with {email}')
