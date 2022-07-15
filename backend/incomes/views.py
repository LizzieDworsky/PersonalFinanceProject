from django.shortcuts import get_object_or_404
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

@api_view(["POST", "PUT", "GET"])
@permission_classes([IsAuthenticated])
def user_income(request):
    if request.method == "POST":
        serializer = IncomeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == "GET":
        user_income = get_object_or_404(Income, user_id=request.user.id)
        serializer = IncomeSerializer(user_income)
        return Response(serializer.data)
    # if request.method == "PUT":
