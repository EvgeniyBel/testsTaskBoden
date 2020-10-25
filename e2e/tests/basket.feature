@singOut @clearCache
Feature: add an item to the basket and go to the payment stage

  Background:
    Given Go to applications https://www.boden.co.uk
    And Sing In
    And I accept cookies

  Scenario: Log in, add an item to the basket and go through checkout process until you get to the payment stage
    Given Go to Women menu item Dresses & Jumpsuits section
    And I add item to basket
    And I open basket
    When I go to payment page
    Then I see payment methods and Place an order to pay button
