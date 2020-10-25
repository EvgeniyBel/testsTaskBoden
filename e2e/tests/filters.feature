@clearCache
Feature: Using filters

  Background:
    Given Go to applications https://www.boden.co.uk

  Scenario: Use filters to find blue, women's, size 16 jeans
    Given Go to Women menu item Jeans section
    When I set the value to 16 for the filter Size
    And I set the value to Blue for the filter Colour
    Then I see that there is 1 filter in Size
    And I see that there is 1 filter in Colour
