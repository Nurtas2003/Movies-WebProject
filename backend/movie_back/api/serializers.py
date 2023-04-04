from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *


class GenreSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('id', 'name', 'description', 'rate', 'length', 'img', 'cover', 'like', 'genre')


class UserSerializer(serializers.Serializer):
    name = serializers.CharField(read_only=True)
    surname = serializers.CharField(read_only=True)
    username = serializers.CharField(read_only=True)
    email = serializers.CharField(read_only=True)
    password = serializers.CharField(read_only=True)
    img = serializers.CharField(read_only=True)
    status = serializers.BooleanField()

    def update(self, instance, validated_data):
        instance.status = validated_data['status']
        instance.save()
        return instance