from django.db import models
from authentication.models import User

# Create your models here.


class Income(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    yearly = models.DecimalField(max_digits=8, decimal_places=2)
    monthly = models.DecimalField(max_digits=8, decimal_places=2)
