/// <reference types="Cypress" />
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given("A non-authenticated user is on the homepage", () => {
    cy.visit("/");
    cy.get('span.MuiButton-label')
    .contains('Sign In')
    .should('be.visible');
});

When("The user types 'Delhi Museum' in the search bar", () => {
    cy.get('input[name="search"]').type('Delhi Museum')
    cy.get('button.MuiButton-containedPrimary').click();
});

Then("The correct echo appears", () => {
    cy.get('p.MuiTypography-root')
    .contains('Delhi Museum')
    .should('be.visible');
});

//Incorrect search in searchbar
When("A non auth user types in the searchbar 'Q'", () => {
    cy.get('input[name="search"]').type('Q')
    cy.get('button.MuiButton-containedPrimary').eq(0).click();
});

Then("Assert an error message appears", () => {
    cy.get('img[src="/static/media/noPost.baee4ea9.PNG"]')
    .should('be.visible');
    cy.contains("There isn't an echo with the provided name or tag; make sure the tags are capitalized and lowercase, and check that the title is written correctly.")
    .should('be.visible');
});

// correct search for signed in user
When("The user types 'All Ireland' in the search bar", () => {
    cy.get('input[name="search"]').type('All Ireland')
    cy.get('button.MuiButton-containedPrimary').eq(0).click();
});

Then("The correct echo appears for a signed in user", () => {
    cy.get('p.MuiTypography-root')
    .contains('All Ireland')
    .should('be.visible');
});
