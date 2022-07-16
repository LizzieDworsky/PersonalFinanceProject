import datetime
from django.db import models
from authentication.models import User

# Create your models here.

class Debt(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=40)
    total_owed = models.DecimalField(max_digits=8, decimal_places=2)
    min_payment = models.DecimalField(max_digits=8, decimal_places=2)
    date = models.DateField(default=datetime.date.today)
    depth = 1