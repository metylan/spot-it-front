describe('Login dialog', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:8080')
  })
  it('Open', () => {
    cy.get('.v-btn--fab > .v-btn__content').click()
    cy.get('.v-dialog').should('have.class','v-dialog--active')
  })
  it('Close', () => {
    cy.get('.v-btn--fab > .v-btn__content').click()
    cy.get('.v-card__actions > :nth-child(2)').click()
    cy.get('.v-dialog').should('not.exist')
  })
})