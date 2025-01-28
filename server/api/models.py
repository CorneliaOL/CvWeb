from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    git_link = models.URLField()
    authors = models.CharField(max_length=300)  # Comma-separated authors
    keywords = models.CharField(max_length=300)  # Comma-separated keywords

    def __str__(self):
        return self.name
