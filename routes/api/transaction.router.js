const express = require("express")
const transactionController = require("../../controllers/transactionController")
const router = express.Router()

router.route("")
      .get(transactionController.getTransactions)
      .post(transactionController.createTransaction)

router.route("/:id")
      .get(transactionController.getTransaction)

module.exports = router