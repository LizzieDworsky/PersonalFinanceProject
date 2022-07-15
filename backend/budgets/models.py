from django.db import models
from authentication.models import User
from categories.models import Category

# Create your models here.

class Budget(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    dollar_amount = models.DecimalField(max_digits=8, decimal_places=2)
    personal_percent = models.PositiveSmallIntegerField(blank=True)
    depth = 1