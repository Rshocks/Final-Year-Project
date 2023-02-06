Feature: Miscellaneous features of app working correctly for signed in user's and non signed in user's

    Scenario: Liking doesn't work if user is not signed in

    When A user is not signed
    Then A user clicks like nothing should happen