// Function to validate withdrawal constraints
const validateWithdrawal = (amount, balance) => {
  if (amount <= 0) {
    return { isValid: false, reason: "Withdrawal amount must be greater than zero." };
  }
  if (amount % 500 !== 0) {
    return { isValid: false, reason: "Amount must be a multiple of 500." };
  }
  if (amount + 25 > balance) {
    return { isValid: false, reason: "Insufficient balance to cover withdrawal and fee." };
  }
  return { isValid: true, reason: "Success" };
};

// Function to process withdrawal
const withdrawMoney = (amount, balance, validatorCallback) => {
  const fee = 25;
  console.log(`Account Balance: Rs. ${balance}`);
  console.log(`Withdrawal Amount: Rs. ${amount}`);

  const validation = validatorCallback(amount, balance);

  if (validation.isValid) {
    const remainingBalance = balance - amount - fee;
    console.log("Withdrawal Successful!");
    console.log(`Transaction Fee: Rs. ${fee}`);
    console.log(`Remaining Balance: Rs. ${remainingBalance}`);
  } else {
    console.log(`Transaction Failed: ${validation.reason}`);
    console.log(`Remaining Balance: Rs. ${balance}`);
  }
};

// Execution
withdrawMoney(3000, 10000, validateWithdrawal);