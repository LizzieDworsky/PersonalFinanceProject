from django.urls import path
from debts import views

urlpatterns = [
    path("all", views.get_all_debts),
    path("", views.user_debts),
    path("<int:pk>", views.user_update_debt),
]