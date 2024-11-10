const { TYPE_PAYMENT, TYPE_REFUND, STATUS_OPEN, METHOD_CREDIT_CARD, METHOD_PAYPAL, METHOD_PLAN } = require("../data/constants");

function isEmpty(transactions) {
   return !transactions || transactions.length === 0;
}

function isOpen(transaction) {
   return transaction.status === STATUS_OPEN;
}

function isPayment(transaction) {
   return transaction.type === TYPE_PAYMENT;
}

function isRefund(transaction) {
   return transaction.type === TYPE_REFUND;
}

function isValidMethod(transaction) {
   const validMethods = [METHOD_CREDIT_CARD, METHOD_PAYPAL, METHOD_PLAN];
   return validMethods.includes(transaction.method);
}

module.exports = { isEmpty, isOpen, isPayment, isRefund, isValidMethod };
