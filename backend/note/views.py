from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import NoteSerializer
from .models import Note


# Create your views here.
class NoteView(ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer