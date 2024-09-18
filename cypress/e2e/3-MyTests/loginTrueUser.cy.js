describe('Login with an existing user', () => {
    it('Login Real User', () => {
        cy.visit('https://automationteststore.com/')

        cy.get('#customer_menu_top').click()

        cy.url().should('include', '/index.php?rt=account/login')

        cy.get('#loginFrm_loginname').type('PepeRodriguez')

        cy.get('#loginFrm_password').type('SuperPassword')

        cy.get('button.btn:nth-child(7)').click()

        cy.url().should('include', '/index.php?rt=account/account')

        cy.get('div.menu_text').should('be.visible')


    })
})