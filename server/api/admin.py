from django.contrib import admin
from .models import Project

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'git_link', 'authors', 'keywords')  # Fields to display in the admin list view
