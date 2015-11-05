README
------

There are three objects:-
  
    -  Bill - the bill
    -  Lineitem - line item on the bill
    -  User - user profile
    
To calculate the bill you must create the line items, construct a bill.   You would then create a user and run the getDiscoutPercent method to get the discount percentage.  This would then be passed into the bill totalWithDiscount method to get the bill amount (I'de assume these two steps would be done in what ever is using these)

This does not cater for leap years on the time the user has been a customer.   


The tests can be run using mocha.

