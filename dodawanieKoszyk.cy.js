describe('Test dodawania produktu do koszyka', () => {
    it('Dodaje produkt do koszyka pomyślnie', () => {
      cy.visit('https://skleptest.pl/');
      cy.contains('Most Wanted').click(); 
      cy.contains('Magnolia Dress').click(); 
      cy.contains('Add to cart').click(); 
      
    });
  });
  