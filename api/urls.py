from django.db import router
from rest_framework import routers
from .api import BankViewSet

router = routers.DefaultRouter()
router.register('api/bank', BankViewSet, 'bank')

urlpatterns = router.urls

