let purchase_amt = Number(prompt("Enter the purchase amount in dollars"));

let discount;
let final_price;

if (purchase_amt >= 100) {
    discount = purchase_amt * 0.20;
}
else if (purchase_amt >= 50) {
    discount = purchase_amt * 0.10;
}
else {
    discount = 0;
}

final_price = purchase_amt - discount;

console.log("Purchase Amount: $" + purchase_amt);
console.log("Discount: $" + discount);
console.log("Final Price: $" + final_price);