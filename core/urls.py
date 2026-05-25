from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from curriculos import views 

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Telas
    path('', views.view_home, name='home'),
    path('login/', views.view_login, name='login_page'),
    path('perfil/', views.view_perfil, name='perfil'),
    
    # Ações dos Formulários
    path('cadastrar/', views.cadastrar_usuario, name='cadastrar'),
    path('logar/', views.logar_usuario, name='login'),
    path('editar-perfil/', views.editar_perfil, name='editar_perfil'),
]

# Configuração OBRIGATÓRIA para o Django exibir a foto de perfil que o usuário subiu
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)