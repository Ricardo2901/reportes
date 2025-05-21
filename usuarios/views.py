from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime

# Create your views here.
def indexUsuario(request): # Plantilla padre
    # Render the 'indexUsuario.html' template
    return render(request, 'indexUsuario.html')

def dashboard(request):
    # Render the 'dashboard.html' template
    return render(request, 'dashboard.html')

def reportes(request):
    # Render the 'reportes.html' template
    return render(request, 'reportes.html')

def verPerfil(request):
    # Render the 'verPerfil.html' template
    return render(request, 'verPerfil.html')


