const express = require('express');
const {isAuthenticated} = require('../app/middleware/auth');

const router = express.Router();
var ConfirmController = require('../controllers/ConfirmController');

router.get('/confirm-pago/:id', isAuthenticated,ConfirmController.confirm_pago);
router.get('/confirm-recibo/:id', isAuthenticated,ConfirmController.confirm_recibo);
router.get('/confirms/:id',isAuthenticated, ConfirmController.confirms);

module.exports = router;