const express =  require('express')
const router = express.Router()
const controller_listingEmailTemplates = require('../../controllers/EmailTemplates/listingEmailTemplates')

//GET
router.get('/email-templates',controller_listingEmailTemplates.get)

module.exports = router;