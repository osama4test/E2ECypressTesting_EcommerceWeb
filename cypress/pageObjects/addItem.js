class AddItem {

    clickWomenTab() {

        const womenTab = cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]')
        womenTab.click()
    }

    addToCartBtn() {
        const addToCartBtn = cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span')
        addToCartBtn.click()
    }

    checkOutBtn() {
        const checkOutBtn = cy.get('.button-container > .button-medium > span')
        checkOutBtn.click()
    }

}
export default AddItem