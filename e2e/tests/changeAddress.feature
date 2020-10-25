@editAddress
@clearCache
Feature: Change default Address
  
  Background: Go to application and Log in
    Given Go to applications https://www.boden.co.uk
    And Sing In

  Scenario: Change your default address to a different address
    Given Go to address book page
    And Go to edit Address Page
    When I change the address by postcode
    Then I see a changed address
