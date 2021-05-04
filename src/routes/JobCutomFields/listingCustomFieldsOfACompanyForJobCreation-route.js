const express = require('express')
const router =  express.Router()
const controller_listingCustomFieldsOfACompanyForJobCreation = require('../../controllers/JobCutomFields/listingCustomFieldsOfACompanyForJobCreation')

//GET
router.get('/job-custom-fields',controller_listingCustomFieldsOfACompanyForJobCreation.get);

module.exports = router;