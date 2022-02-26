from rest_framework import serializers
from .models import Member

class MemberSerializer(serializers.ModelSerializer):
    # first_name = serializers.CharField()
    # last_name = serializers.CharField()
    # email = serializers.EmailField()
    # phone_number = serializers.PhoneNumberField()
    # is_admin = serializers.BooleanField()
    class Meta:
        model = Member
        fields = '__all__'