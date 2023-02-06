/// <reference types="Cypress" />
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given("A user goes to the Sign Up card", () => {
    cy.visit("/");
    cy.get('span.MuiButton-startIcon').first().click();

    cy.get('button.MuiButton-root.MuiButton-text')
    .click();
});

When("A user is missing a field", () => {
    cy.get('input[name="lastName"]')
    .type('Test');

    cy.get('input[type="email"]')
    .type('cypresstest@email.com')

    cy.get('input[name="password"]')
    .type('12345')

    cy.get('input[name="confirmPassword"]')
    .type('12345')

    cy.get('button.MuiButton-containedPrimary').eq(0).click();
});

Then("A warning message should appear", () => {
    //cy.wait(3000);
    // try imporve this then part as it relies on visual seeing the text appear
});

// If passwords don't match user cannot sign up
When("A user enters all details but their passwords do not match", () => {
    cy.get('input[name="firstName"]')
    .type('Cypress');

    cy.get('input[name="lastName"]')
    .type('Test');

    cy.get('input[type="email"]')
    .type('cypresstest@email.com')

    cy.get('input[name="password"]')
    .type('12345')

    cy.get('input[name="confirmPassword"]')
    .type('123456')
});

Then("The user cannot sign up", () => {
    cy.get('button.MuiButton-containedPrimary').eq(0).click();

    // website works as url changes when user has completed signing up
    cy.url().should('not.eq', 'https://echoatu.com/posts')

    //This assert that the users name doesn't appear in the navbar
    cy.get('h6.MuiTypography-root.jss5.MuiTypography-h6').should('not.exist')

    //And this asserts that the users avatar doesn't appear in navbar
    cy.get('.jss7').should('not.exist')
});

// If user clicks the eye they can see their password
When("A user types in their password", () => {
    cy.get('input[name="password"]')
    .type('12345')
});

Then("The user click the eye button they should be able to see their password", () => {
    cy.get('button.MuiButtonBase-root.MuiIconButton-root').click()

    cy.get('input[name="password"]')
    .should('have.value', '12345');
});