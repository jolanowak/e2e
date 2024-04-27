describe('Test formularza kontaktowego', () => {
  it('Wypełnia i wysyła formularz kontaktowy', () => {
    cy.visit('https://skleptest.pl/');
    cy.contains('Contact').click(); 
    cy.get('input[name="your-name"]').type('Jola'); 
    cy.get('input[name="your-email"]').type('test@wp.com');
    cy.get('input[name="your-subject"]').type('Testowy temat'); 
    cy.get('textarea[name="your-message"]').type('To jest testowa wiadomość.'); 
    cy.contains('Send').click(); 
   
  });
});
