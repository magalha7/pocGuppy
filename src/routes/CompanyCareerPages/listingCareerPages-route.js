const express = require('express')
const router = express.Router()
const controller_listingCareerPages = require('../../controllers/CompanyCareerPages/listingCareerPages')

//GET
router.get('/career-pages',controller_listingCareerPages.get)

module.exports = router;