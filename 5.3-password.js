let password = "OOP9876";
console.log(passwordValidation(password));
console.log(passwordValidation2(password));
console.log(passwordValidation3(password));
console.log(passwordValidation4(password));

//1
function passwordValidation(password) {
    if (password.length >= 7)
        return "Strong";
    else
        return "Weak";
}

//2
function passwordValidation2(password) {
    return password.length >= 7 ? "Strong" : "Weak";

}

//3  check again how its work
function passwordValidation3(password) {
    return ((password.length >= 7) && ("Strong") && ("Weak"));
}

//4 does not work
function passwordValidation4(password) {
    return (password.length > 7) ? "Very Strong" : passwordValidation2(password);

}