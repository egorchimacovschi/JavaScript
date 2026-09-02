const mycheckbox = document.getElementById("mycheckbox");
const visaButton = document.getElementById("Visa");
const mastercardbutton = document.getElementById("MasterCard");
const payPal = document.getElementById("paypal");
const mysubmit = document.getElementById("mysubmit");
const subresult = document.getElementById("subresult")
const paymentResult = document.getElementById("paymentresult");

mysubmit.onclick = function(){
    if(mycheckbox.checked){
        subresult.textContent = `You are subscribed`;
    }else{
        subresult.textContent = `You are not subscribed`;
    }

    if(visaButton.checked){
        paymentResult.textContent = `Your paying with the visa`;
    }else if(mastercardbutton.checked){
        paymentResult.textContent = `Your paying with mastercard`
    }else if(payPal.checked){
        paymentResult.textContent = `Your paying with the paypal`
    }else{
        paymentResult.textContent = `You need to choose payment method`
    }
}