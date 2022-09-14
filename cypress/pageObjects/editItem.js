class EditItem{


 editCart(){

    const editCart= cy.get('#cart_quantity_up_1_1_0_0 > span')
    editCart.click()
 }


}

export default EditItem