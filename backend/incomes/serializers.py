from rest_framework import serializers
from .models import Income


class IncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        fields = ['id', 'yearly_currency', 'yearly', 'monthly_currency', 'monthly','user_id']
        depth = 1
