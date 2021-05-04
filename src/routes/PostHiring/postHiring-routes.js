const express =  require('express')
const router = express.Router()

const controller_listingDismissals = require('../../controllers/PostHiring/listingDismissals')
const controller_listingPerformanceEvaluation = require('../../controllers/PostHiring/listingPerformanceEvaluations')

router.get('/performance-evaluations',controller_listingPerformanceEvaluation.get);

router.get('/dismissals',controller_listingDismissals.get)


module.exports = router;