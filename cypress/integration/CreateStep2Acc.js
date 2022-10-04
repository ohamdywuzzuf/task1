const { getMaxListeners } = require("process");
import CareerInterests from '../support/pageclasses/Career-Interests.js';
import generalinfo from '../support/pageclasses/General-Info';
const pageCareerInterest= new CareerInterests();
const pageGeneralInfo= new generalinfo();
var username = 'test' + Math.floor(Math.random() * 10000 ) + '@gmail.com'

describe('Sign up Step 2 Test', function() {
    it('Create Test account for step 2', function() {

        if (cy.readfile('data.json').its('status').should('eg','valid')) {
            cy.login('test1707@gmail.com','12345678')
        } else {
            cy.registerjs('Omar','Hamdy',username,'12345678')
            cy.log(username)
            cy.visit('/setup/career-interests')
            pageCareerInterest
            .FillJobCategory()
            .FillJobTitle()
            .FillJobType()
            .FillMinSalary()
            .setCareerLevel2()
            .FillJobStatus()
            .Submit()
            cy.url().should('contain', '/setup/general-info')
        }
    })
        
    cy.registerjs('Omar','Hamdy',username,'12345678')
    cy.log(username)
    cy.visit('/setup/career-interests')
    pageCareerInterest
    .FillJobCategory()
    .FillJobTitle()
    .FillJobType()
    .FillMinSalary()
    .setCareerLevel2()
    .FillJobStatus()
    .Submit()
    cy.url().should('contain', '/setup/general-info')
})
})
describe.only('Test', function() {
    beforeEach(()=>{
        cy.login('test1707@gmail.com','12345678')
        cy.visit('/setup/general-info')
    })
it('Invalid validations - Message Styling', function() {
    pageGeneralInfo
    .toggleValidationMsgs()
    .checkValidationMsgs()
})
it('Invalid validations - Field Borders', function() {
    pageGeneralInfo
    .toggleValidationMsgs()
    .checkValidationStyles()
})
it('Invalid validations - Message Copywriting', function() {
    pageGeneralInfo
    .toggleValidationMsgs()
    .readValidationMsgs()
})
it('Invalid validations - Alphanumerics', function() {
    pageGeneralInfo
    .toggleValidationMsgs()
    .toggleValidationMsgsAN()
    .checkValidationMsgsAN()
})
it('Check API URL', function() {
    cy.intercept(
        {method: 'GET', url: '/api/look-ups?include=country*'},
        {fixture:'lookups_country.json'}
        )
    pageGeneralInfo
    .ddlNationalityCheck()
    .ddlCountryCheck()
})
})