// Function to get price for an item
const getFoodPrice = (foodName) => {
  const menu = {
    Burger: 250,
    Pizza: 500,
    Momo: 150,
    Chowmein: 180
  };
  return menu[foodName] ?? null;
};

// Function to calculate 5% service charge
const calculateServiceCharge = (total) => total * 0.05;

// Function to calculate food amount using price lookup callback
const calculateOrder = (foodName, quantity, priceLookupCallback) => {
  const unitPrice = priceLookupCallback(foodName);
  if (unitPrice === null) return null;
  return unitPrice * quantity;
};

// Function to generate receipt
const generateReceipt = (customerName, foodName, quantity, orderCalcCallback) => {
  const foodAmount = orderCalcCallback(foodName, quantity, getFoodPrice);

  if (foodAmount === null) {
    console.log(`Error: Item "${foodName}" is not available on the menu.`);
    return;
  }

  const serviceCharge = calculateServiceCharge(foodAmount);
  const finalAmount = foodAmount + serviceCharge;

  console.log(`Customer: ${customerName}`);
  console.log(`Food: ${foodName}`);
  console.log(`Quantity: ${quantity}`);
  console.log(`Food Amount: Rs. ${foodAmount}`);
  console.log(`Service Charge: Rs. ${serviceCharge}`);
  console.log(`Final Amount: Rs. ${finalAmount}`);
};

// Execution
generateReceipt("Suman", "Burger", 2, calculateOrder);