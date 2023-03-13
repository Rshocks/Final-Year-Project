Feature: Searchbar working correctly for signed in and non signed in users

    Scenario: Searchbar works correctly for a user not signed in
    
    Given A non-authenticated user is on the homepage
    When The user types 'Delhi Museum' in the search bar
    Then The correct echo appears

    Scenario: Error message appears if echo doesn't exist for non signed in user

    Given A non-authenticated user is on the homepage
    When A non auth user types in the searchbar 'Q'
    Then Assert an error message appears

    Scenario: Searchbar works correctly for a user signed in
    
    Given A user is signed in
    When The user types 'All Ireland' in the search bar
    Then The correct echo appears for a signed in user

    Scenario: Error message appears if echo doesn't exist for signed in user

    Given A user is signed in
    When A non auth user types in the searchbar 'Q'
    Then Assert an error message appears

    Scenario: Search using tags works correctly for signed in user

    Given A user is signed in
    When A user types 'Ireland' into the tags
    Then All posts associated with Ireland appear

    Scenario: Error message using tags works correctly for signed in user

    Given A user is signed in
    When A user types 'Q' into the tags
    Then Assert an error message appears