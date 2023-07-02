from rest_framework import serializers
from crops.models import CoverCrop, Crops, CoverCrop


class CropSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crops
        fields = ['crop_name', 'cover_crops']


class CoverCropSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoverCrop
        fields = ['cover_name', 'description', 'link']
