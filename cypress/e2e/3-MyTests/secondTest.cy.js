describe('My Second Test', () => {
    it('Visits Home page', () => {
        cy.visit('https://automationteststore.com/')

        cy.get('#customer_menu_top').click()

        cy.url().should('include', '/index.php?rt=account/login')

        cy.get('#loginFrm_loginname').type('standard_user')

        cy.get('#loginFrm_password').type('secret_sauce')

        cy.get('button.btn:nth-child(7)').click()

        cy.get('div.alert.alert-error.alert-danger').should('be.visible')


    })
})