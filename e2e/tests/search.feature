@clearCache @signOut
Feature: Check search functionality

  Background:
    Given Go to applications https://www.boden.co.uk

  Scenario: Enter a search for "stripy leggings", filtered by women
    When I search stripy leggings
    And I add filter Women
    Then Filter Women is active
    And Filter All is not active
    And Filter Girls is not active
    And Filter Baby is not active
    And Field search result is equal stripy leggings
