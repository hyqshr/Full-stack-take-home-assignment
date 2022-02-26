from django.urls import path

# from . import views
from team_management_system.views import member_views as views

urlpatterns = [
    path('', views.getMembers, name='members'),
    path('create', views.createMember, name='members-create'),
    path('delete', views.deleteMember, name='members-delete'),
    path('update', views.updateMember, name='members-update'),

]