const express =  require('express')
const router = express.Router()
const controller_listingBranches = require('../../controllers/CompanyBranches/listingBranches')

//GET
router.get('/branches',controller_listingBranches.get)

module.exports = router;