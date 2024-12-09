// let min = prompt("Enter the min number");
// let max =  prompt("Enter the max number");

// function display(min,max){
//     return Math.floor(Math.random()* (max-min + 1))+min;

// }

// let result = display(30,40);
// console.log(result);

function validate(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let passward = document.getElementById("psw").value;
    let confirmPassward = document.getElementById("cnf").value;
    if(name == "" || age == "" || email == "" || passward == "" || confirmPassward == ""){
        alert("cannt be empty");
        return false;
    }
   else if(age>100){
        alert("age btw 0 to 100");
        return false;

    }
    else if(passward !== confirmPassward){
        alert("Passward do not match");
        return false;
    }
}
