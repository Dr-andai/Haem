from api.models import Bank
from rest_framework import viewsets, permissions
from .serializers import BankSerializer 

#Bank Viewsets

class BankViewSet (viewsets.ModelViewSet):
    queryset = Bank.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BankSerializer 