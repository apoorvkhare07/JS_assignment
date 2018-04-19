document.getElementById("submit_button").disabled = true;
document.getElementById('button_div').innerText = 'You can only submit the form after Filling all the fields with valid data';
var is_set = [];
is_set['first_name'] = 0;
is_set ['last_name'] = 0;
is_set ['age']= 0;
is_set['dob'] = 0,
is_set['phone_number']=0,
is_set['gender'] =0 ;

function check_not_empty(field){
	var field_value =  document.getElementById(field);

	if (field_value.value.length == 0 || field_value.value == "" ) {
//		console.log('aie chakke')
	document.getElementById(field+'_div').innerText = "* All fields are mandatory *"; // This segment displays the validation rule for all fields
	is_set[field_value.name]=0;
	return false;
	}
	if (field_value.value.length != 0 || field_value.value != '') {
		document.getElementById(field+'_div').innerText = "";
		is_set[field_value.name]=1;
	}
	return true;

}

function checkGender(){
	
	var field_value =  document.getElementById('gender');
	if (field_value.value == 'Select') {
	document.getElementById('gender_div').innerText = "* Please select your gender *"; // This segment displays the validation rule for all fields
		is_set['gender'] =0;
		formValidation();
		return false;
	}
	else {
		document.getElementById('gender_div').innerText = "";
		is_set['gender'] =1;
		formValidation();
	return true;
	
	}
 formValidation();	
 return false;
}

function checkNames(field){
	if (check_not_empty(field)){
	var regex = /^[a-zA-Z ]{2,30}$/;
	var name = document.getElementById(field);
	if(field == 'first_name')
			var field_name = 'Firstname';
		else
			var field_name = 'Lastname';

	if ( !regex.test(name.value)) {
     document.getElementById(field+'_div').innerText = "Enter a valid "+field_name +'\n'+ 'It should contain only characters and its length should be between 2-30 characters '; 
         is_set[field] = 0;  
         formValidation();
         return false;
    }
   is_set[field] = 1;  
   formValidation();
   return true;
}
formValidation();
return false; 
}


function checkAge(){
	if (check_not_empty('age')){
	var age_value = document.getElementById('age').value;

	if (!(age_value > 0 && age_value < 200) ){
	 document.getElementById('age_div').innerText = "Enter a valid age.";
	 is_set['age']=0;
	 formValidation();
	 return false;
	}	
	is_set['age'] = 1;
	formValidation();
	return true;
}
formValidation();
return false;
}

function checkDob(){
	if (check_not_empty('dob')){
	var date_regex=/^\d{4}\-\d{1,2}\-\d{1,2}$/;
	var dob = document.getElementById('dob').value;

	if (!date_regex.test(dob)){
	 document.getElementById('dob_div').innerText = "Enter a valid Date." + '\n' + 'A valid date is of the type YYYY-MM-DD';
	is_set['dob']=0;
	formValidation();
	return false;
	}
	is_set['dob']=1;
	formValidation();	
	return true;
}
formValidation();
return false;
}

function checkphoneNumber(){
	if (check_not_empty('phone_number')){	
	var pn_regex=/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
	var pn = document.getElementById('phone_number').value;

	if (!pn_regex.test(pn)){
	 is_set['phone_number']=0;	
	 document.getElementById('phone_number_div').innerText = "Enter a valid phone_number.";
	 formValidation();
	 return false;	
	}
	is_set['phone_number']=1;
	formValidation();
	return true;
	}
formValidation();	
return false;
}

function checkDescription(){
	if(check_not_empty('description')){
	}
	else{
	 document.getElementById('description_div').innerText = "Please enter patients description. (Recomended)";		
	}
}

function formValidation(){
	console.log(is_set);
	if(is_set['first_name'] == 1 && is_set['last_name'] == 1 && is_set['gender'] ==1 && is_set['phone_number'] ==1 && is_set['dob'] ==1 && is_set['age'] ==1 ){
	document.getElementById('button_div').innerText = '';
	document.getElementById("submit_button").disabled = false;
	}
	else{
	document.getElementById("submit_button").disabled = true;
	document.getElementById('button_div').innerText = 'You can only submit the form after Filling all the fields with valid data';
	}
}

