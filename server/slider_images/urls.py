from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SliderImageViewSet

router = DefaultRouter()
router.register(r'sliders', SliderImageViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
