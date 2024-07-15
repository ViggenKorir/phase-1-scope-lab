// solution
var customerName = 'bob';
const leastFavoriteCustomer = '';
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
function setBestCustomer() {
    bestCustomer = 'not bob';
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Joe';
}
customerName()
console.log(customerName);
upperCaseCustomerName();
console.log(customerName);
setBestCustomer();
console.log(bestCustomer);
overwriteBestCustomer();
console.log(bestCustomer);
// changeLeastFavoriteCustomer();
// console.log(leastFavoriteCustomer)