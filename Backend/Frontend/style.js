// timer of website

setInterval(timer, 1000);
function timer() {
    time.innerHTML = new Date();
}

function signupchecker()
{
    // alert("Submit your response?");
    let x=document.forms["meraform2"]["uname"].value;
    if(x == "")
    {
        alert("write name properly");
        return false;
    }
    x=document.forms["meraform2"]["email"].value;
    if(x.search("@") == -1)
    {
        alert("write email id properly");
        return false;
    }
}
