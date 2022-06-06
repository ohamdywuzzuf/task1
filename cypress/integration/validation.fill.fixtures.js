const { getMaxListeners } = require("process");
const fixtureJson=[
    "Test_2Characters.json",
    "Test_MixedCharacters.json",
]
describe('Sign up form validate with fixtures', function() {
    beforeEach(()=>{
        cy.visit('/register')
    })
    fixtureJson.forEach(gooboo => {
        describe("Form validation - "+gooboo,()=>{
            before(()=>{
                cy.fixture(gooboo).then((credentials)=>{
                    this.credentials=credentials
//                    console.log(this.credentials)
                })
            })  
        it('Visit sign up form',()=>{
        cy.get('#firstname').type(this.credentials.firstName)
        cy.get('#lastname').type(this.credentials.lastName)
        cy.get('#email').type(this.credentials.email)
        cy.get('.css-1xmsobw').type(this.credentials.password)
        cy.get('button[type=submit].css-6lejne').click()
        cy.wait(5000)
        cy.url().should('not.contain', '/setup')
})
})
})
})
