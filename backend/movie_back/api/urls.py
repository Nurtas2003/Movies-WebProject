from django.urls import path
import rest_framework_jwt.views
from .views import *

urlpatterns = [
    path('login/', rest_framework_jwt.views.obtain_jwt_token),
    path('genres/', genres_list),
    path('genres/<int:genre_id>/', genres_movies),
    path('movies/', movies_list),
    path('movies/<int:movie_id>/', movies_detail),
    path('users/', UsersListAPIView.as_view()),
    path('users/<int:pk>/', UserDetailAPIView.as_view())
]