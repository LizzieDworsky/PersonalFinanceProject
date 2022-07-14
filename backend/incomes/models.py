from django.db import models
from djmoney.models.fields import MoneyField
from authentication.models import User

# Create your models here.


class Income(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    yearly = MoneyField(max_digits=8, decimal_places=2, default_currency="USD")
    monthly = MoneyField(max_digits=6, decimal_places=2, default_currency="USD")
