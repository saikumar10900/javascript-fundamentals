const cart = ['a', 'b', 'c'];

function validateCart(cart){
    return true;
}

function proceedToPayment(orderId){
  return "Payment Successful"
}

function createOrder(cart){
    return new Promise((resolve, reject) => {
        if(!validateCart(cart)){
            reject("Cart is not valid");
        }
        const orderId = '123';
        resolve(orderId);
    });
}

createOrder(cart).then((orderId) => {
  console.log('Order created')
    return orderId;
}).then((orderId) => {
  console.log('Proceeding to payment')
  return proceedToPayment(orderId)
}).then((ack) => {
  console.log(ack);
}).catch((er) => {
  console.log(er);
}).then(() => {
  console.log("Happy Shopping!!!!")
})
