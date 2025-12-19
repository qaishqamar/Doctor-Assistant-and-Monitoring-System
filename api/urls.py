# api/urls.py (NEW FILE)

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AdherenceViewSet, DoctorAssistView

# Create a router instance
router = DefaultRouter()
# Register your ViewSet. The path will be 'api/adherence/'
router.register(r'adherence', AdherenceViewSet, basename='adherence')

urlpatterns = [
    path('', include(router.urls)), # Include all router-generated URLs
    
    # Example for a custom AI view that might not fit a typical ViewSet
    path('doctor-assist/', DoctorAssistView.as_view(), name='doctor_assist'),
]