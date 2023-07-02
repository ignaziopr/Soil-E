from crops.models import Crops, CoverCrop
from soilie import settings as soilie_settings


class PopulateCropsController:
    def _init_(self, data):
        # parse_data
        self._name = 'name of data'

    def process_covers(self):
        cover_lst = []
        for c in self._cnames:
            cover = CoverCrop.objects.filter(
                cover_name=c
            )
            cover_lst.append(cover)
        return cover_lst

    def process(self):
        covers = self.process_covers()
        crop = Crops.objects.filter(
            crop_name=self._name,
        )
        if crop:
            return False

        crop = Crops.objects.create(
            crop_name=self._name
        )

        for c in covers:
            crop.crop_covers.add(c)

        crop.save()
        return True
