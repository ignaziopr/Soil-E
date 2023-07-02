from django.db import models


class CoverCrop(models.Model):
    cover_name = models.CharField(max_length=50)
    description = models.TextField()
    link = models.URLField(max_length=1000)


class Crops(models.Model):
    crop_name = models.CharField(max_length=50)
    cover_crops = models.ManyToManyField(CoverCrop)
