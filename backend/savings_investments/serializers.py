from rest_framework import serializers
from.models import SavingInvestment

class SavingInvestmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = SavingInvestment
        fields = ["id", "user_id", "name", "total", "is_investment", "date"]
        depth = 1