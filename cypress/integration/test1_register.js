import Register from '../support/pageclasses/Register.js';
import CareerInterests from '../support/pageclasses/Career-Interests.js';
const { getMaxListeners } = require("process");
var randomemail1 = 'testJS' + Math.floor(Math.random() * 1000000 ) + '@gmail.com'
var randomemail2 = 'testJS' + Math.floor(Math.random() * 1000000 ) + '@gmail.com'
var randomemail3 = 'testJS' + Math.floor(Math.random() * 1000000 ) + '@gmail.com'
const fixtureJson=[
    "TestJS_Invalid_Empty.json",
    "TestJS_Invalid_OverLimit.json",
    "TestJS_Valid_Fill.json",
]
const pageRegister= new Register();
const pageCareerInterest= new CareerInterests();
describe('Sign up JS Step 1 Full Test', function() {
    beforeEach(()=>{
        cy.clearCookies()
        cy.visit('/register')
    })
        describe("Form validation - Invalid (Empty Form) Test",()=>{
            before(()=>{
                cy.fixture("TestJS_Invalid_Empty.json").then((credentials)=>{
                    this.credentials=credentials
                })  
            })  
        it('Visit sign up form',()=>{
        pageRegister
        .fillFirstName(this.credentials.firstName)
        .fillLastName(this.credentials.lastName)
        .fillEmail(randomemail1)
        .fillPassword(this.credentials.password)
        cy.get('button[type=submit].css-6lejne').click()

        //heba's code
        // if ($body.find('.css-q79hb6').length) {
       
        //     return '.banner'
        //      cy.log('here')
        //     cy.get(':nth-child(2) > .e1ydi3lf9').click();
      
        //   }
      
        //omar code
        // cy.get('body').then($body => {
        // if ($body.find('.css-q79hb6').length) {
        
        //     cy.log('if true')
        // cy.contains('Skip and Fill Manually').click();
        // }
        //   else{
        // cy.log('else true')
        // }
        // })

        pageCareerInterest
        .Submit()
        .CareerLevelRequired()
        .JobCategoryRequired()
        .JobStatusRequired()
        .JobTitleRequired()
        .JobTypeRequired()
        .MinSalaryRequired()
})
    describe("Form validation - Invalid (Over Max Limit) Test",()=>{
      before(()=>{
         cy.fixture("TestJS_Invalid_OverLimit.json").then((credentials)=>{
             this.credentials=credentials
           })  
       })  
    it('Sign up into step 1 - Fill Normally but max out Category and Titles',()=>{
        pageRegister
            .fillFirstName(this.credentials.firstName)
            .fillLastName(this.credentials.lastName)
            .fillEmail(randomemail2)
            .fillPassword(this.credentials.password)
            cy.get('button[type=submit].css-6lejne').click()
        pageCareerInterest
            .FillJobCategoryMax()
            .FillJobTitleMax()
            .FillJobType()
            .FillMinSalary()
            .setCareerLevel2()
            .FillJobStatus()
            .Submit()
            .JobCategoryMax()
            .JobTitleMax()
            .JobStatusValid()
            .CareerLevelValid()
            .MinSalaryValid()
            .JobTypeValid()
})
describe("Form validation - Valid Straightforward Test",()=>{
    before(()=>{
       cy.fixture("TestJS_Valid_Fill.json").then((credentials)=>{
           this.credentials=credentials
         })  
     })  
  it('Sign up into step 1 - Fill Normally but max out Category and Titles',()=>{
      pageRegister
          .fillFirstName(this.credentials.firstName)
          .fillLastName(this.credentials.lastName)
          .fillEmail(randomemail3)
          .fillPassword(this.credentials.password)
          cy.get('button[type=submit].css-6lejne').click()
      pageCareerInterest
          .FillJobCategory()
          .FillJobTitle()
          .FillJobType()
          .FillMinSalary()
          .setCareerLevel2()
          .FillJobStatus()
          .Submit()
          cy.wait(5000)
          cy.url().should('contain', '/setup/general-info')
})
})
})
})
})