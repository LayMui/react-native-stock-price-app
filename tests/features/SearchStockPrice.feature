Feature: Search Company StockPrice
  In order to know the stock price
  As a trader Jan
  Jan wants to see the stock price in real time
  
    Background: 
      Given Jan is at the stock price app
@test
  Scenario Outline: Able to view stock price with a valid company
    When he want to search for company "<company>"
    Then he is able to see the stock price displayed

    Examples:
    | company |
    | cc  |
