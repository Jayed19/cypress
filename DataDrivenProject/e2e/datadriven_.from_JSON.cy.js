
import testdata from '../fixtures/example.json';

testdata.forEach(data => {
  it(`Test ${JSON.stringify(data)}`, () => {
    cy.visit('http://www.testyou.in/Login.aspx')
    cy.get('#ctl00_CPHContainer_txtUserLogin').type(data.name)
    cy.get('#ctl00_CPHContainer_txtPassword').type(data.pass)
    cy.get('#ctl00_CPHContainer_btnLoginn').click()
  });
});

