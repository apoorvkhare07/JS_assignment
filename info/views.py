from .models import Patient
from django.http import HttpResponse
from django.shortcuts import render, redirect, get_object_or_404



def info_page(request):
	if request.method == 'POST':
		first_name =request.POST['first_name']
		last_name = request.POST['last_name']
		age = request.POST['age']
		dob = request.POST['dob']
		gender = request.POST['gender']
		phone_number = request.POST['phone_number']
		text_info = request.POST['text_info']

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
