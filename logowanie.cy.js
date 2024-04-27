describe('Test logowania do konta', () => {
    it('Loguje się do konta', () => {
      cy.visit('https://skleptest.pl/');
      cy.contains('Account').click(); 
      cy.get('#username').type('Marzena'); 
      cy.get('#password').type('TEstowyPassword'); 
      cy.get('input[type="checkbox"]').check();
      cy.get('input[name="login"]').type('{enter}'); 
     
    });
  });
  