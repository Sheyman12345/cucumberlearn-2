let data
beforeEach(() =>{
    cy.fixture('elementsLocators').then((el) =>{
        data = el
    })
})

Cypress.Commands.add('Login', ()=>{
    cy.get(data.usernameField).type(data.standardUser)
    cy.get(data.passwordField).type(data.password)
})

Cypress.Commands.add('LoginButton', ()=>{
    cy.get(data.loginButton).click()
})