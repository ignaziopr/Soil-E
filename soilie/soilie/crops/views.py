from django.shortcuts import render
from django.http import HttpResponse
from crops.controllers.populate_covers_controller import PopulateCropCoverController
from crops.controllers.populate_crops_controller import PopulateCropsController
from crops.controllers.get_covers_controller import CoversController
from rest_framework import generics
from rest_framework import status
from soilie import settings as soilie_settings
from crops.utils import *
import json
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from crops.models import Crops, CoverCrop
from crops.serializers import *

# Create your views here.


def index(request):
    return HttpResponse("Hello, world. You're at the crops index.")


class PopulateView(generics.GenericAPIView):

    def _parse(self, file, controller):
        """Parse hardcoded files to separate elements in it."""
        pass

    def _files(self, file):
        "returns controller for filename"
        if file == 'soilie_crops.txt':
            return PopulateCropsController
        elif file == 'soilie_covercrops.txt':
            return PopulateCropCoverController

    def post(self, request):
        """Populates database with the hardcoded data."""
        body = json.loads(request.body)
        files = body.get("files")
        if not files:
            return failure_response(
                "POST body is misformatted", status.HTTP_400_BAD_REQUEST
            )

        for file in files:
            controller = self._files(file)
            if controller:
                self._parse_create(file, controller)
            else:
                return failure_response(
                    f"Invalid filename {file}", status.HTTP_406_NOT_ACCEPTABLE
                )
        if files:
            return success_response(
                f"Successfully created new entries",
                status.HTTP_201_CREATED,
            )
        else:
            return success_response("No edits", status.HTTP_200_OK)


class CropView(generics.GenericAPIView):

    def get(self, request):
        """Populates the database with the hardcoded data."""
        serializer_class = CropSerializer
        serializer_class_two = CoverCropSerializer

        body = json.loads(request.body)
        crop = body.get("crop")
        if crop is None:
            return failure_response(
                "POST crop was not valid", status.HTTP_400_BAD_REQUEST
            )
        covers = CoversController(data=crop).process()
        if covers:
            return success_response(
                self.serializer_class_two(
                    covers, many=True).data, status.HTTP_200_OK
            )
