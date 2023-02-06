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