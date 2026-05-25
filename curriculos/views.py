from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from .models import Perfil

# --- PÁGINAS ---
def view_home(request):
    return render(request, 'home.html')

def view_login(request):
    return render(request, 'login.html')

def view_perfil(request):
    return render(request, 'perfil.html')

# --- LÓGICA DE CADASTRO E LOGIN ---
def cadastrar_usuario(request):
    if request.method == 'POST':
        nome = request.POST.get('nome')
        email = request.POST.get('email')
        senha = request.POST.get('senha')
        
        # Cria o usuário. Usamos o email como 'username' para evitar repetições
        user = User.objects.create_user(username=email, email=email, password=senha)
        user.first_name = nome
        user.save()
        
        # Cria a pasta de perfil vazia para ele poder adicionar foto depois
        Perfil.objects.create(usuario=user)
        
        # Faz o login automático e manda pra home
        login(request, user)
        return redirect('home')
    return redirect('login_page')

def logar_usuario(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        senha = request.POST.get('senha')
        
        user = authenticate(request, username=email, password=senha)
        if user is not None:
            login(request, user)
            return redirect('home')
    return redirect('login_page')

# --- LÓGICA DE EDITAR PERFIL (NOME E FOTO) ---
def editar_perfil(request):
    if request.method == 'POST':
        # Atualiza o Nome e Email
        request.user.first_name = request.POST.get('nome')
        request.user.email = request.POST.get('email')
        request.user.username = request.POST.get('email') # Mantém username igual ao email
        request.user.save()
        
        # Atualiza a Foto (se ele tiver enviado uma nova)
        nova_foto = request.FILES.get('foto')
        if nova_foto:
            request.user.perfil.foto = nova_foto
            request.user.perfil.save()
            
        return redirect('perfil')
    return redirect('perfil')