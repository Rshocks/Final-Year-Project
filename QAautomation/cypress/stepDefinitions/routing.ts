/// <reference types="Cypress" />
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

// pagination not signed in
When("A user is not signed in paginates to page two", () => {
    cy.visit("/");
    cy.get('span.MuiButton-label')
    .contains('Sign In')
    .should('be.visible');
    cy.get('a[aria-label="Go to page 2"]').click();
});

Then("Assert page two loads correctly", () => {
    //assert page has changed by logging url
    cy.url().should('include', 'page=2');

    // sign in auth button should be visable not logout
    cy.get('a.MuiButton-containedPrimary[href="/auth"]').should('be.visible');
    cy.get('button.MuiButton-containedPrimary').should('be.visible');
    cy.wait(3000);
});

When("A user paginates to page three", () => {
    cy.get('a[aria-label="Go to page 3"]').click();
});

Then("Assert page three loads correctly", () => {
    //assert page has changed by logging url
    cy.url().should('include', 'page=3');

    // sign in auth button should be visable not logout
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

// routing to sign up card
// when is a user is not signed in taken from noAuthLiking.ts

When("The user clicks the sign in button", () => {
    cy.get('span.MuiButton-startIcon').first().click();
});

Then("User clicks 'DON'T HAVE AN ACCOUNT? SIGN UP' assert sign in page loads correctly", () => {
    cy.get('button.MuiButton-root.MuiButton-text')
    .click();

    cy.get('h5.MuiTypography-root.MuiTypography-h5')
    .should('contain', 'Sign Up')
    .should('be.visible');
    cy.get('span.MuiButton-startIcon.MuiButton-iconSizeMedium')
    .should('exist');

    cy.get('label[data-shrink="false"]')
    .contains('Last Name');

    cy.get('label[data-shrink="false"]')
    .contains('Email Address');

    cy.get('label[data-shrink="false"]')
    .contains('Password');

    cy.get('label[data-shrink="false"]')
    .contains('Repeat Password');
    cy.wait(3000);
});

// route to auth sign in
// Given is taken from the given at top of this script
// When is taken from above

Then("The authorization page loads correctly", () => {
    cy.get('h5.MuiTypography-root.MuiTypography-h5').contains('Sign In');
    cy.get('button.MuiButton-containedPrimary')
    .contains('Sign In')
    .should('exist');

    cy.get('label[data-shrink="false"]')
    .contains('Email Address');

    cy.get('label[data-shrink="false"]')
    .contains('Password');
    cy.wait(3000);
});

// pagination for signed in user
Given("A user is signed in", () => {
    cy.visit("/");
    cy.get('span.MuiButton-startIcon').first().click();

    cy.get('input[type="email"]')
    .type('CyAuto1@email.com')

    cy.get('input[name="password"]')
    .type('12345')

    cy.get('button.MuiButton-containedPrimary').eq(0).click();
});

When("The user routes to page two it should load properly", () => {
    cy.get('a[aria-label="Go to page 2"]').click();

    //assert page has changed by logging url
    cy.url().should('include', 'page=2');

    //This asserts user is signed in else this would not appear
    cy.get('h6.MuiTypography-root.jss5.MuiTypography-h6').should('exist')
    cy.get('.jss7').should('exist')

    cy.wait(3000);
});

Then("If the user routes to page three it should load properly", () => {
    cy.get('a[aria-label="Go to page 3"]').click();

    //assert page has changed by logging url
    cy.url().should('include', 'page=3');

    //This asserts user is signed in else this would not appear
    cy.get('h6.MuiTypography-root.jss5.MuiTypography-h6').should('exist')
    cy.get('.jss7').should('exist')

    cy.wait(3000);
});
