from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def login(request): #Para ver la vista de inicio
    # Render the 'login.html' template
    return render(request, 'login.html')
