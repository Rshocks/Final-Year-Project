/// <reference types="Cypress" />
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

// creating echo
When("The user fills out details to create a Echo", () => {
    cy.get('input[name="title"]')
    .type('Cypress Title');

    cy.get('input[name="message"]')
    .type('Cypress Message');

    cy.get('input[name="tags"]')
    .type('Cypress,Tags');
});

Then("The user clicks post and assert is loads", () => {
    cy.get('button.MuiButton-contained.MuiButton-containedPrimary[tabindex="0"][type="submit"]').click();

    cy.visit("/");

    cy.get('div.MuiPaper-root.MuiCard-root.jss49.MuiPaper-elevation6.MuiPaper-rounded')
    .first()
    .should('be.visible')

    cy.get('button.MuiButton-textSecondary[type="button"]')
    .eq(0)
    .should('have.text', '\u00a0 Delete');
});

// Deleting a echo
Given("A the relevant user is signed in", () => {
    cy.visit("/");
    cy.get('span.MuiButton-startIcon').first().click();

    cy.get('input[type="email"]')
    .type('CyAuto1@email.com')

    cy.get('input[name="password"]')
    .type('12345')

    cy.get('button.MuiButton-containedPrimary').eq(0).click();
    cy.wait(3000);

    cy.get('h6.MuiTypography-root.jss5.MuiTypography-h6').should('exist');
    cy.get('.jss7').should('exist');
});

When("The user clicks the delete button on their echo", () => {
    cy.get('button.MuiButton-textSecondary[type="button"]')
    .eq(0)
    .click();
});

Then("The echo should be deleted", () => {
    cy.get('button.MuiButton-textSecondary[type="button"]')
    .should('not.exist');
});