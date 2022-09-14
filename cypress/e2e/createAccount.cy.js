import LoginPage from '../pageObjects/login.cy'
import SignupPage from '../pageObjects/signUp'

describe('Creating Account', () => {

  beforeEach(function () {

    cy.visit('http://automationpractice.com/index.php')

    cy.fixture('signupDetails').then(function (data) {

      this.data = data

    })

  })


  it('keeping email input blank', function () {
    const loginPage = new LoginPage()
    const signupPage = new SignupPage()
    
    loginPage.signIn()
    
    
    signupPage.createAcntBtn()
    cy.wait(5000)
    cy.get('#create_account_error').should('exist')
  })

  it('using existing email id to create account', function() {
    const loginPage = new LoginPage()
    const signupPage = new SignupPage()
    
    loginPage.signIn()
    
    signupPage.fillSignupEmail(this.data.existingSignupEmail)
   
    signupPage.createAcntBtn()
    cy.get('#create_account_error').should('exist')
  })

  it('using new email id to create account', function() { //Note: For the First time new email has been used by me for this testcase to pass, 
                                                          //next time this testcase will fail as the email will exist initially,so new email needs to be 
                                                          //entered when executing this testcase for second time. Go to fixtures in SignupDetails.json file
                                                          //change the email set in variable updateEmail. 
    const loginPage = new LoginPage()
    const signupPage = new SignupPage()
    
    loginPage.signIn()
    
    // signupPage.fillSignupEmail(this.data.updateEmail)//same work going on down with dynamic email address
    function generateNewUsername() {
      let text = "";
      let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      
      for (let i = 0; i < 10; i++)
      text += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
      return text;
      
      }
      const generatedUsername = generateNewUsername()
      cy.get('#email_create').type(generatedUsername + '@example.com')
      cy.get('#SubmitCreate > span').click().wait(7000)
   
    signupPage.createAcntBtn()
    cy.wait(7000)
    signupPage.genderSelect()
    signupPage.firstName(this.data.firstName)
    signupPage.lastName(this.data.lastName)
    signupPage.password(this.data.password)
    signupPage.days(this.data.days)
    signupPage.month(this.data.month)
    signupPage.year(this.data.year)
    signupPage.company(this.data.company)
    signupPage.address(this.data.address)
    signupPage.city(this.data.city)
    signupPage.state(this.data.state)
    signupPage.postalCode(this.data.postalCode)
    signupPage.country(this.data.country)
    signupPage.additionalInfo(this.data.additionalInfo)
    signupPage.phoneNo(this.data.phoneNo)
    signupPage.mobileNo(this.data.mobileNo)
    signupPage.addressAlias(this.data.addressAlias)
    signupPage.registerBtn()
    cy.get('.info-account').should('exist')
  })




})