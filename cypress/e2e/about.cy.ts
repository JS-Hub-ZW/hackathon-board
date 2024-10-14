describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/about')

    cy.contains("Purpose")
    cy.contains("Target Audience")
    cy.contains("Contributors")

    cy.get(".chakra-button").should("contain.text", "Follow")

    cy.contains("Full Stack Developer")
    cy.contains('Follow').click();

    cy.origin("https://github.com", () => {
      cy.url().should("contain", "https://github.com/")  
    })
  })
})