

var jsonObj;
var myVar=setInterval(function(){saveData()},1000);
	
	function onRefresh()
	{		
		document.getElementById("myform").reset();
	}
	
	function toJSONString()
	{
		
		jsonString = JSON.stringify(jsonObj);
	}
	
	
	
	function readFromJSONString()
	{
		var json=JSON.parse(jsonString);
		console.log("fname"+json.fname);
		console.log("lname"+json.lname);
		console.log("email"+json.email);
	}
	
	function verify()
	{
		var pass= document.getElementById("password").value;
		if(pass.length>25)
		{
			alert("password length cannot exceed 25 character");
			document.getElementById("password").value="";
		}
		else{
		var regexp = new RegExp("^(?=(.*[^A-Za-z0-9]){3})(?=(.*[A-Z]){3})(?=(.*[a-z]){2}).+");
		var regexp2 = new RegExp("^(?=(.*[^A-Za-z0-9]){6})(?=(.*[A-Z]){3})(?=(.*[a-z]){2}).+");
		var regexp3 = new RegExp("^(?=(.*[^A-Za-z0-9]){2})(?=(.*[A-Z]){3})(?=(.*[a-z]){2}).+");
		if(regexp2.test(pass))
		{
			document.getElementById("passStrength").value = "100";
		}
		else if(regexp.test(pass))
		{
			document.getElementById("passStrength").value = "70";
		}
		else if(regexp3.test(pass))
		{
			document.getElementById("passStrength").value = "40";
		}
		else
		{
			document.getElementById("passStrength").value = "10";
		}
		}
				
	}
	
	function checkPassword()
	{
		var pass= document.getElementById("password").value;
		var confirmPass = document.getElementById("confirmPassword").value;
		if(pass!=confirmPass)
		{
			alert("Passwords do not match");
		}
		toJSONString();
		readFromJSONString();
	}
	
	
	function saveData() 
	{
		var online;
		try {
			var x = google.maps.MapTypeId.TERRAIN;
			online = true;
		} catch (e) {
		online = false;
		}
		
		var fname = document.getElementById("fName").value;
			var lname = document.getElementById("lName").value;
			var email = document.getElementById("email").value;
			var password = document.getElementById("password").value;
			var dob = document.getElementById("dob").value;
			var dobtime = document.getElementById("dobtime").value;
			var localdob = document.getElementById("localdob").value;
			var ssn = document.getElementById("ssn").value;
			var phNo = document.getElementById("phoneNumber").value;
			var ccn = document.getElementById("creditCard").value;
			
			jsonObj={fname:fname,lname:lname,email:email,password:password,dob:dob,dobtime:dobtime,localdob:localdob,ssn:ssn,phNo:phNo,ccn:ccn};
			
		if(online)
		{
			
			sessionStorage.setItem("jsonObj",jsonObj);
				
			
		}
		else
		{
			if (Modernizr.localstorage) 
			{
						
			localStorage.setItem("jsonObj",jsonObj);
			
			} 
			else 
			{
				alert("Local storage is not supported by browser");
			}
						
		}
	}
