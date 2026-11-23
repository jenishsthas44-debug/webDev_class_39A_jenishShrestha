// Function to calculate slab-based electricity charge + fixed fee
const calculateBill = (units) => {
  const fixedFee = 50;
  let energyCharge = 0;

  if (units <= 20) {
    energyCharge = units * 5;
  } else if (units <= 50) {
    energyCharge = (20 * 5) + ((units - 20) * 7);
  } else {
    energyCharge = (20 * 5) + (30 * 7) + ((units - 50) * 10);
  }

  return energyCharge + fixedFee;
};

// Function to display the bill using a callback for calculation
const displayBill = (name, units, callback) => {
  const totalBill = callback(units);

  console.log(`Customer: ${name}`);
  console.log(`Units Consumed: ${units}`);
  console.log(`Total Electricity Bill: Rs. ${totalBill}`);
};

// Execution
displayBill("Ram", 65, calculateBill);