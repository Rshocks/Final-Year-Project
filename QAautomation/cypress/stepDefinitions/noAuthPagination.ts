/// <reference types="Cypress" />
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

When("A user is not signed in paginates to page two", () => {
    cy.visit("/");
    cy.get('span.MuiButton-label')
    .contains('Sign In')
    .should('be.visible');
    cy.get('a[aria-label="Go to page 2"]').click();
});

Then("Assert page two loads correctly", () => {
    cy.url().should('include', 'page=2');
    cy.get('a.MuiButton-containedPrimary[href="/auth"]').should('be.visible');
    cy.get('button.MuiButton-containedPrimary').should('be.visible');
    cy.wait(3000);
});

When("A user paginates to page three", () => {
    cy.get('a[aria-label="Go to page 3"]').click();
});

Then("Assert page three loads correctly", () => {
    cy.url().should('include', 'page=3');
    cy.get('a.MuiButton-containedPrimary[href="/auth"]').should('be.visible');
    cy.get('button.MuiButton-containedPrimary').should('be.visible');
    cy.wait(3000);
});