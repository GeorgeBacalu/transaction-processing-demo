const { isOpen, isPayment, isRefund, isValidMethod } = require("../util/validators");
const getTransactionProcessors = require("./transaction-processors");

function validateTransaction(transaction) {
   if (!isOpen(transaction)) {
      throw new Error("Invalid transaction type!");
   }

   if (!isPayment(transaction) && !isRefund(transaction)) {
      const error = new Error("Invalid transaction type!");
      error.item = transaction;
      throw error;
   }

   if (!isValidMethod(transaction)) {
      const error = new Error("Invalid transaction method!");
      error.item = transaction;
      throw error;
   }
}

function processWithProcessors(transaction) {
   const processors = getTransactionProcessors(transaction);
   if (isPayment(transaction)) {
      processors.processPayment(transaction);
   } else {
      processors.processRefund(transaction);
   }
}

module.exports = { validateTransaction, processWithProcessors };
