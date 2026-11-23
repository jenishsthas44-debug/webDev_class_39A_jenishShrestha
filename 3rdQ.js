// Function to determine discount percentage based on purchase amount
const calculateDiscount = (amount) => {
  if (amount >= 5000) return 20;
  if (amount >= 3000) return 15;
  if (amount >= 1000) return 10;
  return 0;
};

// Function to calculate final price after applying discount
const calculateFinalPrice = (amount, discountPercent) => {
  const discountAmount = (amount * discountPercent) / 100;
  return amount - discountAmount;
};

// Checkout function that accepts calculateFinalPrice as callback
const checkout = (customerName, amount, priceCallback) => {
  const discountPercent = calculateDiscount(amount);
  const finalPrice = priceCallback(amount, discountPercent);

  console.log(`Customer: ${customerName}`);
  console.log(`Original Price: Rs. ${amount}`);
  console.log(`Discount: ${discountPercent}%`);
  console.log(`Final Price: Rs. ${finalPrice}`);
};

// Execution
checkout("Nikesh", 6000, calculateFinalPrice);