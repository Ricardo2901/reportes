from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime
from django.urls import reverse

# Create your views here

def index(request): #Para ver la vista de inicio
    # Render the 'index.html' template
    return render(request, 'administradores/index.html')

def home(request): #Para ver la vista de inicio
    # Render the 'dashboard.html' template
    
    return render(request, 'administradores/home.html')

def reportes(request): #Para ver la vista de reportes
    # Render the 'reportes.html' template
    return render(request, 'administradores/reportes.html')

def crearReporte(request): #Para ver la vista de crear reporte
    # Render the 'crearReporte.html' template
    return render(request, 'administradores/reportesForm.html')

def clientes(request): #Para ver la vista de clientes
    # Render the 'clientes.html' template
    return render(request, 'administradores/clientes.html')

def usuarios(request): #Para ver la vista de usuarios
    # Render the 'usuarios.html' template
    return render(request, 'administradores/users.html')

def administradores(request): #Para ver la vista de administradores
    # Render the 'administradores.html' template
    return render(request, 'administradores/admin.html')

def todosUsuarios(request): #Para ver la vista de todos los usuarios/administradores
    # Render the 'todosUsuarios.html' template
    return render(request, 'administradores/todosUsuarios.html')

def verPerfil(request): #Para ver la vista de perfil del usuario autenticado
    # Render the 'verPerfil.html' template
    return render(request, 'administradores/profile.html')

def acercaAplicacion(request):
    #Render the 'acercaApp.html' template
    return render(request, 'administradores/acercaApp.html')