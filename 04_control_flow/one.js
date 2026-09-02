let userLoggedIn = false
let userCreditCard = false
let userGmail = false
let userPassword = false

if (userGmail || false && userPassword) {

    userLoggedIn = true
    console.log("user email address verified");



    if (userLoggedIn && userCreditCard) {
    console.log("user is logged in and is allowed to purchase courses");
   }
   else if(!userCreditCard){
    console.log("user credit card is not entered");
    console.log("Canceling the process");
    
   }

}
   else{
    console.log("user credentials are not entered");
    console.log("cancelling the process");
}