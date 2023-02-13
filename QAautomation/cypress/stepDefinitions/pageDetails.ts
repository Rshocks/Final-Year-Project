/// <reference types="Cypress" />
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

//only Then needed as the Given and When statements,
//of this feature are covered in the routing script

// Comments Appearing
Then("Assert that comments do not appear", () => {
    cy.get('h6.MuiTypography-root.MuiTypography-h6.MuiTypography-alignCenter')
    .should('contain', 'Please Sign In, or Sign Up to view, and write comments on this echo!');
});

// Recommended echoes appearing
Then("Assert that recommended echoes appear", () => {
    cy.get('p.MuiTypography-root.MuiTypography-body1[gutterbottom="true"][varient="h5"]')
    .should('contain', 'You might also like these Echos:');
    cy.contains('Likes:').should('be.visible');
    cy.get('h6.MuiTypography-root.MuiTypography-h6.MuiTypography-gutterBottom').first()
});

// signed in user must wait as test goes to quick to cypress to spot button to click sometimes
Given("A user is signed in and waiting for the page to load", () => {
    cy.visit("/");
    cy.get('span.MuiButton-startIcon').first().click();

    cy.get('input[type="email"]')
    .type('CyAuto1@email.com')

    cy.get('input[name="password"]')
    .type('12345')

    cy.get('button.MuiButton-containedPrimary').eq(0).click();
    cy.wait(3000);
});

// assert comments appear for signed in user
Then("Assert that comments appear", () => {
    cy.get('h6.MuiTypography-root.MuiTypography-h6').contains('Comments').should('be.visible');

    cy.get('h6.MuiTypography-root.MuiTypography-subtitle1.MuiTypography-gutterBottom').first().should('be.visible');

    cy.get('h6.MuiTypography-root.MuiTypography-h6.MuiTypography-gutterBottom')
    .contains('Comment on this echo')
    .should('be.visible');
});