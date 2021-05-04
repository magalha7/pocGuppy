const express = require('express')
const router = express.Router()

const controller_listingCustomFieldsOfAJobTemplate = require('../../controllers/JobTemplates/listingCustomFieldsOfAJobTemplate')
const controller_listingJobsTemplates = require('../../controllers/JobTemplates/listingJobsTemplates')

router.get('/job-templates/:jobTemplateId/custom-fields',controller_listingCustomFieldsOfAJobTemplate.get)
router.get('/job-templates',controller_listingJobsTemplates.get)

module.exports = router;
