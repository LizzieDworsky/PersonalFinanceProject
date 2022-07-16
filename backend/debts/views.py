from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Debt
from .serializers import DebtSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_debts(request):
    debts = Debt.objects.all()
    serializer = DebtSerializer(debts, many=True)
    return Response(serializer.data)