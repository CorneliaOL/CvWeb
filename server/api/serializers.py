from rest_framework import serializers
from .models import Project, Person

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'name', 'description', 'git_link', 'authors', 'keywords']

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ['gitName',]

