from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Income
from .serializers import IncomeSerializer



@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_incomes(request):
    incomes = Income.objects.all()
    serializer = IncomeSerializer(incomes, many=True)
    return Response(serializer.data)