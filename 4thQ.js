// Function to get ticket price by age
const getTicketPrice = (age) => {
  if (age < 12) return 150;
  if (age <= 17) return 200;
  if (age <= 59) return 300;
  return 200; // 60 and above
};

// Function to calculate subtotal
const calculateTotal = (price, quantity) => price * quantity;

// Function to calculate discount amount (10% if 5 or more tickets)
const applyDiscount = (total, quantity) => {
  return quantity >= 5 ? total * 0.10 : 0;
};

// Function to coordinate booking
const bookTicket = (name, age, quantity, discountCallback) => {
  const unitPrice = getTicketPrice(age);
  const totalBeforeDiscount = calculateTotal(unitPrice, quantity);
  const discountAmount = discountCallback(totalBeforeDiscount, quantity);
  const finalAmount = totalBeforeDiscount - discountAmount;

  console.log(`Customer: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Tickets: ${quantity}`);
  console.log(`Total Before Discount: Rs. ${totalBeforeDiscount}`);
  console.log(`Discount: Rs. ${discountAmount}`);
  console.log(`Final Amount: Rs. ${finalAmount}`);
};

// Execution
bookTicket("Hari", 25, 5, applyDiscount);