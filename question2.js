let hour_variable = Number(prompt("enter the hour variable "));

let display_hour ;


if (hour_variable>5) {
    display_hour="good morning "

}
else if (hour_variable>12) {
    display_hour="good afternoon ";
}
else {
    display_hour="good evening"
}




console.log(display_hour);