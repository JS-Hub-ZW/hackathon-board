describe('home page spec', () => {
  it('Visits home page', () => {
    cy.visit('http://localhost:3000')

    cy.contains("Hack stuff")

    cy.contains("Hackathons")
    cy.contains("Upcoming")
    cy.contains("Ongoing")
    cy.contains("Past")
    cy.contains("Make money")

    cy.contains('About').click()
    cy.url().should('include', '/about')

    cy.contains('Contact').click()
    cy.url().should('include', '/contact')
  })
})