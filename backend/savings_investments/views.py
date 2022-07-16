from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import SavingInvestment
from .serializers import SavingInvestmentSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_savings_investments(request):
    saves_invests = SavingInvestment.objects.all()
    serializer = SavingInvestmentSerializer(saves_invests, many=True)
    return Response(serializer.data)


@api_view(["GET", "POST"])
@permission_classes([IsAuthenticated])
def user_savings_investments(request):
    if request.method == "GET":
        all_user_sav_invest = SavingInvestment.objects.filter(user_id=request.user.id)
        serializer = SavingInvestmentSerializer(all_user_sav_invest, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = SavingInvestmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def user_update_saving_investment(request, pk):
    user_saving_invest = get_object_or_404(SavingInvestment, pk=pk)
    serializer = SavingInvestmentSerializer(user_saving_invest, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)