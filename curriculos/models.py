from django.db import models
from django.contrib.auth.models import User

class Perfil(models.Model):
    usuario = models.OneToOneField(User, on_delete=models.CASCADE, related_name='perfil')
    foto = models.ImageField(upload_model='perfis/', default='perfis/default.png', blank=True)
    plano_premium = models.BooleanField(default=False)

    def __clicados__(self):
        return f"Perfil de {self.usuario.username}"
    