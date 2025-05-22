from django.http import HttpResponse
from datetime import datetime
from django.shortcuts import render

# Create your views here.
def home(request):
    # Render the 'dashboard.html' template
    return render(request, 'cliente/dashboard.html')

def reportes(request):
    # Render the 'reportes.html' template
    return render(request, 'cliente/reportes.html')

def verPerfil(request):
    # Render the 'verPerfil.html' template
    return render(request, 'cliente/verPerfil.html')
