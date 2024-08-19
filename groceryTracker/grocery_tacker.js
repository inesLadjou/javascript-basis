let grocery_1;
let grocery_2;
let grocery_3;
function calculateTotalAmount(){
    grocery_1 = parseFloat(document.getElementById("grocery1").value);
    grocery_2 = parseFloat(document.getElementById("grocery2").value);
    grocery_3 = parseFloat(document.getElementById("grocery3").value);
    let total = grocery_1 + grocery_2 + grocery_3;
    document.getElementById("result").innerText = `The Calculated Total Amount is : ${total}`;
}