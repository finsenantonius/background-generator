const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const email = urlParams.get('email');
console.log(email);

const password = urlParams.get('password');
console.log(password);

const confirm_password = urlParams.get('conf_password');
console.log(confirm_password);


function showPassword() {
    var x = document.getElementById("pwd");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function validate() {
    var password = document.getElementById("pwd").value
    var confirmPassword = document.getElementById("cpwd").value;
    if (password !== confirmPassword) {
        alert("password dont match");
        return false;
    } else {
    return true;
    } 
    
}
    


//  function move(){
//     pindah = validate();

//     if(pindah){
//         return "data.html"
//     }
//  }