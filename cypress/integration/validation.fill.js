const { getMaxListeners } = require("process");
var randomemail = 'test' + Math.floor(Math.random() * 10000 ) + '@gmail.com'

describe('Sign up form validate', function() {
    it('Visit sign up form', function() {
    cy.visit("register");
//visit login page
//    it('Click on each field for empty input', function() { --- need help with 'it' function
cy.intercept(
    {method: 'GET', url: '/api/look-ups?*'},
    {fixture:'careerinterest.json'}
)
        cy.get('input[name=firstname]').type('Omar')
        cy.get('input[name=lastname]').type('Hamdy')
        cy.get('input[name=email]').type(randomemail,{replace:true})
        cy.get('input[name=password]').type('omarhamdy')
        cy.get('button[type=submit].css-6lejne').click()
        cy.url().should('contain', '/setup')
        cy.get('#react-select-2--value > .Select-placeholder').type('a')
        cy.intercept(
            {method: 'GET', url: '/api/lookups/job-titles*'},
            {fixture:'job_titles.json'}
        )
        cy.get(':nth-child(3) > .custom-selectbox > .Select > .Select-menu-outer').invoke('text').should('include', 'Custom Extra Entry Added')
})
})