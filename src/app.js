const express = require('express');
const app = express();
const router =  express.Router();

//Route index
const index = require('./routes/index-route');

//Loading Routes in Applications
const listingApplication = require('./routes/Applications/listingApplication')
const listingApplicationTags = require('./routes/Applications/listingApplicationTags')
const findHiringInformation = require('./routes/Applications/findHiringInformation')
const retrievingAnApplicationRatingCriteria = require('./routes/Applications/retrievingAnApplicationsRatingCriteria')
const listingCommentsInCandidateTimeline = require('./routes/Applications/listingCommentsInCandidateTimeline')

//Loading Routes in Company Career Pages
const listingCareerPages = require('./routes/CompanyCareerPages/listingCareerPages')

//Loading Routes in Company Departments
const listingDepartments =  require('./routes/CompanyDepartments/listingDepartments')

//Loading Routes in Job Custom Fields
const listingCustomFieldsOfACompanyForJobCreation = require('./routes/JobCutomFields/listingCustomFieldsOfACompanyForJobCreation')

//Loading Routes in Job Templates
const listingCustomFieldsOfAJobTemplate = require('./routes/JobTemplates/listingCustomFieldsOfAJobTemplate')
const listingJobsTemplates = require('./routes/JobTemplates/listingJobsTemplates')

//Loading Routes in Jobs
const listingJobs = require('./routes/Jobs/listingJobs');
const listingCustomFieldsOfAJob =  require('./routes/Jobs/listingCustomFieldsOfAJob')
const listingStepsOfAJob = require('./routes/Jobs/listingStepsOfAJob')
const listingJobClassifiers = require('./routes/Jobs/listingJobClassifiers')
const listingVacancyCodes = require('./routes/Jobs/listingVacancyCodes')

//Loading Router in Job Roles
const listingRoles = require('./routes/JobRoles/listingRoles')

//Loading Routes in Company Users
listingUserAccessProfiles = require('./routes/CompanyUsers/listingUserAccessProfiles')
listingUsers = require('./routes/CompanyUsers/listingUsers')

//Loading Router in Company Branches
listingBranches = require('./routes/CompanyBranches/listingBranches')

//Loading Routes in Post Hiring
listingDismissals = require('./routes/PostHiring/listingDismissals')
listingPerformanceEvaluation = require('./routes/PostHiring/listingPerformanceEvaluations')

//Loading Router in Email Templates
listingEmailTemplates = require('./routes/EmailTemplates/listingEmailTemplates')

//Loading Router in Company Employee
getAListOfCompanyEmployees = require('./routes/CompanyEmployee/getAListOfCompanyEmployees')

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/', index);
//Use routes of Applications
app.use('/jobs',listingApplication);
app.use('/jobs',listingApplicationTags);
app.use('/jobs',findHiringInformation);
app.use('/jobs',retrievingAnApplicationRatingCriteria);
app.use('/jobs',listingCommentsInCandidateTimeline);

//Use routes of Company Career Pages
app.use(listingCareerPages)

//Use routes of Company Departments
app.use(listingDepartments);

//Use routes of Job Custom Fields
app.use(listingCustomFieldsOfACompanyForJobCreation)

//Use routes of Job Templates
app.use('/job-templates',listingCustomFieldsOfAJobTemplate)
app.use('/job-templates',listingJobsTemplates)

//Use routes of Jobs
app.use('/jobs',listingJobs)
app.use('/jobs',listingCustomFieldsOfAJob )
app.use('/jobs',listingStepsOfAJob)
app.use('/jobs',listingJobClassifiers)
app.use('/jobs',listingVacancyCodes)

//Use routes of Job Roles
app.use('/roles',listingRoles)

//Use routes of Company Users
app.use(listingUserAccessProfiles)
app.use(listingUsers)

//Use routes of Company Branches
app.use(listingBranches)

//Use routes of Post Hiring
app.use(listingDismissals)
app.use(listingPerformanceEvaluation)

//Use routes of Email Templates
app.use(listingEmailTemplates)

//Use routes of Company Employee
app.use(getAListOfCompanyEmployees)

module.exports = app;