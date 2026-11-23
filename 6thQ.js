// Function to calculate distance-based delivery charge
const calculateDelivery = (distance) => {
  if (distance <= 0) return 0;
  if (distance <= 2) return 30;
  return 30 + ((distance - 2) * 15);
};

// Function to check if order qualifies for free delivery
const checkFreeDelivery = (orderAmount) => orderAmount >= 1000;

// Function to process order
const processOrder = (customer, distance, orderAmount, deliveryCallback) => {
  const isFree = checkFreeDelivery(orderAmount);
  // Short-circuit: if free, charge is 0; otherwise calculate
  const deliveryCharge = isFree ? 0 : deliveryCallback(distance);

  console.log(`Customer: ${customer}`);
  console.log(`Order Amount: Rs. ${orderAmount}`);
  console.log(`Distance: ${distance} km`);
  console.log(`Delivery Charge: Rs. ${deliveryCharge}`);
};

// Execution
processOrder("Shyam", 5, 800, calculateDelivery);