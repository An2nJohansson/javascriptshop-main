let click = 0;
let badgenumber = document.getElementsByClassName("badge")[0];
let ctaselect = document.getElementsByClassName("cta-select")[0];

function removeFromCart() {
    if (click > 0)
    {
        click --
        clicker();
    }
}

function addToCart() {
    click ++
    clicker();
}

function clicker() {
    if (click > 0 )
    {
        ctaselect.innerHTML = "Remove from cart";
    }
    else 
    {
        ctaselect.innerHTML = " ... ";
    }
    badgenumber.setAttribute("data-value", click);
}

if (click > 0) {
    ctaselect.innerHTML = "Remove from Cart";
}
else {
    ctaselect.innerHTML = " ... ";
}