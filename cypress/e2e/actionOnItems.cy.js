import LoginPage from '../pageObjects/login.cy'
import AddItem from '../pageObjects/addItem'
import EditItem from '../pageObjects/editItem'
import DeleteItem from '../pageObjects/deleteItem'

describe('Actions on items', () => {
  //beforeEach hook used to run each time before a new test starts 
  beforeEach(function () {


    cy.visit('http://automationpractice.com/index.php')
    //Data Driven calling from the fixture file     
    cy.fixture('loginCredentials').then(function (data) {

      this.data = data

    })
  })

  context("Actions performed on an item", function () {
    it("CRUD Operations", function () {

      //creating objects to use the method built in these classes
      const loginPage = new LoginPage()
      const addItems = new AddItem()
      const editItem = new EditItem()
      const deleteItem = new DeleteItem()

      //adding items
      addItems.clickWomenTab()
      addItems.addToCartBtn()

      //validating if the item have been added to cart successfully
      cy.get('.layer_cart_product > h2').should("exist")
      cy.wait(9000)
      //clicking to proceed to checkout
      addItems.checkOutBtn()
      cy.location("pathname").should('eq', '/index.php')

      //editing the item by adding the same item once more
      editItem.editCart()
      cy.wait(9000)
      //validating if by adding the same item twice does the amount match
      cy.get('#total_product_price_1_1_0').should('have.text', '$33.02')
      //clicking proceed to checkout
      cy.get('.cart_navigation > .button > span').click()


      //signin needed - signing in using Data Driven approach 
      loginPage.fillEmail(this.data.emailOne)
      loginPage.fillPassword(this.data.passwordOne)
      loginPage.submitBtn()

      //going back to the cart
      cy.get('[title="View my shopping cart"]').click()
      //deleting item
      deleteItem.deleteItemBtn()
      cy.wait(5000)
      //cart empty message validation 
      cy.get('.alert').should('have.text', 'Your shopping cart is empty.')


    })
  })
})