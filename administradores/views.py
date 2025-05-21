from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime

# Create your views here
def indexAdministrador(request):
    # Render the 'indexAdminnistrador.html' template
    return render(request, 'indexAdminnistrador.html')

def dashboard(request):
    # Render the 'dashboard.html' template
    return render(request, 'dashboard.html')

def reportes(request):
    # Render the 'reportes.html' template
    return render(request, 'reportes.html')

def clientes(request):
    # Render the 'clientes.html' template
    return render(request, 'clientes.html')

def usuarios(request):
    # Render the 'usuarios.html' template
    return render(request, 'usuarios.html')

def administradores(request):
    # Render the 'administradores.html' template
    return render(request, 'administradores.html')

def todosUsuarios(request):
    # Render the 'todosUsuarios.html' template
    return render(request, 'todosUsuarios.html')

def verPerfil(request):
    # Render the 'verPerfil.html' template
    return render(request, 'verPerfil.html')