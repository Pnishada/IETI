from rest_framework import serializers
from .models import Course, News

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['name', 'description', 'start_date', 'end_date', 'price']
        
        
        
class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ['id', 'title', 'description', 'published_date', 'image', 'link']