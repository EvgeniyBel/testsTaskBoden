@clearCache @signOut
Feature: Check search functionality

  Background:
    Given Go to applications https://www.boden.co.uk

  Scenario: Enter a search for "stripy leggings", filtered by women
    Given I search stripy leggings
    When I add Women filter
    Then Filter Women is active
    And Filter All is not active
    And Filter Girls is not active
    And Filter Baby is not active
    And Field search result is equal stripy leggings
