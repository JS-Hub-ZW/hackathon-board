describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/about')

    cy.contains("Purpose")
    cy.contains("Target Audience")
    cy.contains("Contributors")



  })
})