
        function validateform() {
            var uid1=document.getElementById("uid").value;
            var pass1=document.getElementById("password").value;
            var name1=document.getElementById("name").value;
            var add1=document.getElementById("address").value;
            var coun1=document.getElementById("country").value;
            var code1=document.getElementById("code").value;
            var email1=document.getElementById("email").value;
            var gen1=document.getElementById("gender").value;
            var lan1=document.getElementById("language").value;
        
            var letters = /^[A-Za-z]{1,17}$/;  
                var email_val = /^[A-Za-z_1-999]{3,}@[A-Za-z]{3,6}.[A-Za-z]{3,}$/;  
                var letter = /^[0-9a-zA-Z]+$/;
                var numbers = /^[0-9]+$/;
                var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(uid1==''||pass1==''||name1==''||add1==''||coun1==''||email1==''||gen1==''||lan1==''){  
        alert("Enter each details correctly");  
        }  
        else if(!letters.test(name1))  
                {  
                    alert('Name is incorrect must contain alphabets only');  
                }  
        else if (!email_val.test(email1))  
                {  
                    alert('Invalid email format please enter valid email id');  
                }  
        else if(pass1.length<7)
        {
        alert("Password must be at least 7 characters long.");
        }
        else if(pass1.length>12)
        {
        alert("Password must be at max 12 characters long.");
        }
        
        else if(!letter.test(add1))
        {
        alert('User address must have alphanumeric characters only');
        }
        /*function validateform(gender) {
        x=0;
        if(mGen.checked) {
        x++; }
        if(fGen.checked) {
        x++; }
        if(others.checked) {
        x++; }
        if(x==0) {
        alert('Select Male/Female/others');
        mGen.focus();
        return false;
        }
        else
        {
        alert('Form Successfully Submitted');
        window.location.reload()
        return true;
        }
        }*/
         
        else if(coun1 == "Default")
         {
        alert('Select your country from the list');
        }
         
        else if(!numbers.test(code1)) {
        alert('ZIP code must have numeric characters only');
        }
        
        else if(!mailformat.test(email1))
        {
        alert("You have entered an invalid email address!");
         }
        
         else{  
        alert("Your account has been created successfully... ");  
         }
        }
        
