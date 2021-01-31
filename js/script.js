let signupName = document.getElementById ("signupName");
let signupEmail = document.getElementById ("signupEmail");
let signupPassword = document.getElementById ("signupPassword");

let signinEmailInp = document.getElementById ("signinEmailInp");
let signinPasswordInp = document.getElementById ("signinPasswordInp");



let usersContainer;
        //home side\\

        let username = localStorage.getItem('recordUsername')

if(username) // not equal null
{
   
    document.getElementsByClassName('myName').innerHTML="welcome" + username;
}




//la awl mara ykh4\\
if(localStorage.getItem("ourUsers") == null)
{
     usersContainer = []; // get his new information \\
}
else 
{
     usersContainer =JSON.parse(localStorage.getItem("ourUsers"))
}




function signUp()
{
    if (emptyInputs()== false ) 
    {
        document.getElementById("alert").innerHTML = "All inputs is required"
        return false;
    }  

    var users = 
    {
        name : signupName.value ,
        email : signupEmail.value ,
        password : signupPassword.value
    }

     if(usersContainer.length == 0) // lw fadiaa
     {
        usersContainer.push (users);
        localStorage.setItem("ourUsers" ,JSON.stringify(usersContainer))

        document.getElementById("alert").innerHTML = "Succses"
        document.getElementById("alert").classList.replace("text-danger" ,"text-success")
        return true;
     }

     if(emailExistBefore()== false)
     {
        document.getElementById("alert").innerHTML = "Ur Email exist before"
        document.getElementById("alert").classList.replace("text-success" ,"text-danger")
        return false;
     }
     else
     {

        usersContainer.push (users);
        localStorage.setItem("ourUsers" ,JSON.stringify(usersContainer))
        document.getElementById("alert").innerHTML = "Here u are ^^"
        document.getElementById("alert").classList.replace("text-danger" ,"text-success")

     }
}

function emptyInputs()
{
    if(signupName.value == "" || signupEmail.value == "" || signupPassword.value == "")
    {
       return false; 
    }
    else 
    {
        return true;
    }
}

function emailExistBefore() 
{
    for(var i =0 ; i<usersContainer.length ; i++)
    {
        if(usersContainer[i].email == signupEmail.value )
        {
            console.log("loser")
            return false; 
           
        }
    }
}

//lw al user has account before
function hasAccount() { 
    if(localStorage.getItem('ourUsers')==null)  
    {
        return false;
    }
 }


function login()
{
    if(hasAccount()==false)
    {
        document.getElementById("alert").innerHTML = "U don't have an acount before!"
        
        return false;
        
    }


    if(loginEmpty()==false) 
    {

    document.getElementById("alert").innerHTML = "compelete ur data"
    console.log("hi bro")

    return false;

    }

var password = signinPasswordInp.value;
var email = signinEmailInp.value;


for( var i =0; i <usersContainer.length; i++)
    { 
        if (usersContainer[i].email == email && usersContainer[i].password==password)
        {
          
          console.log( localStorage.getItem('ourUsers', usersContainer[i].name) );
          
          location.href="rest/home.html"
       
        }   

    else
        {
           document.getElementById('alert').innerHTML= "failed"
            

         }
    }
}



function loginEmpty()
{
    if(signinPasswordInp.value == "" || signinEmailInp.value=="")
    {
        return false;
    }
    else
    {
        return true;
    }
}


/* function validateSignName ()
 {
     var regex = /^[A-Z][a-z]{3,5}$/;
     
     if(regex.test(signupNameInp.value) == true)
     {
        
        signupName.classList.add("is-valid");
        signupName.classList.remove("is-invalid");

     }
     
     else
     {
        signupName.classList.add("is-invalid");
        signupName.classList.remove("is-valid");
     }
 }


signupNameInp.addEventListener("keyup" , validateSignName ); */




/*press.addEventListener("click" , function()
{   
    signupName.classList.add( "d-none");
    document.getElementById("click").innerHTML="SignOut"
    btn.innerHTML = "Login"    
    
   
});

function validation()
{
var signupNameInp = document.getElementById ("signupName").value;
var signupEmailInp = document.getElementById ("signupEmail").value;
var signupPasswordInp = document.getElementById ("signupPassword").value;

    if(signupNameInp == '' || signupEmailInp =='' || signupPasswordInp == '')
    {

        document.getElementById("alert").innerHTML="All inputs is required";
        document.getElementById("alert").classList.replace("text-success" , "text-danger")
        
        return false;
    }
    else
    {
        document.getElementById("alert").innerHTML="Success";
        document.getElementById("alert").classList.replace("text-danger" , "text-success")

        return true;

    }
}


function users()
{
    
    var userInp = {

        name : signupNameInp.value ,
        email :signupEmailInp.value ,
        password : signupPasswordInp.value
    } ;
    
    usersContainer.push(userInp);
    
    localStorage.setItem("ourUsers" , JSON.stringify(usersContainer))

    checkEmail ()
    
}

btn.addEventListener ("click" , users);

function checkEmail ()
{
 var signupEmailInp = document.getElementById ("signupEmail").value;
var signupPasswordInp = document.getElementById ("signupPassword").value;

    for(var i =0; i < usersContainer.length; i++)
    {
        if(usersContainer[i].email == signupEmailInp  || usersContainer[i].password == signupPasswordInp )
                
        {
             
            return false;
        }
       return true;
    }
} */

