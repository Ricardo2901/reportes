from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime

# Create your views here.

def home(request): #Para ver la vista de inicio
    # Render the 'dashboard.html' template
    return render(request, 'dashboard.html')

def reportes(request): #Para ver la vista de reportes
    # Render the 'reportes.html' template
    return render(request, 'reportes.html')

def crearReportes(request): #Para ver la vista de crear reportes (formulario)
    # Render the 'crearReportes.html' template
    return render(request, 'crearReportes.html')

def verPerfil(request): #Para ver la vista de perfil del usuario autenticado
    # Render the 'verPerfil.html' template
    return render(request, 'verPerfil.html')


