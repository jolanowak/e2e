describe('Test nawigacji z koszyka do sklepu', () => {
    it('Powraca z koszyka do sklepu', () => {
      cy.visit('https://skleptest.pl/');
      cy.contains('My Cart').click(); 
      cy.contains('Return to shop').click(); 
      
    });
  });
  