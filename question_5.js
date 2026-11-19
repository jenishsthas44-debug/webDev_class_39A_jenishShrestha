let three_numbers = [a, b, c];
let largest_number;

if (a >= b && a >= c) {
    largest_number = a;
}
else if (b >= a && b >= c) {
    largest_number = b;
}
else {
    largest_number = c;
}

console.log("The largest number is: " + largest_number);