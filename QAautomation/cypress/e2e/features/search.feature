Feature: Assert the searchbar working correctly 

    Scenario: Searchbar works correctly for a user not signed in
    
    Given A non-authenticated user is on the homepage
    When The user types 'Delhi Museum' in the search bar
    Then The correct echo appears

    Scenario: Error message appears if a non signed in user searches for a non-existent echo

    Given A non-authenticated user is on the homepage
    When A non auth user types in the searchbar 'Q'
    Then Assert an error message appears
