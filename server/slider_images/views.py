from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser
from .models import SliderImage
from .serializers import SliderImageSerializer

class SliderImageViewSet(viewsets.ModelViewSet):
    queryset = SliderImage.objects.all()
    serializer_class = SliderImageSerializer
    parser_classes = (MultiPartParser, FormParser)  # Allows for image file uploads
