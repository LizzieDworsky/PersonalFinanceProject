from django.urls import path
from categories import views


urlpatterns = [
    path("all", views.get_all_categories),
    # path("", views.user_income),
]