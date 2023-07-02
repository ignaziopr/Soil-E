from crops.models import Crops, CoverCrop


class CoversController:
    def _init_(self, data):
        self._crop = data

    def control(self):
        crop = Crops.objects.filter(
            crop_name=self._name,
        )
        if not crop:
            return None

        return crop.cover_crops
