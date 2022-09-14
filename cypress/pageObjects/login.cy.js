class LoginPage {

    signIn() {
        const button = cy.get('.login')
        button.click()
    }

    fillEmail(value) {
        const field = cy.get('#email')
        field.clear
        field.type(value)
        return this
    }

    fillPassword(value) {
        const field = cy.get('#passwd')
        field.clear
        field.type(value)
        return this
    }

    submitBtn() {
        const button = cy.get('#SubmitLogin > span')
        button.click()
    }

}


export default LoginPage