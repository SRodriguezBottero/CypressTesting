describe('Enter to www.freerangetesters.com', () => {
    it('Visits Home page', () => {
        cy.visit('https://www.freerangetesters.com/')

        cy.contains('.sc-fufdwm.hlpFde')
    })
})
