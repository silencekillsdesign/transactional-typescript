// imports
import { Invoice } from "./classes/Invoice.js";
const me = {
    name: "CJ",
    age: 38,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    }
};
// tests
const invoiceOne = new Invoice("mario", "website", 250);
const invoiceTwo = new Invoice("luigi", "app", 900);
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.forEach((Invoice) => {
    console.log(Invoice.client, Invoice.amount, Invoice.format);
});
// get the data from the fields
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
