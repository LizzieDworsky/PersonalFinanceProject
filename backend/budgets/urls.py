from django.urls import path
from budgets import views


urlpatterns = [
    path("all", views.get_all_budgets),
    path("", views.get_user_budgets),
    path("<int:pk>", views.change_user_budgets),
]