from django.urls import path
from . import views
from .views import NewsListView 

urlpatterns = [
    path('register-course/', views.CourseRegistrationView.as_view(), name='register-course'),
    path('news/', NewsListView.as_view(), name='news-list'),
]
