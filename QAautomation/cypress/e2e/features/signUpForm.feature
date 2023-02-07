Feature: Assert the SignUp Form is working correctly

    Scenario: Assert warning appears if field not filled out
    
    Given A user goes to the Sign Up card
    When A user is missing a field
    Then A warning message should appear

    Scenario: If passwords don't match user cannot sign up

    Given A user goes to the Sign Up card
    When A user enters all details but their passwords do not match
    Then The user cannot sign up

    Scenario: If user clicks the eye they can see their password

    Given A user goes to the Sign Up card
    When A user types in their password
    Then The user click the eye button they should be able to see their password

    Scenario: If user signs up accordingly they will be logged in

    Given A user goes to the Sign Up card
    When A user types all inputs with no mistakes
    Then The user should be signed into the application

    Scenario: If user types in a email address that is already taken they should be unable to sign up

    Given A user goes to the Sign Up card
    When A user types all inputs but the email it already taken
    Then The user cannot sign up