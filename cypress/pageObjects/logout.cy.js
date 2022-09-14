class LogoutPage {

    signOut() {
        const button = cy.get('.logout')
        button.click()
    }



}

export default LogoutPage