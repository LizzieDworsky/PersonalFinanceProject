from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from.models import Debt

class DebtSerializer(serializers.ModelSerializer):
    class Meta:
        model = Debt
        fields = ["id", "user_id", "name", "total_owed", "min_payment", "date"]
        depth = 1