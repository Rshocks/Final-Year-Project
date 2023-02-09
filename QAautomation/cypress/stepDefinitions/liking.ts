/// <reference types="Cypress" />
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

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