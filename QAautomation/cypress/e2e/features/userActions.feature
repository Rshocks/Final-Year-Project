Feature: User actions working correctly for signed in and non signed in users

    Scenario: User creates a echo

    Given A user is signed in
    When The user fills out details to create a Echo
    Then The user clicks post and assert is loads

    Scenario: User to be able to comment on a post

    Given A user is signed in
    When The user clicks the ellipses
    Then User comments on the echo and the comment appears

    Scenario: User deletes their echo

    Given A the relevant user is signed in
    When The user clicks the delete button on their echo
    Then The echo should be deleted

    Scenario: Liking doesn't work if user is not signed in

    When A user is not signed
    Then A user clicks like nothing should happen

    Scenario: Liking works if user is signed in

    Given A user is signed in
    When A user clicks the like button it adds a like
    Then If the user clicks the like button again it takes away his like

    Scenario: Logging out user

    Given A user is signed in
    When The user clicks the LOGOUT button
    Then The user is logged out and is brought back to the auth page