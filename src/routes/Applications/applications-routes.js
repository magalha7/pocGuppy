const express = require('express')
const router = express.Router();

const controller_findHiringInformation = require('../../controllers/Applications/findHiringInformation')
const controller_listingApplication = require('../../controllers/Applications/listingApplication')
const controller_listingApplicationTags = require('../../controllers/Applications/listingApplicationTags')
const controller_listingCommentsInCandidateTimeline = require('../../controllers/Applications/listingCommentsInCandidateTimeline')
const controller_retrievingAnApplicationsRatingCriteria = require('../../controllers/Applications/retrievingAnApplicationsRatingCriteria')

//GET
router.get('/jobs/:jobId/applications/:applicationId/hiring-information',controller_findHiringInformation.get);
router.get('/jobs/:jobId/applications',controller_listingApplication.get)
router.get('/jobs/:jobId/applications/:applicationId/tags',controller_listingApplicationTags.get)
router.get('/jobs/:jobId/applications/:applicationId/comments', controller_listingCommentsInCandidateTimeline.get)
router.get('/jobs/:jobId/applications/:applicationId/rating-criteria',controller_retrievingAnApplicationsRatingCriteria.get)


module.exports = router;