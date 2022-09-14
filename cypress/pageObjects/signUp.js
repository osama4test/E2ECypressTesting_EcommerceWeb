class SignupPage {

    createAcntBtn() {

        const createAcntBtn = cy.get('#SubmitCreate > span')
        createAcntBtn.click()

    }

    fillSignupEmail(value) {

        const field = cy.get('#email_create')
        field.clear()
        field.type(value)
        return this
    }

    genderSelect() {


        const field = cy.get('#id_gender1')
        field.click()

    }

    firstName(value) {

        const field = cy.get('#customer_firstname')
        field.type(value)
        return this
    }

    lastName(value) {

        const field = cy.get('#customer_lastname')
        field.type(value)
        return this
    }

    password(value) {

        const field = cy.get('#passwd')
        field.type(value)
        return this
    }

    days(value) {

        const field = cy.get('#days')
        field.select(value)
        return this

    }
    month(value) {

        const field = cy.get('#months')
        field.select(value)
        return this

    }
    year(value) {

        const field = cy.get('#years')
        field.select(value)
        return this

    }
    company(value) {

        const field = cy.get('#company')
        field.type(value)
        return this
    }
    address(value) {

        const field = cy.get('#address1')
        field.type(value)
        return this
    }

    city(value) {


        const field = cy.get('#city')
        field.type(value)
        return this
    }
    state(value) {

        const field = cy.get('#id_state')
        field.select(value)
        return this
    }
    postalCode(value) {

        const field = cy.get('#postcode')
        field.type(value)
        return this
    }
    country(value) {
        const field = cy.get('#id_country')
        field.select(value)
        return this
    }
    additionalInfo(value) {
        const field = cy.get('#other')
        field.type(value)
        return this
    }
    phoneNo(value) {
        const field = cy.get('#phone')
        field.type(value)
        return this
    }
    mobileNo(value) {
        const field = cy.get('#phone_mobile')
        field.type(value)
        return this
    }
    addressAlias(value) {
        const field = cy.get('#alias')
        field.type(value)
        return this
    }

    registerBtn() {
        const field = cy.get('#submitAccount > span')
        field.click()

    }
}
export default SignupPage