Feature: Searchbar working correctly for signed in and non signed in users

    Scenario: Searchbar works correctly for a user not signed in
    
    Given A non-authenticated user is on the homepage
    When The user types 'Delhi Museum' in the search bar
    Then The correct echo appears

    Scenario: Error message appears if echo doesn't exist

    Given A non-authenticated user is on the homepage
    When A non auth user types in the searchbar 'Q'
    Then Assert an error message appears
