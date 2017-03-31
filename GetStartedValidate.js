
function validate() {
	
	var errormsg = "";
	
	if(document.getElementById('uname').value == "")
	{
		errormsg += "Please Enter Username \n";
		document.getElementById('uname').style.bordercolor = 'red';
	}
		
		if(document.getElementById('pass').value == "")
		{
			errormsg += "Please enter password \n";
			document.getElementById('pass').style.bordercolor = 'red';
		}		
		if(errormsg != "")
		{
			alert(errormsg);
			return false;
			}	
}

