it('Google Search', {defaultCommandTimeout: 10000} ,() => {
    cy.visit('https://www.google.com/')
    cy.get('.gLFyf').type('Jayed Ibrahim')
    cy.contains('Google Search').click()
    cy.contains('Jayed Ibrahim - QA Manager').click()


  })