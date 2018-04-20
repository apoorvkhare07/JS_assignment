from .models import Patient
from django.http import HttpResponse
from django.shortcuts import render, redirect, get_object_or_404
from datetime import date,datetime

def calculate_age(born):
	born = datetime.strptime(born, '%Y-%m-%d')
	today = date.today()
	return today.year - born.year - ((today.month, today.day) < (born.month, born.day))

def info_page(request):
	if request.method == 'POST':
		first_name =request.POST['first_name']
		last_name = request.POST['last_name']
		dob = request.POST['dob']
		gender = request.POST['gender']
		phone_number = request.POST['phone_number']
		text_info = request.POST['description']

		age = calculate_age(dob)

		patient = Patient.objects.create(
			first_name = first_name,
			last_name = last_name,
			age = age,
			dob = dob,
			gender = gender,
			phone_number = phone_number,
			text_info = text_info,
		)

		return redirect('patients_list')  

	return render(request, 'home.html')

def patients_list(request):
	patients = Patient.objects.all()
	return render(request, 'list.html', {'patients': patients})

