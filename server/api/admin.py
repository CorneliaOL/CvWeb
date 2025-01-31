from django.contrib import admin
from .models import Project, Person

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'git_link', 'authors', 'keywords')  # Fields to display in the admin list view
@admin.register(Person)
class PersonAdmin(admin.ModelAdmin):
    list_display = ('gitName',)  # Fields to display in the admin list view

