
from django.urls import path
from django.conf.urls import include

urlpatterns = {
    path('footprint/', include('footprint.urls')),
}