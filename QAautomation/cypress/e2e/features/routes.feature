Feature: Routing for users signed in and not signed in

    Scenario: Echoes displaying non-signed in user

    Given A user is not signed in
    When User is on page one echoes load correctly
    Then User routes to page two where page twos echoes load correctly
    Then User routes to page three where page threes echoes load correctly

    Scenario: Echoes displaying signed in user

    Given A user is signed in
    When User is on page one echoes load correctly
    Then User routes to page two where page twos echoes load correctly
    Then User routes to page three where page threes echoes load correctly

    Scenario: Homepage displays correctly when user is not signed in

    Given A user is not signed in
    When Homepage should be displayed correctly
    Then Create an echo should not appear
    Then A card telling user to signIn or Up appears

    Scenario: Pagination displays correctly when user is not signed in

    When A user is not signed in paginates to page two
    Then Assert page two loads correctly
    When A user paginates to page three
    Then Assert page three loads correctly

    Scenario: Route to page details loads correctly
    
    Given A user is not signed in
    When The user clicks the ellipses
    Then Page details should be loaded correctly

    Scenario: Route to authorization loads correctly
    
    Given A user is not signed in
    When The user clicks the sign in button
    Then The authorization page loads correctly

    Scenario: Authorization sign up card loads correctly
    
    Given A user is not signed in
    When The user clicks the sign in button
    Then User clicks 'DON'T HAVE AN ACCOUNT? SIGN UP' assert sign in page loads correctly

    Scenario: A signed in user is able to paginate between different pages

    Given A user is signed in
    When The user routes to page two it should load properly
    Then If the user routes to page three it should load properly

    Scenario: A signed in user is able to go to the page details route

    Given A user is signed in
    When The user clicks the ellipses
    Then Page details should be loaded correctly