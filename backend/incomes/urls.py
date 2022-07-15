from django.urls import path
from incomes import views


urlpatterns = [
    path("all", views.get_all_incomes)
]