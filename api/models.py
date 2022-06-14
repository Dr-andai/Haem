from django.db import models
from django.forms import CharField

# Create your models here.


class Bank (models.Model):
    name = models.CharField(max_length=50, blank=True)
    hospital = models.CharField(max_length=50, blank=True)

    def __str__ (self):
        return self.name