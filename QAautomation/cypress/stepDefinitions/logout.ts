/// <reference types="Cypress" />
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

When("The user clicks the LOGOUT button", () => {
    cy.get('button.MuiButton-containedSecondary').eq(0).click();
});

Then("The user is logged out and is brought back to the auth page", () => {
    cy.url().should('eq', 'https://echoatu.com/auth');

    cy.get('h5.MuiTypography-root.MuiTypography-h5').contains('Sign In');
    cy.get('button.MuiButton-containedPrimary')
    .contains('Sign In')
    .should('exist');

    cy.get('label[data-shrink="false"]')
    .contains('Email Address');

    cy.get('label[data-shrink="false"]')
    .contains('Password');

    // website works as url changes when user has completed signing up
    cy.url().should('not.eq', 'https://echoatu.com/posts')

    //This assert that the users name doesn't appear in the navbar
    cy.get('h6.MuiTypography-root.jss5.MuiTypography-h6').should('not.exist')

    //And this asserts that the users avatar doesn't appear in navbar
    cy.get('.jss7').should('not.exist')

    // More assertions that the forms has loaded in 
    cy.get('input[name="title"]').should('not.exist');
    cy.get('input[name="message"]').should('not.exist');
    cy.get('input[name="tags"]').should('not.exist');
});
