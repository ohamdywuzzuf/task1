describe('Sign up form validate', function() {
    it('Visit sign up form', function() {
    cy.visit("register");
//visit login page
//    it('Click on each field for empty input', function() { --- need help with 'it' function
        cy.get('input[name=firstname]').type('Omar')
        cy.get('input[name=lastname]').type('Hamdy')
        cy.get('input[name=email]').type('omar@hamdyz.com')
        cy.get('input[name=password]').type('omarhamdy')
        cy.get('button[type=submit].css-6lejne').click()
        cy.wait(5000)
        cy.url().should('contain', '/setup')
})
})