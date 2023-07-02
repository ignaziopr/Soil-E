from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('populate/', views.PopulateView.as_view()),
    path('covers/', views.CropView.as_view())
]
