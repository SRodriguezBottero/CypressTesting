describe('Create a new customer in Automation Store', () => {
    it('Create a new customer', () => {
        cy.visit('https://automationteststore.com/')

        cy.get('#customer_menu_top').click()

        cy.url().should('include', '/index.php?rt=account/login')

        cy.get('button.btn:nth-child(3)').click()

        cy.url().should('include', '/index.php?rt=account/create')

        cy.get('.maintext').should('be.visible')

        cy.get('#AccountFrm_firstname').type('Pepe')
        
        cy.get('#AccountFrm_lastname').type('Rodriguez')

        cy.get('#AccountFrm_email').type('peperodriguez2@email.com')

        cy.get('#AccountFrm_address_1').type('Luis Alberto de Herrera 521')

        cy.get('#AccountFrm_city').type('Las Piedras')

        cy.get('#AccountFrm_country_id').select('225')

        cy.get('#AccountFrm_zone_id').select('3688')

        cy.get('#AccountFrm_postcode').type('15908')

        cy.get('#AccountFrm_loginname').type('PepeRodriguez2')

        cy.get('#AccountFrm_password').type('SuperPassword')

        cy.get('#AccountFrm_confirm').type('SuperPassword')

        cy.get('#AccountFrm_agree').check()

        cy.get('button.pull-right').click()

        cy.url().should('include', '/index.php?rt=account/success')

        cy.get('.maintext').should('be.visible')


    })
})