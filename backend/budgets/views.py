from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from categories.models import Category
from categories.serializers import CategorySerializer
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
def get_user_budgets(request):
    all_user_budgets = Budget.objects.filter(user_id=request.user.id)
    serializer = BudgetSerializer(all_user_budgets, many=True)
    return Response(serializer.data)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def change_user_budgets(request, pk):
    budget_category = get_object_or_404(Category, pk=pk)
    serializer = BudgetSerializer(data=request.data)
    if serializer.is_valid():
        if request.method == "POST":
            serializer.save(user=request.user, category=budget_category)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        elif request.method == "PUT":
            pass
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
