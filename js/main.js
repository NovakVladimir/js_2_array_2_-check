
var arr = [];

function deleteArr() {
    // LET DELETE REFLECTION OF ARRAY IN HTML IF IT IS EXIST
    let myNode = document.getElementById("container");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

function insertArr() {
    // LET DISPLAY OUR NEW ARRAY IN HTML
    for(let i = 0; i < arr.length; i++) {
        container.insertAdjacentHTML('beforeend', `<p>${arr[i].name} - ${arr[i].quantity} - ${arr[i].price}$/kg</p>`);
    }
}


function addPurchase() {
    // LET'S GET VALUE OF INPUT
    let nameProduct = document.getElementById("userProduct").value;
    if(nameProduct == 0) {
        alert("Please, enter the name of the product");
        return; 
    }

    let quantityProduct = Number(document.getElementById("userQuantity").value);
    if(quantityProduct == 0) {
        alert("Please, enter the quantity of the product");
        return;
    }

    let userPrice = Number(document.getElementById("unitPrice").value);
    if(userPrice == 0) {
        alert("Please, enter the price  of the product");
        return;
    }
    
    // LET'S GET AN OBJECT
    let purchase = {
        name: nameProduct,
        quantity: quantityProduct,
        price: userPrice,
    }

    // LET'S  PUSH OBJECT TO THE ARRAY
        arr.push(purchase);

    // LET DISPLAY OUR NEW ARRAY IN HTML
    deleteArr();
    insertArr();
}

function findSum() {
    // LET DELETE REFLECTION OF ARRAY IN HTML IF IT IS EXIST
    let mySum = 0;
    for(let i = 0; i < arr.length; i++) {
        mySum = mySum + arr[i].quantity * arr[i].price;
    }
    
    container_2.insertAdjacentHTML('beforeend', `<p>The total price: ${mySum}$</p>`);
}

function findExpensive() {
    let mostExpensive = 0;
    let indexAr = 0;
    for(let i = 0; i < arr.length; i++) {
        if (mostExpensive < arr[i].quantity * arr[i].price) {
            mostExpensive = arr[i].quantity * arr[i].price;
            indexAr = i;
        }
    }
    container_3.insertAdjacentHTML('beforeend', `<p>The most expensive purchase: ${arr[indexAr].name} - ${arr[indexAr].quantity} - ${arr[indexAr].price}$ = ${arr[indexAr].quantity * arr[indexAr].price}$</p>`);
}

