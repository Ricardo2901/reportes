from django.http import HttpResponse
from datetime import datetime
from django.shortcuts import render

def mayma(request):
    # Render the 'mayma.html' template
    return render(request, 'mayma.html')

def index(request):
    # Render the 'index.html' template
    return render(request, 'index.html')

def login(request):
    # Render the 'login.html' template
    return render(request, 'login.html')
    

