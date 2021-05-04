const express =  require('express')
const router = express.Router()
const controller_listingRoles = require('../../controllers/JobRoles/listingRoles')

router.get('/roles',controller_listingRoles.get)

module.exports = router;