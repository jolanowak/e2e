describe('Test wielokrotnego dodawania produktu do koszyka', () => {
    it('Dodaje produkt "Black Top" do koszyka 15 razy', () => {
      cy.visit('https://skleptest.pl/');
      cy.contains('Black Top').click(); 
      for (let i = 0; i < 15; i++) {
        cy.contains('Add to cart').click();
      }
      cy.contains('Cart').click(); 
    
    });
  });
  