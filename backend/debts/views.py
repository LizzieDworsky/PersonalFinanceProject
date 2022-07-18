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
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(["GET", "POST"])
@permission_classes([IsAuthenticated])
def user_debts(request):
    if request.method == "GET":
        all_user_debt = Debt.objects.filter(user_id=request.user.id)
        serializer = DebtSerializer(all_user_debt, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == "POST":
        serializer = DebtSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def user_update_debt(request, pk):
    user_debt = get_object_or_404(Debt, pk=pk)
    serializer = DebtSerializer(user_debt, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)