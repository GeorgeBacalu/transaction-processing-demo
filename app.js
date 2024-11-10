const transactions = require("./data/dummy-transactions");
const { showErrorMessage } = require("./util/error-handling");
const { validateTransactions } = require("./processing/transactions");
const { validateTransaction, processWithProcessors } = require("./processing/transaction");

main();

function main() {
   try {
      processTransactions(transactions);
   } catch (error) {
      showErrorMessage(error.message);
   }
}

function processTransactions(transactions) {
   validateTransactions(transactions);
   for (const transaction of transactions) {
      processTransaction(transaction);
   }
}

function processTransaction(transaction) {
   try {
      validateTransaction(transaction);
      processWithProcessors(transaction);
   } catch (error) {
      showErrorMessage(error.message, error.item);
   }
}
