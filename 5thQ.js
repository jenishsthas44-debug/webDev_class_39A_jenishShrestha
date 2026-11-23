// Function to calculate bonus based on basic salary
const calculateBonus = (salary) => {
  return salary >= 40000 ? salary * 0.10 : salary * 0.05;
};

// Function to calculate tax deduction (5% fixed)
const calculateTax = (salary) => salary * 0.05;

// Function accepting two callback functions
const calculateNetSalary = (salary, bonusCallback, taxCallback) => {
  const bonus = bonusCallback(salary);
  const tax = taxCallback(salary);
  const netSalary = salary + bonus - tax;
  return { bonus, tax, netSalary };
};

// Function to generate payslip
const generatePayslip = (name, salary, salaryProcessorCallback) => {
  const { bonus, tax, netSalary } = salaryProcessorCallback(salary, calculateBonus, calculateTax);

  console.log(`Employee: ${name}`);
  console.log(`Basic Salary: Rs. ${salary}`);
  console.log(`Bonus: Rs. ${bonus}`);
  console.log(`Tax: Rs. ${tax}`);
  console.log(`Net Salary: Rs. ${netSalary}`);
};

// Execution
generatePayslip("Ram", 50000, calculateNetSalary);