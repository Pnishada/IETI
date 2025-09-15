from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Course, News
from .serializers import CourseSerializer

from .serializers import NewsSerializer


class CourseRegistrationView(APIView):
    def post(self, request):
        # Parse incoming JSON data from the request
        serializer = CourseSerializer(data=request.data)

        # Validate the data
        if serializer.is_valid():
            # Save the course registration (or other data)
            serializer.save()
            return Response({"message": "Course registered successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class NewsListView(APIView):
    def get(self, request):
        news = News.objects.all()  # Get all news objects
        serializer = NewsSerializer(news, many=True)
        return Response(serializer.data)