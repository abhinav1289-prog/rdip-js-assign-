function displayy(val) 
{ 
document.getElementById("result").value+=val;
    return result;
}  
function solve() 
{ 
let x = document.getElementById("result").value; 
let y = eval(x) 
document.getElementById("result").value = y; 
    return result;
}  
function clr() 
{ 
document.getElementById("result").value = "";
    return result;
} 
function root()
{

    let a = document.getElementById("result").value;
    c=parseInt(a,10)
    let b= Math.sqrt(c)
    document.getElementById("result").value = b;

}
 function validateform(){ 
    var name=document.myform.name.value; 
    var password=document.myform.password.value; 
 
    if (name==null || name==""){ 
       alert("Name can't be blank"); 
       return false;
       } 
       else if(!isNaN(name))
                    {
                      alert("Please Enter Only Characters");
                      return false;
                    }
                     else if ((name.length < 5) || (name.length > 15))
                    {
                       alert("Your Character must be 5 to 15 Character");
                       return false;
                     }
    else if(password.length<6){ 
       alert("Password must be at least 6 characters long."); 
       return false; 
      }
    else if(!(/^\d{10}$/).test(document.myform.phno.value))
    {
       alert("you have entered an invalid phone number!");
     return false;
    }
    else if(!( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(document.myform.email.value))
    {
     alert("you have entered an invalid email address!");
     return false;
    }
  
   } 

   function pal() {
var revstring = "";
var str = document.getElementById("str").value;
var i = str.length;
for(var j=i; j>=0; j--) {
revstring = revstring+str.charAt(j);
}

if(str === revstring) {
  alert(str+" is Palindrome");
return str+" is Palindrome";
} else {
  alert(str+" is not a palindrome");
return str+" is not a Palindrome";
}
}
function anagram(){
    var st = document.getElementById("name2").value;
    var s = document.getElementById("name3").value;
    var le = st.toLowerCase();
    var l = s.toLowerCase(); 
    var ts = le.split(' ').sort().join('');
    var t = l.split(' ').sort().join('');
   var p = ts.localeCompare(t);
   if (p != 0) {
    alert("it is not anagram");
    return false;
   }
       if (p === 0) {
 alert("it is  anagram");
    return true;
    }