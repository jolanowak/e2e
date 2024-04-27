describe('Test wyszukiwania w blogu', () => {
    it('Wyszukuje frazy "dress" na blogu', () => {
      cy.visit('https://skleptest.pl/');
      cy.contains('Blog').click(); 
      cy.get('.search-form input[name="s"]:eq(0)').type('dress{enter}'); 
      
    });
  });
  