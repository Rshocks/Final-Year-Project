Feature: Miscellaneous features of app working correctly for signed in user's and non signed in user's

    Scenario: Liking doesn't work if user is not signed in

    When A user is not signed
    Then A user clicks like nothing should happen

    Scenario: Liking works if user is signed in

    Given A user is signed in
    When A user clicks the like button it adds a like
    Then If the user clicks the like button again it takes away his like