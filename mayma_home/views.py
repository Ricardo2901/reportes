from django.http import HttpResponse
from datetime import datetime
from django.shortcuts import render

def mayma(request): # Vista de inicio (principal)
    # Render the 'mayma.html' template
    return render(request, 'maymaapp/mayma.html')

def index(request): # Vista de inicio
    # Render the 'index.html' template
    return render(request, 'index.html')
    

