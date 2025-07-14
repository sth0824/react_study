# mysite/urls.py

from django.contrib import admin
from django.urls import path, include
from mysite import views  # 추가

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.HomeView.as_view(), name='home'),  # 추가
    path('polls/', include('polls.urls')),
    path('books/', include('books.urls')),
]
