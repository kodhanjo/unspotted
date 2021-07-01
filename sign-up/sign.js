function signUp(){
    var number=document.getElementById("number").value;
    var password=document.getElementById("password").value;
    var username=document.getElementById("username").value;
    // var day=document.getElementById("day").value;
    if(number<1 || number>10)
    {
      alert("Enter valid phone number!");
    }
    else
    if(password<8 || password>16)
    {
      alert("Enter valid password!");
    }
    else
    if(username<1 || username>14)
    {
      alert("Enter valid username!");
    }
    else("Success! We have sent you a verification throgh your email. ")