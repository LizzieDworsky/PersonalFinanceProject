from django.urls import path
from debts import views

urlpatterns = [
    path("all", views.get_all_debts),
    path("", views.get_user_debts),
]