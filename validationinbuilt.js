function validate(){
	let fname=document.getElementById("FirstName").value;
	let lname=document.getElementById("LastName").value;
	let email=document.getElementById("Email").value;
	let phone=document.getElementById("Phone").value;
	allvalidate(fname,lname,email,phone);	
}
function allvalidate(a,b,c,d){
	if(a=='' && b=='' && c=='' && d==''){
		document.getElementById("fname").innerHTML="First name required!";
		document.getElementById("lname").innerHTML="Last name required!"
		document.getElementById("email").innerHTML="Email required!"
		document.getElementById("phone").innerHTML="Phone required!"
	}
	len(a,b,c,d);
}
function len(a1,b1,c1,d1){
	console.log(a1,b1,c1,d1);
}