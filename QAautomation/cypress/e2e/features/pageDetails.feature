Feature: PageDetails for signed in user's and non signed in user's

    Scenario: Comments do not appear when user is not signed in

    Given A user is not signed in
    When The user clicks the ellipses
    Then Assert that comments do not appear

    Scenario: Recommended echoes appear when user is not signed in

    Given A user is not signed in
    When The user clicks the ellipses
    Then Assert that recommended echoes appear