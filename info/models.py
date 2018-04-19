from django.db import models

class Patient(models.Model):
	first_name = models.CharField(max_length=30)
	last_name = models.CharField(max_length=30)
	age = models.IntegerField()
	dob = models.DateField()
	gender = models.CharField(max_length=30)
	phone_number = models.CharField(max_length=12)
	text_info = models.TextField()
