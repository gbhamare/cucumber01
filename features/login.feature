 
Feature: Login to the application

Scenario: Login the application
    Given Launch the browser
    Then Login the url "https://admin-demo.nopcommerce.com/"
    Then Enter the username "admin@yourstore.com" and password "admin"
    And click on login
    And close browser
    
    
 Scenario Outline:Login the application
    Given Launch the browser
    Then Login the url "https://admin-demo.nopcommerce.com/"
    Then Enter the username "<email>" and password "<password>"
    And click on login
    And close browser
    
    Examples:
    | email | password |
    | admin@yourstore.com | admin |
    | admin@yourstore.com | admin123 |
    

  
