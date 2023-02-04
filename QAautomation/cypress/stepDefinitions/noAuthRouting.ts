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

// Homepage routing
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

//Page details routing

When("The user clicks the ellipses", () => {
    cy.get('button.MuiButton-text').eq(0)
  .click();
});

Then("Page details should be loaded correctly", () => {
    cy.contains('Created by:').should('be.visible');
    cy.get('p.MuiTypography-root.MuiTypography-body1[gutterbottom="true"][varient="h5"]')
    .should('contain', 'You might also like these Echos:');
});