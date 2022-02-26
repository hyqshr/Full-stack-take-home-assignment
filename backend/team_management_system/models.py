from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
# Create your models here.
class Member(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    phone_number = PhoneNumberField(unique = True, null = False, blank = False)
    email = models.EmailField(max_length = 30)
    is_admin = models.BooleanField()
    
    def __str__(self):
        return self.first_name + ' ' + self.last_name