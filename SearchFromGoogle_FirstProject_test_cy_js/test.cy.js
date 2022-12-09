it('Google Search', {defaultCommandTimeout: 20000} ,() => {
    cy.visit('https://www.google.com/')
    cy.get('.gLFyf').type('Jayed Ibrahim')
    cy.contains('Google Search').click()
    cy.contains('Jayed Ibrahim - QA Manager').click()



    cy.origin('https://www.linkedin.com', () => {
  //cy.visit('/')
  cy.get('input[name="email-or-phone"]').type("jayed{enter}{enter}")
  cy.get('.join-form > .alert > .wrapper > .alert-content').should('have.text','Please enter a valid email address or mobile number.'); //# means id and xpath is showing with > sign

})
    
    
    
  
    



  })