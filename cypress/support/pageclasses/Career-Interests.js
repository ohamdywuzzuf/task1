import { nth } from "lodash";

class CareerInterests {
Submit() {
    cy.get('.css-1kqwv1a').click();
    return this;
}
setCareerLevel1() {
    cy.get(':nth-child(1) > [tabindex="0"] > .panel-body').click();
    return this;  
}
setCareerLevel2() {
    cy.get(':nth-child(2) > [tabindex="0"] > .panel-body').click();
    return this;  
}
setCareerLevel3() {
    cy.get(':nth-child(3) > [tabindex="0"] > .panel-body').click();
    return this;  
}
setCareerLevel4() {
    cy.get(':nth-child(4) > [tabindex="0"] > .panel-body').click();
    return this;  
}
setCareerLevel5() {
    cy.get(':nth-child(5) > [tabindex="0"] > .panel-body').click();
    return this;  
}
CareerLevelRequired() {
    cy.get(':nth-child(1) > .css-tukd06 > .css-1mk5lo3').invoke('text').should('include', 'required');
    return this;
}
JobTypeRequired() {
    cy.get(':nth-child(2) > .css-tukd06 > .css-1mk5lo3').invoke('text').should('include', 'required');
    return this;
}
JobTitleRequired() {
    cy.get(':nth-child(3) > .custom-selectbox > .date-picker-wrapper__error').invoke('text').should('include', 'required');
    return this;
}
JobCategoryRequired() {
    cy.get(':nth-child(4) > .custom-selectbox > .date-picker-wrapper__error').invoke('text').should('include', 'required');
    return this;
}
MinSalaryRequired() {
    cy.get('.css-1mrz7hs').invoke('text').should('include', 'required');
    return this;
}
JobStatusRequired() {
    cy.get(':nth-child(6) > .custom-selectbox > .date-picker-wrapper__error').invoke('text').should('include', 'required');
    return this;
}
JobTitleMax() {
    cy.get(':nth-child(3) > .custom-selectbox > .date-picker-wrapper__error').invoke('text').should('include', '10');
    return this;
}
JobCategoryMax() {
    cy.get(':nth-child(4) > .custom-selectbox > .date-picker-wrapper__error').invoke('text').should('include', '10');
    return this;
}
FillJobTitleMax() {
    cy.get(':nth-child(3) > .custom-selectbox > .Select > .Select-control')
    .type('a{enter}s{enter}d{enter}f{enter}3{enter}2{enter}1{enter}6{enter}z{enter}y{enter}x{enter}');
    return this;
}
FillJobTitle() {
    cy.get(':nth-child(3) > .custom-selectbox > .Select > .Select-control')
    .type('a{enter}s{enter}');
    return this;
}
FillJobCategoryMax() {
    cy.get(':nth-child(4) > .custom-selectbox > .Select > .Select-control')
    .type('a{enter}a{enter}a{enter}a{enter}a{enter}a{enter}a{enter}a{enter}a{enter}a{enter}a{enter}');
    return this;
}
FillJobCategory() {
    cy.get(':nth-child(4) > .custom-selectbox > .Select > .Select-control')
    .type('a{enter}a{enter}');
    return this;
}
FillMinSalary() {
    cy.get('.css-15r58nl')
    .type('12345678');
    return this;
}
FillJobType() {
    cy.get(':nth-child(1) > .css-1lylxjf')
    .click();
    cy.get(':nth-child(2) > .css-1lylxjf')
    .click();
    cy.get(':nth-child(3) > .css-1lylxjf')
    .click();
    cy.get(':nth-child(4) > .css-1lylxjf')
    .click();
    cy.get(':nth-child(5) > .css-1lylxjf')
    .click();
    cy.get(':nth-child(6) > .css-1lylxjf')
    .click();
    cy.get(':nth-child(7) > .css-1lylxjf')
    .click();
    cy.get(':nth-child(8) > .css-1lylxjf')
    .click();
    return this;
}
FillJobStatus() {
    cy.get('#react-select-6--value')
    .type('a{enter}');
    return this;
}
CareerLevelValid() {
    cy.get(':nth-child(1) > .css-tukd06 > .css-1mk5lo3').should('not.exist');
    return this;
}
JobTypeValid() {
    cy.get(':nth-child(2) > .css-tukd06 > .css-1mk5lo3').should('not.exist');
    return this;
}
JobTitleValid() {
    cy.get(':nth-child(3) > .custom-selectbox > .date-picker-wrapper__error').should('not.exist');
    return this;
}
JobCategoryValid() {
    cy.get(':nth-child(4) > .custom-selectbox > .date-picker-wrapper__error').should('not.exist');
    return this;
}
MinSalaryValid() {
    cy.get('.css-1mrz7hs').should('not.exist');
    return this;
}
JobStatusValid() {
    cy.get(':nth-child(6) > .custom-selectbox > .date-picker-wrapper__error').should('not.exist');
    return this;
}
}
export default CareerInterests