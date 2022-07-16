from django.urls import path
from savings_investments import views

urlpatterns = [
    path("", views.get_all_savings_investments)
]