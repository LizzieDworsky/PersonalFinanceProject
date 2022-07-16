from django.urls import path
from debts import views

urlpatterns = [
    path("", views.get_all_debts)
]