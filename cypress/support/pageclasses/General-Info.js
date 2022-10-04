class generalinfo {
Firstname(name) {
    cy.get('#First\\ Name').clear().type(name)
    return this;
}
toggleValidationMsgs(){
    cy.get('#First\\ Name').clear()
    cy.get('#Last\\ Name').clear()
    cy.get('.css-1kqwv1a').click()
    return this;
}
toggleValidationMsgsAN(){
    cy.get('#First\\ Name').clear().type('123')
    cy.get('#Last\\ Name').clear().type('123')
    cy.get('#Mobile\\ Number').click().type('asd')
    return this;
}
checkValidationMsgsAN(){
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .css-1mrz7hs').invoke('text').should('include', 'You can only use letters')
    cy.get(':nth-child(2) > .css-1mrz7hs').invoke('text').should('include', 'You can only use letters')
    cy.get(':nth-child(3) > :nth-child(2) > .text-field-wrapper > .css-1mrz7hs').invoke('text').should('include', 'only numbers')
    return this;
}
readValidationMsgs(){
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .css-1mrz7hs').invoke('text').should('include', 'This is a required field')
    cy.get(':nth-child(2) > .css-1mrz7hs').should('have.css', 'font-size', '12px').invoke('text').should('include', 'This is a required field')
    cy.get('.col-2-lg > .custom-selectbox > .date-picker-wrapper__error').invoke('text').should('include', 'This is a required field')
    cy.get('.row > :nth-child(2) > .custom-selectbox > .date-picker-wrapper__error').invoke('text').should('include', 'This is a required field')
    cy.get('.row > :nth-child(3) > .custom-selectbox > .date-picker-wrapper__error').invoke('text').should('include', 'This is a required field')
    cy.get('.radio-btn-wrapper > .date-picker-wrapper__error').invoke('text').should('include', 'This is a required field')
    cy.get(':nth-child(5) > .custom-selectbox > .date-picker-wrapper__error').invoke('text').should('include', 'This is a required field')
    cy.get(':nth-child(2) > :nth-child(2) > .custom-selectbox > .date-picker-wrapper__error').invoke('text').should('include', 'This is a required field')
    cy.get(':nth-child(2) > :nth-child(3) > .custom-selectbox > .date-picker-wrapper__error').invoke('text').should('include', 'This is a required field')
    cy.get(':nth-child(3) > :nth-child(2) > .text-field-wrapper > .css-1mrz7hs').invoke('text').should('include', 'This is a required field')
    return this;
}
checkValidationMsgs(){
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .css-1mrz7hs').should('have.css', 'font-size', '12px').should('have.css', 'color', 'rgb(216, 40, 40)')
    cy.get(':nth-child(2) > .css-1mrz7hs').should('have.css', 'font-size', '12px').should('have.css', 'color', 'rgb(216, 40, 40)')
    cy.get('.col-2-lg > .custom-selectbox > .date-picker-wrapper__error').should('have.css', 'font-size', '12px').should('have.css', 'color', 'rgb(216, 40, 40)')
    cy.get('.row > :nth-child(2) > .custom-selectbox > .date-picker-wrapper__error').should('have.css', 'font-size', '12px').should('have.css', 'color', 'rgb(216, 40, 40)')
    cy.get('.row > :nth-child(3) > .custom-selectbox > .date-picker-wrapper__error').should('have.css', 'font-size', '12px').should('have.css', 'color', 'rgb(216, 40, 40)')
    cy.get('.radio-btn-wrapper > .date-picker-wrapper__error').should('have.css', 'font-size', '12px').should('have.css', 'color', 'rgb(216, 40, 40)')
    cy.get(':nth-child(5) > .custom-selectbox > .date-picker-wrapper__error').should('have.css', 'font-size', '12px').should('have.css', 'color', 'rgb(216, 40, 40)')
    cy.get(':nth-child(2) > :nth-child(2) > .custom-selectbox > .date-picker-wrapper__error').should('have.css', 'font-size', '12px').should('have.css', 'color', 'rgb(216, 40, 40)')
    cy.get(':nth-child(2) > :nth-child(3) > .custom-selectbox > .date-picker-wrapper__error').should('have.css', 'font-size', '12px').should('have.css', 'color', 'rgb(216, 40, 40)')
    cy.get(':nth-child(3) > :nth-child(2) > .text-field-wrapper > .css-1mrz7hs').should('have.css', 'font-size', '12px').should('have.css', 'color', 'rgb(216, 40, 40)')
    return this;
}
checkValidationStyles(){
    cy.get('#First\\ Name').should('have.css','border','1px solid rgb(254, 48, 48)')
    cy.get('#Last\\ Name').should('have.css','border','1px solid rgb(254, 48, 48)')
    cy.get('#Mobile\\ Number').should('have.css','border','1px solid rgb(254, 48, 48)')
    cy.get('#react-select-2--value > .Select-placeholder').should('have.css','border','1px solid rgb(254, 48, 48)')
    cy.get('#react-select-3--value > .Select-placeholder').should('have.css','border','1px solid rgb(254, 48, 48)')
    cy.get('#react-select-4--value > .Select-placeholder').should('have.css','border','1px solid rgb(254, 48, 48)')
    cy.get('#react-select-5--value > .Select-placeholder').should('have.css','border','1px solid rgb(254, 48, 48)')
    cy.get('#react-select-6--value > .Select-placeholder').should('have.css','border','1px solid rgb(254, 48, 48)')
    cy.get('#react-select-7--value > .Select-placeholder').should('have.css','border','1px solid rgb(254, 48, 48)')
    return this;
}
fillLastName(lastname) {
    cy.get('#lastname').type(lastname)
    return this;  
}
fillEmail(email) {
    cy.get('#email').type(email)
    return this;  
}
fillPassword(password) {
    cy.get('.css-1xmsobw').type(password)
    return this;
}
submit(){
    cy.get('button[type=submit].css-6lejne')
    .click()
    return this;
}
}
export default generalinfo