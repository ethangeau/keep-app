from django.db import models


# Create your models here.
class Note(models.Model):
    title = models.CharField(max_length=128)
    content = models.TextField()

    def _str_(self):
        return self.title
