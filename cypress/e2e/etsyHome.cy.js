/// <reference types="cypress" />

import LoginPage from '../pageObjects/login.cy'
import LogoutPage from '../pageObjects/logout.cy'

describe('Etsy Web Testing', function () {
  
  //beforeEach hook used to run each time before a new test starts 
  
  beforeEach(function () {


    cy.visit('http://automationpractice.com/index.php')
    
    //Data Driven calling from the fixture file     

    cy.fixture('loginCredentials').then(function (data) {

      this.data = data

    })


  })


  context("Login Section", function () {
//Signing In three different users and logging them when each of them have successfully logged in
    it("valid userOne sign in successfully", function () {

      //creating objects to use the method built in these classes
      const loginPage = new LoginPage()
      const logoutPage = new LogoutPage()

      loginPage.signIn()
      loginPage.fillEmail(this.data.emailOne)
      loginPage.fillPassword(this.data.passwordOne)
      loginPage.submitBtn()
      cy.get('.info-account').should("exist")
      logoutPage.signOut()
    })

    it("valid userTwo sign in successfully", function () {
      const loginPage = new LoginPage()
      const logoutPage = new LogoutPage()

      loginPage.signIn()
      loginPage.fillEmail(this.data.emailTwo)
      loginPage.fillPassword(this.data.passwordTwo)
      loginPage.submitBtn()
      cy.get('.info-account').should("exist")
      logoutPage.signOut()
    })
    it("valid userThree sign in successfully", function () {
      const loginPage = new LoginPage()
      const logoutPage = new LogoutPage()

      loginPage.signIn()
      loginPage.fillEmail(this.data.emailThree)
      loginPage.fillPassword(this.data.passwordThree)
      loginPage.submitBtn()
      cy.get('.info-account').should("exist")
      logoutPage.signOut()
    })
    //Signing In an invalid user and passing the test on basis of error message being displayed
    it("Invalid userFour sign in not allowed", function () {
      const loginPage = new LoginPage()

      loginPage.signIn()
      loginPage.fillEmail(this.data.emailFour)
      loginPage.fillPassword(this.data.passwordFour)
      loginPage.submitBtn()
      cy.get('#center_column > :nth-child(2)').should("exist")
    })



  })
})