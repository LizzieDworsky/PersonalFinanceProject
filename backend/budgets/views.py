from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Budget
from .serializer import BudgetSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_budgets(request):
    budgets = Budget.objects.all()
    serializer = BudgetSerializer(budgets, many=True)
    return Response(serializer.data)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def user_budgets(request):
    if request.method == "GET":
        all_user_budgets = Budget.objects.filter(user_id=request.user.id)
        serializer = BudgetSerializer(all_user_budgets, many=True)
        return Response(serializer.data)