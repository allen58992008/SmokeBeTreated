# from django.shortcuts import render
from .models import User
from .serializers import SmokeBeTreatedSerializer
from rest_framework import generics

# Create your views here.
class SmokeListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = SmokeBeTreatedSerializer
