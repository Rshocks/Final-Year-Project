/// <reference types="Cypress" />
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

When("A user is not signed", () => {
    cy.visit("/");
    cy.get('span.MuiButton-label')
    .contains('Sign In')
    .should('be.visible');
});

Then("A user clicks like nothing should happen", () => {
    cy.get('button.MuiButton-root.Mui-disabled').should('be.disabled')
    .and('have.class', 'Mui-disabled')
    .should('have.css', 'pointer-events', 'none')
    .should('have.css', 'cursor', 'default');
});