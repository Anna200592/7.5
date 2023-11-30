Feature: Tests tickets

Scenario: One seat reservation
  Given Home booking page            
  When click on the day of the week
  And click on the movie seance time
  And click on a seat
  And click on the accept button
  Then should see a message confirming the seat selection

Scenario: Two seat reservation
  Given Home booking page
  When click on the day of the week
  And click on the movie seance time
  And click on two seats
  And click on the accept button
  Then should see a message confirming the seat selection

Scenario: Reservation of occupied places
  Given Home booking page
  When click on the day of the week
  And click on the movie seance time
  Then should accept button be disabled