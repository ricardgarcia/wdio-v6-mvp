Feature: Access

  @smoke
  Scenario: Navigate to Google
    Given a user navigates to google
    When searches for wikipedia
    Then user get results