/// <reference types="Cypress" />
// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Commands.add('login', () => {
  cy.visit('users/sign_in');

  cy.get("[data-qa-selector='login_field']").type(Cypress.env('user_name'));
  cy.get("[data-qa-selector='password_field']").type(Cypress.env('user_password'), { log: false });
  cy.get("[data-qa-selector='sign_in_button']").click();
});

Cypress.Commands.add('logout', () => {
  cy.get('.qa-user-avatar').click();
  cy.contains('Sign out').click();
});

Cypress.Commands.add('gui_createProject', project => {
  cy.visit('projects/new');

  cy.get('#project_name').type(project.name);
  cy.get('#project_description').type(project.description);
  cy.get('.qa-initialize-with-readme-checkbox').check();
  cy.contains('Create project').click();
});