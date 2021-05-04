const express = require('express')
const router = express.Router()
const controller_listingUserAccessProfiles = require('../../controllers/CompanyUsers/listingUserAccessProfiles')
const controller_listingUsers = require('../../controllers/CompanyUsers/listingUsers')

//GET
router.get('/user-access-profiles',controller_listingUserAccessProfiles.get)
router.get('/users',controller_listingUsers.get)


module.exports = router;