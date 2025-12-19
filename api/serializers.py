# api/serializers.py (NEW FILE)

from rest_framework import serializers
from .models import PatientAdherence

class AdherenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientAdherence
        fields = '__all__' # Expose all fields (including id)