from django.urls import path
from incomes import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    # path('', views.user_cars),
    path('all/', views.get_all_incomes),
]
