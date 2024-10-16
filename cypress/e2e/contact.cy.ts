describe('Contact page spec', () => {
    it('Visits contact page', () => {
      cy.visit('http://localhost:3000');
  
      cy.contains('Contact').click();
      cy.url().should('include', '/contact');
  
      cy.contains('Contribute').should('be.visible');
      cy.contains('Hackathon Board is far from perfect').should('be.visible');
      cy.get('button').contains('Hack the Board!').should('be.visible');
  
      cy.contains('Say Hi').should('be.visible');
      cy.contains('Do you want to make an enquiry?').should('be.visible');
      cy.get('button').contains('Get In Touch').should('be.visible');
    });
  
    it('Click hack button should open GitHub', () => {
      cy.visit('http://localhost:3000/contact');
  
      cy.window().then((win) => {
        cy.stub(win, 'open').as('openWindow');
      });
  
      cy.get('button').contains('Hack the Board!').click();
  
      cy.get('@openWindow').should('be.calledWith', 'https://github.com/JS-Hub-ZW/hackathon-board');
    });
  });
  