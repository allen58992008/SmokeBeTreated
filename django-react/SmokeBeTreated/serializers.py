from rest_framework import serializers
from .models import User

class SmokeBeTreatedSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','name','email','message')