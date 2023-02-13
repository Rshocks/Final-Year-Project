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

// liking when not signed in
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

// liking when signed in
// Given is taken from routing.ts
When("A user clicks the like button it adds a like", () => {
    cy.get('button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-textSizeSmall.MuiButton-sizeSmall[tabindex="0"][type="button"]').eq(0).click();
    
    // This asserts that user has liked a post
    // Logic helps assertion as this test can be used on different posts as they all have the same button component
    // So the logic works as it will assert if it says You and 4 others,You and 2 others etc.
    cy.get('button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-textSizeSmall.MuiButton-sizeSmall[tabindex="0"][type="button"] span.MuiButton-label')
      .eq(0)
      .then(($button) => {
        let text = $button.text();
        let number = text.match(/\d+/g);
        if (number) {
          let expectedNumber = parseInt(number[0]);
          let updatedText = text.replace(number[0], expectedNumber.toString());
          cy.get('button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-textSizeSmall.MuiButton-sizeSmall[tabindex="0"][type="button"] span.MuiButton-label')
            .eq(0)
            .should('have.text', updatedText);
        }
    });  
});

Then("If the user clicks the like button again it takes away his like", () => {
    cy.get('button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-textSizeSmall.MuiButton-sizeSmall[tabindex="0"][type="button"]').eq(0).click();

    cy.get('button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-textSizeSmall.MuiButton-sizeSmall span.MuiButton-label')
    .eq(0)
    .then(($button) => {
    let text = $button.text();
    let number = text.match(/\d+/g);
    if (number !== null) {
      let expectedNumber = parseInt(number[0]);
      let updatedText = text.replace(number[0], expectedNumber.toString());
      cy.get('button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-textSizeSmall.MuiButton-sizeSmall span.MuiButton-label')
        .eq(0)
        .should('have.text', updatedText);
    }
  });
});

// Commenting on a echo
Then("User comments on the echo and the comment appears", () => {
    cy.get('textarea')
    .first()
    .as('textarea')
    .type("Cypress Test Comment");

    cy.get('button.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary').click();

    cy.get('h6.MuiTypography-root.MuiTypography-h6.MuiTypography-gutterBottom')
    .contains('Comments')
    .next()
    .should('contain', 'Cypress Automation Cypress Test Comment')
});