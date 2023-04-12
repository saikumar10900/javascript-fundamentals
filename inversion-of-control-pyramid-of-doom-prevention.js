// Problems we ofen face with callback functions
// - Callback Hell - having callback function inside another callback function inside another callback function
// - Inversion of control - Having a lot callback function inside functions
    // may create a situation where the develop might loose over the control of callback function
    
const cart = ['bags', 'books', 'laptops']

createOrder(cart, function(orderId){
    showOrderDetails(orderId, function(paymentInfo){
        proceedToPayment(paymentInfo, function(remaniningBalance){
            updateWallet(remaniningBalance);
        });
    });
});

// the above will turn into below using promise chaining to avoid inversion of control

createOrder(cart).then(function(orderId){
    return showOrderDetails(orderId)
}).then(function(paymentInfo){
    return proceedToPayment(paymentInfo)
}).then(function(remaniningBalance){
    return updateWallet(remaniningBalance)
})

// Arrow function notation

createOrder(cart).then((orderId) => showOrderDetails(orderId)
}).then((paymentInfo) => proceedToPayment(paymentInfo)
}).then((remaniningBalance) => updateWallet(remaniningBalance)
})
