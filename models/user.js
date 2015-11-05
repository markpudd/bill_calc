'use strict';

var TWO_YEARS=365*2;
var DAYS=1000*60*60*24;
/*
* Constructor takes user_data with is_affiliate,is_employee and joined (date)
*/
function User(user_data) {
    
    this._is_affiliate = user_data['is_affiliate'];
    this._is_employee = user_data['is_employee'];
   
    //  Assume this is an acutual date (may have to be parsed in real world)
    this._joined = user_data['joined'];
    
    // Config - Could add as constructor arg
    this._config = { 
        time_discount : 0.05,
        affiliate_discount : 0.1,
        employee_discount : 0.3,
        
    };
}

/*
*   Checks if the user has been a member for more than 2 years
*/
User.prototype.isMoreThanTwoYears = function(date) {

    
    var td = date.getTime() - this._joined;
    // Leap year test is there a leap year within two years of join date
    return td > TWO_YEARS*DAYS;
};

/*
*   Gets users discount percentage
*/
User.prototype.getDiscoutPercent = function() {
    var discount;
    discount = this.isMoreThanTwoYears(new Date()) ? this._config.time_discount : 0.0;
    discount = this._is_affiliate ? this._config.affiliate_discount : discount;   
    return this._is_employee ? this._config.employee_discount : discount; 
};

module.exports = User;
