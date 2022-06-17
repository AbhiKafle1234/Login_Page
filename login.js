function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    
    if(username=="lm10@gmail.com" && password=="messi10")
    {
        window.open("./next_page.html",'_blanlk');
    }
    else
    {
        alert("login failed");
    }

}