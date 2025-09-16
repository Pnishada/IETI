from rest_framework import serializers
from .models import SliderImage

class SliderImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = SliderImage
        fields = ['id', 'src', 'heading', 'subheading']
