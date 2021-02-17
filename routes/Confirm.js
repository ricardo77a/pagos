const express = require('express');

const router = express.Router();
var ConfirmController = require('../controllers/ConfirmController');

router.get('/confirm-pago/:id', ConfirmController.confirm_pago);
router.get('/confirm-recibo/:id', ConfirmController.confirm_recibo);
router.get('/confirms/:id', ConfirmController.confirms);

module.exports = router;