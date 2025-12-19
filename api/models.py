# api/models.py

from django.db import models
from django.contrib.auth.models import User

class PatientAdherence(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    medication_name = models.CharField(max_length=100)
    adherence_rate = models.DecimalField(max_digits=5, decimal_places=2) # e.g., 0.85
    date_recorded = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.medication_name}"

# Register the model in api/admin.py
# from .models import PatientAdherence
# admin.site.register(PatientAdherence)