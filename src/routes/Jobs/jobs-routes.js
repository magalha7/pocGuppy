const express =  require('express')
const router = express.Router()

const controller_listingCustomFieldsOfAJob = require('../../controllers/Jobs/listingCustomFieldsOfAJob')
const controller_listingJobClassifiers = require('../../controllers/Jobs/listingJobClassifiers')
const controller_listingJobs = require('../../controllers/Jobs/listingJobs')
const controller_listingStepsOfAJob = require('../../controllers/Jobs/listingStepsOfAJob')
const controller_listingVacancyCodes = require('../../controllers/Jobs/listingVacancyCodes')

router.get('/jobs/:jobId/custom-fields',controller_listingCustomFieldsOfAJob.get);

router.get('/jobs/:jobId/classifiers',controller_listingJobClassifiers.get)

router.get('/jobs',controller_listingJobs.get);

router.get('/jobs/:jobId/steps',controller_listingStepsOfAJob.get)

router.get('/jobs/:jobId/vacancies',controller_listingVacancyCodes.get)

module.exports = router;