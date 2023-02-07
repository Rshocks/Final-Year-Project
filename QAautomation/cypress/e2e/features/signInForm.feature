Feature: Assert the SignUp Form is working correctly

    Scenario: Unable to sign in if password is not correct
    
    Given A user goes to the Sign In card
    When Enters all details but password is not correct
    Then The user cannot sign up

    Scenario: Unable to sign in if email is not correct
    
    Given A user goes to the Sign In card
    When Enters all details but email is not correct
    Then The user cannot sign up

    Scenario: Assert pop up appears if field not filled out
    
    Given A user goes to the Sign In card
    When A user is missing a field in the sign in form
    Then A warning message should appear

    Scenario: Assert user can be signed in when correct password and email inputted
    
    Given A user goes to the Sign In card
    When A user inputs all the correct fields
    Then The user should be signed into the application