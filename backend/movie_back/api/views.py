from .models import Genre, Movie, User
from .serializers import *
from rest_framework.response import Response
from django.http.response import JsonResponse
from django.shortcuts import Http404
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated

def genres_list(request):
    genres=Genre.object.all()
    serializer=GenreSerializer(genres, many=True)
    return Response(serializer.data)

def genres_movies(request, genre_id):
    try:
        return Movie.objects.filter(id=genre_id)
    except Movie.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    serializer = MovieSerializer(Movies, many=True)
    return Response(serializer.data)

def movies_list(request):
    movies = Movie.object.all()
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)

def movies_detail(request, movie_id):
    try:
        return Movie.objects.get(id=movie_id)
    except Movie.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    serializer = MovieSerializer(movie)
    return Response(serializer.data)


class UsersListAPIView(APIView):
    def get(self, request):
        users = User.object.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class UserDetailAPIView(APIView):
    def get_object(self, pk):
        try:
            return User.objects.get(id=pk)
        except User.DoesNotExist as e:
            raise Http404

    def get(self, request, pk=None):
        user=self.get_object(id)
        serializer=UserSerializer(user)
        return Response(serializer.data)
