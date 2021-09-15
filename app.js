function getInputValue(product, isAdd, price) {
    const inputText = document.getElementById( product +'-quantity');
    
    let fieldQuantity = inputText.value;
    
    if (isAdd == true) {
        fieldQuantity = parseInt(fieldQuantity )+ 1;
    }
    else if (fieldQuantity > 0) {
        fieldQuantity = parseInt(fieldQuantity )- 1;
    }

    inputText.value = fieldQuantity;
    const changePrice = document.getElementById(product + '-total');
    changePrice.innerText = fieldQuantity * price;

    totalPrice();

};

function getInputTotal(product) {
    const productQuantity = document.getElementById(product + '-quantity');
    const productQuantityText = productQuantity.value;
    const productQuantityAmount = parseInt(productQuantityText);
    return productQuantityAmount;
}

function totalPrice() {
    const phoneTotal = getInputTotal('phone') * 1219;
    const caseTotal = getInputTotal('case') * 59;
    const subtotal = phoneTotal + caseTotal;
    const tax = subtotal / 10;
    const totalPrice = subtotal + tax;

    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}



document.getElementById('phone-plus').addEventListener('click', function () {
    
    getInputValue( 'phone', true , 1219);

});
document.getElementById('phone-minus').addEventListener('click', function () {
   
    getInputValue( 'phone', false, 1219);
});

document.getElementById('case-plus').addEventListener('click', function () {
    
    getInputValue( 'case', true, 59);
});

document.getElementById('case-minus').addEventListener('click', function () {
    
    getInputValue( 'case', false , 59);
})