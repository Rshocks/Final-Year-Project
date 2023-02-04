Feature: Routing

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

