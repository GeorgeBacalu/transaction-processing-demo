const { isEmpty } = require("../util/validators");

function validateTransactions(transactions) {
   if (isEmpty(transactions)) {
      throw new Error("No transactions provided!");
   }
}

module.exports = validateTransactions;
