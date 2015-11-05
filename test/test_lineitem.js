'use strict';

var Lineitem = require('../models/lineitem');

var assert = require('assert');


describe('Lineitem', function() {
 
  describe('#getPrice()', function () {
      // test no discount
      it('test no discount  (expect 0)', function () {
      var lineitem = new Lineitem({ is_grocery : false,
                                   price : 10 });
      assert.equal(10, lineitem.getPrice(0));
     });
     
      // test discount grocery
      it('test grocery discount with discount (expect 0)', function () {
      var lineitem = new Lineitem({ is_grocery : true,
                                   price : 10 });
      assert.equal(10, lineitem.getPrice(0.3));
     });
     
      // test discount not  grocery (expect 7)
      it('test discount not  grocery (expect 7)', function () {
      var lineitem = new Lineitem({ is_grocery : false,
                                   price : 10 });
      assert.equal(7, lineitem.getPrice(0.3));
     });
   });
 });



