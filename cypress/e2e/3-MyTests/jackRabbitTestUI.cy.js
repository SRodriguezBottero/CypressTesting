describe('My First Test in JRPay UI', () => {

    beforeEach(() => {
        cy.visit('https://app-dev.jackrabbitpay.com/')

        const loginUrl = 'https://jrpaydev.b2clogin.com'

        cy.origin(loginUrl, () => {
            cy.get('input#email').type('sebastiandario.rodriguez+15@endava.com')

            cy.get('input#password').type('endava1!')

            cy.get('button#next').click()

            
        })
      })

    it('Visit Home page', () => {
        cy.url().should('eq', 'https://app-dev.jackrabbitpay.com/')

        cy.get('.mt-1').should('be.visible')

        cy.get('.mt-32').should('be.visible')
    })

    it('Visit Client Page and Create a Class Balance Account Holder (Organization Type)', () => {
        cy.get('a.flex:nth-child(3) > div:nth-child(2)').click()

        cy.get('.text-3xl').should('be.visible')

        cy.get('div.mb-4:nth-child(3)').should('be.visible')

        cy.get('.pushRight > button').click()

        cy.get('div.cursor-pointer:nth-child(2)').click()

        cy.get('h3').should('have.text', 'Create New ClientAccount Holder InfoContactLegal Entity Info')

        cy.get('#edition').select('Class').should('have.value', 'CLASS')

        const randomNumber = Math.floor(Math.random() * 10000)

        cy.get('#jackrabbitId').type(`Cypress${randomNumber}`)

        cy.get('.col-span-1 > label').click()
                                    
        cy.get('#legalEntityType').select('2').should('have.value', '2')

        cy.get('#country').select('United States').should('have.value', 'US')

        cy.get('#timezone').select('Mountain Standard Time').should('have.value', 'MT')

        cy.get('#legalEntityLegalName').type(`ClassCypress${randomNumber}`)

        cy.get('#balancePlatform').select('JackrabbitTechnologies_BalancePlatform_TEST').should('have.value', 'JackrabbitTechnologies_BalancePlatform_TEST')
        
        cy.get('#legalEntityOrganizationType').select('Association Incorporated').should('have.value', '1')

        cy.get('#firstName').type('Cypress')

        cy.get('#lastName').type('Rodriguez')

        cy.get('#companyEmail').type('sebastiandario.rodriguez@endava.com')

        cy.get('#phone').type('9108213456')

        cy.get('#legalEntityStreet1').type('12 Main Street')

        cy.get('#legalEntityStreet2').type('12th floor')

        cy.get('#legalEntityCity').type('Hope Mills')

        cy.get('#legalEntityState').select('North Carolina').should('have.value', 'NC')

        cy.get('span.relative:nth-child(5) > label').click()

        cy.get('#legalEntityPostalCode').type('20250')

        cy.get('.gap-4').click()

        cy.get('button.cursor-pointer:nth-child(2)').click()

        cy.get('[data-testid="success-icon"]').should('be.visible')

        cy.get('.flex-1 > :nth-child(2)').should('have.text', 'Account holder has been created successfully.')

        cy.get('#userEmail').type(`sebastiandario.rodriguez+${randomNumber}@endava.com`)

        cy.get('#confirmUserEmail').type(`sebastiandario.rodriguez+${randomNumber}@endava.com`)

        cy.get('.my-10 > .cursor-pointer').click()

        cy.get('#role').select('Owner').should('have.value', 'OWNER')

        cy.get('.gap-y-10').click()

        cy.get('button.cursor-pointer:nth-child(2)').click()

        cy.get('.flex-1').should('be.visible')

        cy.get('.mt-12').click()
    })

    it('Visit Client Page and Make a Search', () => {
        cy.get('a.flex:nth-child(3) > div:nth-child(2)').click()

        cy.get('.text-3xl').should('be.visible')

        cy.get('#searchForAccountHolderCode').type('cypress')

        cy.get('#searchForStatus').select('In Progress').should('have.value', 'inprogress')

        cy.get('button.cursor-pointer:nth-child(3)').click()

        cy.get('tr.bg-white:nth-child(1) > td:nth-child(2)').should('contain.text', 'Cypress')
    })
})