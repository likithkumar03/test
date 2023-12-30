

function payment(){
    let name = document.getElementById("name")

    let email = document.getElementById("email")
    
    let number = document.getElementById("number")
    
    let place = document.getElementById("place")
    
    let vegetables = document.getElementById("vegetables")
    
    let fruits = document.getElementById("fruits")
    
    let groceries = document.getElementById("groceries")

    let dryfruits = document.getElementById("dryfruits")

    let result = "Name: "+ name.value + "<br>" +
                "Phone: "+ email.value + "<br>" +
                "Email: "+ number.value + "<br>" +
                "Place: "+ place.value + "<br>"; 
let total = parseInt(vegetables.value) + parseInt(fruits.value) + parseInt(groceries.value) + parseInt(dryfruits.value) ;
result += "Total amount is :"+ total + "<br>";
let GST = total + (total*12/100) + "/-";
result += "Total bill payment with GST is: "+ GST + "<br>";

// let tip = GST + parseInt(100)
// result = result + "Total bill payment with tip is: "+ tip + "<br>";

// document.getElementsByclassName('paymentDetails').innerHTML = result;


let form = document.createElement('p')

form.innerHTML = result 

let parent = document.getElementsByClassName("paymentDetails")

parent[0].appendChild(form)

}



