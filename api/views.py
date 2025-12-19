# api/views.py

from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .models import PatientAdherence
from .serializers import AdherenceSerializer

# Handles GET (list/retrieve), POST, PUT, DELETE for Adherence data
class AdherenceViewSet(viewsets.ModelViewSet):
    # Only allow authenticated users
    permission_classes = [IsAuthenticated] 
    
    # Define which data set is available
    queryset = PatientAdherence.objects.all()
    
    # Define how the data is converted to/from JSON
    serializer_class = AdherenceSerializer

# Placeholder for your AI assisted Doctor View
class DoctorAssistView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # 1. TODO: Fetch patient data (Python/Django ORM)
        # 2. TODO: Run AI/ML calculation (Python/Pandas/Scikit-learn)
        
        response_data = {
            "ai_suggestion": "The AI model is not yet integrated, but prediction will go here.",
            "average_adherence": 0.0 # Placeholder calculation
        }
        
        return Response(response_data)