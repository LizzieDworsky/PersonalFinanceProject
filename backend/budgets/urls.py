from django.urls import path
from budgets import views


urlpatterns = [
    path("all", views.get_all_budgets),
    # path("", views.user_income),
]