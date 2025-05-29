import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given ('I am on the Login Page',()=>{
    cy.visit('/')
})
  And ('I enter username and password', () =>{
    cy.Login()
  })
  Then ('I click the login button', ()=>{
    cy.LoginButton()
  })