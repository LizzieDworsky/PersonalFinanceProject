from django.urls import path
from savings_investments import views

urlpatterns = [
    path("all", views.get_all_savings_investments),
    path("", views.get_user_savings_investments),
]