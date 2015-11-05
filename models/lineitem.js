'use strict';

/*
*  Constructor take item_data with is_grocery and the price
*/
function Lineitem(item_data) {
    this._is_grocery = item_data['is_grocery'];
    this._price= item_data['price'];
}

/*
*  Gets the price of item with discount applied if not grocery
*/  
Lineitem.prototype.getPrice =  function(discount) {
    // No discount
    if(this._is_grocery ) {
        return this._price;
    } else {
        // Discount
        return this._price * (1.0-discount);
    }
};

module.exports = Lineitem;
