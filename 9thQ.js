// Function to calculate monetary bonus based on recharge amount
const calculateBonus = (amount) => {
  if (amount >= 1000) return amount * 0.15;
  if (amount >= 500) return amount * 0.10;
  if (amount >= 100) return amount * 0.05;
  return 0;
};

// Function to calculate total credited balance
const calculateTotalBalance = (amount, bonus) => amount + bonus;

// Function to process recharge
const recharge = (number, amount, bonusCallback) => {
  const bonus = bonusCallback(amount);
  const totalBalance = calculateTotalBalance(amount, bonus);

  console.log(`Mobile Number: ${number}`);
  console.log(`Recharge Amount: Rs. ${amount}`);
  console.log(`Bonus Received: Rs. ${bonus}`);
  console.log(`Total Balance: Rs. ${totalBalance}`);
};

// Execution
recharge("9800000000", 1000, calculateBonus);