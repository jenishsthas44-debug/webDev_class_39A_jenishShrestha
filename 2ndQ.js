// Function to calculate average of 3 marks
const calculateAverage = (m1, m2, m3) => (m1 + m2 + m3) / 3;

// Function to determine division based on average
const getDivision = (average) => {
  if (average >= 70) return "First Division";
  if (average >= 60) return "Second Division";
  if (average >= 50) return "Third Division";
  return "Fail";
};

// Function to process result using a callback to determine division
const processResult = (name, m1, m2, m3, divisionCallback) => {
  const average = calculateAverage(m1, m2, m3);
  const division = divisionCallback(average);

  console.log(`Student: ${name}`);
  console.log(`Average: ${average.toFixed(2)}`);
  console.log(`Division: ${division}`);
};

// Execution
processResult("Sita", 75, 80, 70, getDivision);