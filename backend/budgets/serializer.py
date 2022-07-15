from rest_framework import serializers
from .models import Budget


class BudgetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Budget
        fields = ["id", "user_id", "category_id", "category", "dollar_amount", "personal_percent", "date"]
        depth = 1