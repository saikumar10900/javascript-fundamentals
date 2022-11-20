function getProfitOrLoss(buyPrice, sellPrice){
    return sellPrice > buyPrice ? 'Profit' : 'Loss'; // ternary operation
}

console.log(getProfitOrLoss(100, 200)); // Profit



