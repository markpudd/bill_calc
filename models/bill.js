'use strict';

/*
*  Constructor takes a list of Lineitems
*/
function Bill(items) {
    this._line_items = items
    
    // Config - Could add as constructor arg
    this._config = {
        hundred_discount : 5.0
    }
}

/*
*  Calcuate the discount amount based on hundreds on bill
*/
Bill.prototype.discountHundreds = function(total) {
    var no_hundreds = Math.floor(total / 100);
    return no_hundreds* this._config.hundred_discount;
};
  
/*
*  Calcuate the total with all discounts
*  Discount passed in as percentage
*/ 
Bill.prototype.totalWithDiscount = function(discount) {
    var total =0;
    for (var i = 0; i < this._line_items.length; i++) {
        total = total + this._line_items[i].getPrice(discount);
    }
    
    return total-this.discountHundreds(total); 
};


module.exports = Bill;
