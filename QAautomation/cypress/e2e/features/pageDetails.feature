Feature: PageDetails for signed in user's and non signed in user's

    Scenario: Comments appear when user is signed in

    Given A user is signed in
    When The user clicks the ellipses
    Then Assert that comments appear

    Scenario: Comments do not appear when user is not signed in

    Given A user is not signed in
    When The user clicks the ellipses
    Then Assert that comments do not appear

    Scenario: Recommended echoes appear when user is not signed in

    Given A user is not signed in
    When The user clicks the ellipses
    Then Assert that recommended echoes appear

    Scenario: Recommended echoes appear when user is signed in

    Given A user is signed in and waiting for the page to load
    When The user clicks the ellipses
    Then Assert that recommended echoes appear