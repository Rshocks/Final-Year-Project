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