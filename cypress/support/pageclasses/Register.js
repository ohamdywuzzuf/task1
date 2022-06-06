class Register {
fillFirstName(firstname) {
    cy.get('#firstname').type(firstname)
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
}
export default Register