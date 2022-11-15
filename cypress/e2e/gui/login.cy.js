/// <reference types="Cypress"/>

describe('Login', () => {
  it('Successfuly', () => {
    cy.login();

    cy.get('.qa-user-avatar').should('exist');
  });
});