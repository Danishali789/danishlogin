function validate()
{
    var uname=document.getElementById('myname').value;
    var pass=document.getElementById('paswrd').value;

    if(uname=="rocky" && pass=="simran")
    {
       //location.assign("http://127.0.0.1:5500/");
       windows.alert("login succesfuly");
        return true;
    }
    else
    {
        location.assign("http://127.0.0.1:5500/");
       // window.alert("invalid user name or password");
        return false;

    }
}