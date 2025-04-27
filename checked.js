let subscription = document.getElementById('sub');
let upi = document.getElementById('UPIpay');
let netBanking = document.getElementById('net');
let card = document.getElementById('card');
let button = document.getElementById('button');
let subscribeStatus = document.getElementById('substa');
let paymentstatus = document.getElementById('paysta');

button.onclick = function(){
    if(subscription.checked){
        subscribeStatus.textContent = 'You have subscribed';
    }
    else{
        subscribeStatus.textContent = '';
    }

    if(upi.checked){
        paymentstatus.textContent = 'You have selected UPI payment';
    }
    else if(netBanking.checked){
        paymentstatus.textContent = 'You have selected NetBanking payment';
    }
    else if(card.checked){
        paymentstatus.textContent = 'You have selected Card payment';
    }
    else{
        paymentstatus.textContent = 'Please select any one payment';
    }
}
