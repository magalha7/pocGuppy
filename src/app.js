const express = require('express');
const app = express();
const router =  express.Router();

//Route index
const index = require('./routes/index-route');


const applications_routes = require('./routes/Applications/applications-routes')
const companyCareerPages_routes = require('./routes/CompanyCareerPages/listingCareerPages-route')
const companyDepartaments_routes =  require('./routes/CompanyDepartments/listingDepartments-route')
const jobCustomFields_routes = require('./routes/JobCutomFields/listingCustomFieldsOfACompanyForJobCreation-route')
const jobTemplates_roures = require('./routes/JobTemplates/jobTemplates-routes')
const jobs_routes = require('./routes/Jobs/jobs-routes');
const jobRoles_routes = require('./routes/JobRoles/listingRoles-route')
const companyUsers_routes = require('./routes/CompanyUsers/companyUsers-routes')
const companyBranches_routes = require('./routes/CompanyBranches/listingBranches-route')
const postHiring_routes = require('./routes/PostHiring/postHiring-routes')
const emailTemplates_routes = require('./routes/EmailTemplates/listingEmailTemplates-route')
const companyEmployee_routes = require('./routes/CompanyEmployee/getAListOfCompanyEmployees-route')

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/', index);
//Use routes of Applications
app.use(applications_routes);

//Use routes of Company Career Pages
app.use(companyCareerPages_routes)

//Use routes of Company Departments
app.use(companyDepartaments_routes);

//Use routes of Job Custom Fields
app.use(jobCustomFields_routes)

//Use routes of Job Templates
app.use(jobTemplates_roures)

//Use routes of Jobs
app.use(jobs_routes)

//Use routes of Job Roles
app.use(jobRoles_routes)

//Use routes of Company Users
app.use(companyUsers_routes)

//Use routes of Company Branches
app.use(companyBranches_routes)

//Use routes of Post Hiring
app.use(postHiring_routes)

//Use routes of Email Templates
app.use(emailTemplates_routes)

//Use routes of Company Employee
app.use(companyEmployee_routes)

module.exports = app;