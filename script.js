const navbar=document.getElementById('navbar');
const bar=document.getElementById('bar');

if(bar){
    bar.addEventListener('click', function() {
        navbar.classList.add('active');
    });
}


let close=document.getElementById("close");

if(close){
    close.addEventListener('click',function(){
        navbar.classList.add('unactive');
    })
}

// script.js

document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll('.addToCart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            const productName = this.getAttribute('data-name');
            const productPrice = parseFloat(this.getAttribute('data-price'));

            const cartItem = {
                name: productName,
                price: productPrice
            };

            const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
            existingCart.push(cartItem);

            localStorage.setItem('cart', JSON.stringify(existingCart));

            alert('Item added to cart!');
        });
    });
});

function updateClock() {
    var options = { timeZone: 'Asia/Kolkata', hour12: false };
    var now = new Date().toLocaleTimeString('en-US', options);
    document.getElementById('clock').innerText = now ;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();