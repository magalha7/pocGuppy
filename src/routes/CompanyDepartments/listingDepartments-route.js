const express = require('express')
const router = express.Router()
const controller_listingDepartments = require('../../controllers/CompanyDepartments/listingDepartments')

//GET
router.get('/departments',controller_listingDepartments.get)

module.exports = router