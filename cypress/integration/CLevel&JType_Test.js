import Register from '../support/pageclasses/Register.js';
import CareerInterests from '../support/pageclasses/Career-Interests.js';
const { getMaxListeners } = require("process");

const fixtureJson=[
    "TestJS_Invalid_Empty.json",
    "TestJS_Invalid_OverLimit.json",
    "TestJS_Valid_Fill.json",
]
const pageRegister= new Register();
const pageCareerInterest= new CareerInterests();
describe('Testing Career Level and Job Type Fields', function() {
    beforeEach(()=>{
        cy.clearCookies()
        cy.visit('/register')
    })
        describe("Career Level",()=>{
            before(()=>{
                cy.fixture("TestJS_Invalid_Empty.json").then((credentials)=>{
                    this.credentials=credentials
                })  
            })  
        it('UI/UX Test - Default and Hover element state check',()=>{
        
            var randomemail = 'testJS' + Math.floor(Math.random() * 1000000 ) + '@gmail.com'
        pageRegister
        .fillFirstName(this.credentials.firstName)
        .fillLastName(this.credentials.lastName)
        .fillEmail(randomemail)
        .fillPassword(this.credentials.password)
        cy.get('button[type=submit].css-6lejne').click()
        cy.wait(1000)
//add remove linkedin code here
cy.get('body').then($body => {
                if ($body.find('.ReactModal__Overlay').length) {
                    cy.log('modal is here')
                   
                  cy.get('.css-l322kb > svg > path').click();

            
                }
                else
                {
                       cy.log('hello');
                }
            })        
        cy.get(':nth-child(1) > [tabindex="0"] > .panel-body')
        .should('have.css', 'border', '1px solid rgb(235, 237, 240)')
        .should('have.css', 'background-color', 'rgb(250, 250, 251)')
        cy.get(':nth-child(1) > [tabindex="0"] > .panel-body > .title')
        .should('have.css', 'font-size', '15px')
        .should('have.css', 'color', 'rgb(77, 97, 130)')
        cy.get(':nth-child(1) > [tabindex="0"] > .panel-body').invoke('hover')
        .should('have.css', 'background-color', 'rgb(242, 242, 243)')
        .should('have.css', 'border-color', 'rgb(204, 210, 219)')
        })
        it('UI/UX Test - Select and change Selection/Deselection check',()=>{
            var randomemail = 'testJS' + Math.floor(Math.random() * 1000000 ) + '@gmail.com'
        pageRegister
        .fillFirstName(this.credentials.firstName)
        .fillLastName(this.credentials.lastName)
        .fillEmail(randomemail)
        .fillPassword(this.credentials.password)
        cy.get('button[type=submit].css-6lejne').click()
        cy.wait(1000)
//add remove linkedin code here
cy.get('body').then($body => {
                if ($body.find('.ReactModal__Overlay').length) {
                    cy.log('modal is here')
                   
                  cy.get('.css-l322kb > svg > path').click();

            
                }
                else
                {
                       cy.log('hello');
                }
            })      
        cy.get(':nth-child(1) > [tabindex="0"] > .panel-body').click()       
        cy.get('.selected > .panel-body')
        .should('have.css', 'border-color', 'rgb(77, 147, 255)')
        .should('have.css', 'background-color', 'rgb(230, 239, 255)')
        cy.get('.selected > .panel-body > .title')
        .should('have.css', 'color', 'rgb(0, 85, 217)')
        cy.get(':nth-child(2) > [tabindex="0"] > .panel-body').click()
        cy.get('.selected > .panel-body').invoke('text').should('include', 'Entry')
        cy.get(':nth-child(1) > [tabindex="0"] > .panel-body')
        .should('have.css', 'background-color', 'rgb(250, 250, 251)')
})
it('Invalid scenario - Validation copywrite check',()=>{
    var randomemail = 'testJS' + Math.floor(Math.random() * 1000000 ) + '@gmail.com'
pageRegister
.fillFirstName(this.credentials.firstName)
.fillLastName(this.credentials.lastName)
.fillEmail(randomemail)
.fillPassword(this.credentials.password)
cy.get('button[type=submit].css-6lejne').click()
cy.wait(1000)
//add remove linkedin code here
cy.get('body').then($body => {
                if ($body.find('.ReactModal__Overlay').length) {
                    cy.log('modal is here')
                   
                  cy.get('.css-l322kb > svg > path').click();

            
                }
                else
                {
                       cy.log('hello');
                }
            })     
pageCareerInterest
.Submit()
.CareerLevelRequired()
cy.get(':nth-child(1) > .css-tukd06 > .css-1mk5lo3')
.should('have.css', 'color', 'rgb(216, 40, 40)')
.should('have.css', 'font-size', '12px')
})
it('Valid Scenario - Check copywrite and submit validation',()=>{
    var randomemail = 'testJS' + Math.floor(Math.random() * 1000000 ) + '@gmail.com'
pageRegister
.fillFirstName(this.credentials.firstName)
.fillLastName(this.credentials.lastName)
.fillEmail(randomemail)
.fillPassword(this.credentials.password)
cy.get('button[type=submit].css-6lejne').click()
cy.wait(1000)
//add remove linkedin code here
cy.get('body').then($body => {
                if ($body.find('.ReactModal__Overlay').length) {
                    cy.log('modal is here')
                   
                  cy.get('.css-l322kb > svg > path').click();

            
                }
                else
                {
                       cy.log('hello');
                }
            })     
pageCareerInterest.setCareerLevel1()
cy.get('.selected > .panel-body').invoke('text').should('include', 'Student')
pageCareerInterest.setCareerLevel2()
cy.get('.selected > .panel-body').invoke('text').should('include', 'Entry Level')
pageCareerInterest.setCareerLevel3()
cy.get('.selected > .panel-body').invoke('text').should('include', 'Experienced(Non-Manager)')
pageCareerInterest.setCareerLevel4()
cy.get('.selected > .panel-body').invoke('text').should('include', 'Manager')
pageCareerInterest.setCareerLevel5()
cy.get('.selected > .panel-body').invoke('text').should('include', 'Senior Management(e.g. VP, CEO)')
pageCareerInterest.Submit()
.CareerLevelValid()
})
})
describe("Job Type",()=>{
    before(()=>{
        cy.fixture("TestJS_Invalid_Empty.json").then((credentials)=>{
            this.credentials=credentials
        })  
    })  
it('UI/UX Test - Default and Hover element state checks',()=>{

    var randomemail = 'testJS' + Math.floor(Math.random() * 1000000 ) + '@gmail.com'
pageRegister
.fillFirstName(this.credentials.firstName)
.fillLastName(this.credentials.lastName)
.fillEmail(randomemail)
.fillPassword(this.credentials.password)
cy.get('button[type=submit].css-6lejne').click()

pageCareerInterest
.Submit()
})
it('UI/UX Test - Select and Deselection checks',()=>{

    var randomemail = 'testJS' + Math.floor(Math.random() * 1000000 ) + '@gmail.com'
pageRegister
.fillFirstName(this.credentials.firstName)
.fillLastName(this.credentials.lastName)
.fillEmail(randomemail)
.fillPassword(this.credentials.password)
cy.get('button[type=submit].css-6lejne').click()

pageCareerInterest
.Submit()
})
it('Invalid scenario - Validation copywrite check',()=>{

    var randomemail = 'testJS' + Math.floor(Math.random() * 1000000 ) + '@gmail.com'
pageRegister
.fillFirstName(this.credentials.firstName)
.fillLastName(this.credentials.lastName)
.fillEmail(randomemail)
.fillPassword(this.credentials.password)
cy.get('button[type=submit].css-6lejne').click()

pageCareerInterest
.Submit()
})
it('Valid scenario - Check copywrite and submit check',()=>{

    var randomemail = 'testJS' + Math.floor(Math.random() * 1000000 ) + '@gmail.com'
pageRegister
.fillFirstName(this.credentials.firstName)
.fillLastName(this.credentials.lastName)
.fillEmail(randomemail)
.fillPassword(this.credentials.password)
cy.get('button[type=submit].css-6lejne').click()

pageCareerInterest
.Submit()
})
it('Valid scenario - Select all and submit check',()=>{

    var randomemail = 'testJS' + Math.floor(Math.random() * 1000000 ) + '@gmail.com'
pageRegister
.fillFirstName(this.credentials.firstName)
.fillLastName(this.credentials.lastName)
.fillEmail(randomemail)
.fillPassword(this.credentials.password)
cy.get('button[type=submit].css-6lejne').click()

pageCareerInterest
.Submit()
})
})
})