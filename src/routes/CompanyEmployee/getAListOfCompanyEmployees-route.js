const express =  require('express')
const router = express.Router()
const controller_getAListOfCompanyEmployees = require('../../controllers/CompanyEmployee/getAListOfCompanyEmployees')

//GET
router.get('/company-employees',controller_getAListOfCompanyEmployees.get)

module.exports = router;