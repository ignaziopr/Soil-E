from crops.models import Crops, CoverCrop


class PopulateCropCoverController:
    def _init_(self, data):
        # parse data here
        self._name = "name of data"

    def populate(self):
        cover = CoverCrop.objects.filter(
            cover_name=self._name, description=self._description, link=self._link
        )
        if cover:
            return None
        cover = CoverCrop.objects.create(
            cover_name=self._name, description=self._description, link=self._link
        )
        cover.save()
        return cover
