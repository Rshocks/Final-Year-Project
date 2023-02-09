Feature: Routing for a signed in user

    Scenario: A signed in user is able to paginate between different pages

    Given A user is signed in
    When The user routes to page two it should load properly
    Then If the user routes to page three it should load properly
