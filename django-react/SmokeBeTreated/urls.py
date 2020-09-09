from django.urls import path
from . import views

urlpatterns = [
    path('api/smoke/',views.SmokeListCreate.as_view()),
]
