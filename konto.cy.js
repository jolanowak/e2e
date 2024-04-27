describe('Test rejestracji i wylogowania', () => {
    it('Rejestruje się i wylogowuje pomyślnie', () => {
      cy.visit('https://skleptest.pl/');
      cy.contains('Account').click();
      cy.contains('Register').click();
      cy.get('#reg_email').type('test@wp.pl'); 
      cy.get('#reg_password').type('Testowehaslo'); 
      cy.get('#reg_password').type('{enter}'); 
  
      
      cy.url().should('include', '/my-account');
  
      
      cy.wait(15000);
  
    });
  });
  