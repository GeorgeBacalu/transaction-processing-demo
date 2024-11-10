const { TYPE_PAYMENT, TYPE_REFUND, STATUS_OPEN, STATUS_CLOSED, METHOD_CREDIT_CARD, METHOD_PAYPAL, METHOD_PLAN } = require("./constants");

module.exports = [
   {
      id: "t1",
      type: TYPE_PAYMENT,
      status: STATUS_OPEN,
      method: METHOD_CREDIT_CARD,
      amount: "23.99",
   },
   {
      id: "t2",
      type: TYPE_PAYMENT,
      status: STATUS_OPEN,
      method: METHOD_PAYPAL,
      amount: "100.43",
   },
   {
      id: "t3",
      type: TYPE_REFUND,
      status: STATUS_OPEN,
      method: METHOD_CREDIT_CARD,
      amount: "10.99",
   },
   {
      id: "t4",
      type: TYPE_PAYMENT,
      status: STATUS_CLOSED,
      method: METHOD_PLAN,
      amount: "15.99",
   },
];
