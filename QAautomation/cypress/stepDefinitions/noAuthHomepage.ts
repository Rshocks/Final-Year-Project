/// <reference types="Cypress" />
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given("A user is not signed in", () => {
    cy.visit("/");
    cy.get('span.MuiButton-label')
    .contains('Sign In')
    .should('be.visible');
});

When("Homepage should be displayed correctly", () => {
    cy.url().should('include', '/posts');
    cy.get('a.MuiButton-containedPrimary[href="/auth"]').should('be.visible');
    cy.get('button.MuiButton-containedPrimary').should('be.visible');
});

Then("Create an echo should not appear", () => {
    cy.contains('Creating a Echo').should('not.exist');
});

Then("A card telling user to signIn or Up appears", () => {
    cy.contains('Please Sign In, or Sign Up to like and create your own Echo!').should('exist');
    cy.wait(3000);
});

